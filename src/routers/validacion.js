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

        const options = {
            ...query,
            leanWithId: false,
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
        if(!results) return res.status(500).send({error:'Error interno'})

        res.send(results)
    } catch (error) {
        res.status(400).send({error})
    }
})



module.exports = router