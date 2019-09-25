const express = require('express')
const Recarga = require('../models/Recarga')
const Cliente = require('../models/Cliente')
const verifyAuth = require('../middleware/auth')

const router = express.Router()

router.post('/recarga', verifyAuth, async (req, res) => {
    try {
        const user = req.user
        const {_cliente, montoRecarga} = req.body
        const clienteDB = await Cliente.findById(_cliente)
        if(!clienteDB) return res.status(500).send({error:'Internal error'})
        const creditoPrevio = clienteDB.credito
        await Cliente.updateOne({_id:_cliente},{credito: (creditoPrevio + montoRecarga)})
        const recarga = new Recarga({
            _cliente,
            _cajero: user._id,
            montoRecarga,
            creditoPrevio
        })
        const newRecarga = await recarga.save()
        if(!newRecarga) return res.status(500).send({error:'Internal error'})

        res.send(newRecarga)
    } catch (error) {
        res.status(400).send({error})
    }
})
router.get('/recarga', verifyAuth, async (req, res) => {
    try {
        const query = req.query
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
                    select: 'nombres apellidoPaterno apellidoMaterno ci -_id'
                }
            ]
        }

        const results = await Recarga.paginate({}, options);
        if(!results) return res.status(500).send({error:'Internal error'})

        res.send(results)
    } catch (error) {
        res.status(400).send({error})
    }
})



module.exports = router