const express = require('express')
const Recarga = require('../models/Recarga')
const Cliente = require('../models/Cliente')
const authorize = require('../middleware/auth')
const cargos = require('../helpers/cargos')
const router = express.Router()

router.post('/recarga', authorize([cargos.admin, cargos.cajero]), async (req, res) => {
    try {
        const user = req.user
        const {_cliente, montoRecarga} = req.body
        const clienteDB = await Cliente.findById(_cliente)
        if(!clienteDB) return res.status(500).send({error:'Error interno'})
        const creditoPrevio = clienteDB.credito
        await Cliente.updateOne({_id:_cliente},{credito: (creditoPrevio + montoRecarga)})
        const recarga = new Recarga({
            _cliente,
            _cajero: user._id,
            montoRecarga,
            creditoPrevio
        })
        const newRecarga = await recarga.save()
        if(!newRecarga) return res.status(500).send({error:'Error interno'})

        res.send(newRecarga)
    } catch (error) {
        res.status(400).send({error})
    }
})
router.get('/recarga', authorize([cargos.admin, cargos.cajero, cargos.tAdmin]), async (req, res) => {
    try {
        const query = req.query
        console.log(req.user)
        const options = {
            ...query,
            leanWithId: false,
            populate: [
                {
                    path: '_cajero',
                    select: 'cargo email nombres apellidoPaterno apellidoMaterno -_id'
                },
                {
                    path: '_cliente',
                    select: 'nombres apellidoPaterno credito apellidoMaterno ci -_id'
                }
            ]
        }

        const results = await Recarga.paginate({}, options);
        if(!results) return res.status(500).send({error:'Error interno'})

        res.send(results)
    } catch (error) {
        res.status(400).send({error})
    }
})



module.exports = router