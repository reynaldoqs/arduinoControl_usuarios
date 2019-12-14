const express = require('express')
const Validacion = require('../models/Validacion')
const authorize = require('../middleware/auth')
const cargos = require('../helpers/cargos')

const router = express.Router()

router.post('/validacion', authorize([cargos.admin,cargos.tValidador]), async (req, res) => {
    try {
        const user = req.user
        const data = req.body

        const validacion = new Validacion({
            ...data,
            _validador: user._id
        })
        const newValidacion = await validacion.save()
        if(!newValidacion) return res.status(500).send({error:'Error interno'})

        res.send(newValidacion)
    } catch (error) {
        res.status(400).send({error})
    }
})
router.get('/validacion', authorize([cargos.admin,cargos.tValidador,cargos.tAdmin]), async (req, res) => {
    try {
        const query = req.query
        const customQuery = JSON.parse(query.query)
        const type = customQuery.mode || "normal"
        let searchQuery = customQuery.search || ""
        searchQuery = searchQuery.toLowerCase()
        const options = {
            ...query,
            leanWithId: false,
            sort: { fechaValidacion: -1 },
            populate: [
                {
                    path: '_validador',
                    select: 'cargo email nombres apellidoPaterno apellidoMaterno -_id'
                },
                {
                    path: '_cliente',
                    select: 'nombres apellidoPaterno apellidoMaterno ci idTarjeta -_id'
                }
            ]
        }

        const results = await Validacion.paginate({}, options);
        if(type === "search"){
        
            results.docs = results.docs.filter(x => x._cliente?true:false)
            results.docs = results.docs.filter(x => {
                let others = x._cliente.idTarjeta + " " +x._cliente.ci
                let formet = x._cliente.nombres + " " + x._cliente.apellidoPaterno +" "+x._cliente.apellidoMaterno
                return (formet.toLowerCase().includes(searchQuery) || others.includes(searchQuery))
            })
            results.limit = results.docs.length
            results.totalDocs = results.docs.length
        }
        if(!results) return res.status(500).send({error:'Error interno'})

        res.send(results)
    } catch (error) {
        res.status(400).send({error})
    }
})



module.exports = router