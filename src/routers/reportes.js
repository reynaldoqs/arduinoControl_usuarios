const express = require('express')
const Recarga = require('../models/Recarga')
const Cliente = require('../models/Cliente')
const router = express.Router()

router.get('/reportes', async (req,res) => {
    try {
        const query = req.query
        const {inicio = '2018-01-01', final = new Date()} = query
        const options = {
            ...query,
            leanWithId: true,
            sort: { fechaRecarga: -1 },
            populate: [
                {
                    path: '_cajero',
                    select: 'cargo email nombres apellidoPaterno apellidoMaterno -_id'
                },
                {
                    path: '_cliente',
                    select: 'nombres apellidoPaterno credito apellidoMaterno ci idTarjeta -_id'
                }
            ]
        }
        
        const results = await Recarga.paginate({ fechaRecarga: { $gte: inicio, $lte: final }}, options);
        if(!results) return res.status(500).send({error:'Error interno'})

        res.send(results)
    } catch (error) {
        console.log(error)
        res.status(400).send({error})
    }
})

module.exports = router