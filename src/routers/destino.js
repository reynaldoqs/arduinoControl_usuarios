const express = require('express')
const Destino = require('../models/Destino')
const router = express.Router()
const cargos = require('../helpers/cargos')
const authorize = require('../middleware/auth')

router.get('/destinos', async (req, res) => {
    try {
        const query = req.query
        const options = {
            ...query,
            leanWithId: false
        }
        const results = await Destino.paginate({}, options);
        if(!results) return res.status(500).send({error:'Error interno'})
        res.send(results)
    } catch (error) {
        res.status(400).send({error})
    }
})

router.post('/destinos',/* authorize([cargos.admin, cargos.odeco]),*/ async (req, res) => {
    try {
        const data = req.body
        const destino = new Destino(data)
        const newDestino = await destino.save()
        if(!newDestino) return res.status(500).send({error:'Error interno'})
        res.send(newDestino)
    } catch (error) {
        res.status(400).send({error})
    }
})
router.patch('/objetos/:id', async (req, res) => {
    try {
        const body = req.body
        const id = req.params.id
        const objectoUpdated = await ObjetoPerdido.findByIdAndUpdate(id,{...body},{new:true})
        if(!objectoUpdated) return res.status(500).send({error:'Error interno'})
        
        res.status(204).send()
    } catch (error) {
        res.status(400).send({error})
    }
})

module.exports = router