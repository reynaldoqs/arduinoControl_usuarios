const express = require('express')
const authorize = require('../middleware/auth')
const ObjetoPerdido = require('../models/ObjetoPerdido')
const router = express.Router()
const cargos = require('../helpers/cargos')

router.post('/objetos', authorize([cargos.admin, cargos.odeco]), async (req, res) => {
    try {
        const body = req.body
        const objectoSaved = new ObjetoPerdido(body)
        await objectoSaved.save()
        res.status(204).send()
    } catch (error) {
        res.status(400).send({error})
    }
})
router.get('/objetos', authorize([cargos.admin, cargos.odeco]), async (req, res) => {
    try {
        const query = req.query
        const options = {
            ...query,
            leanWithId: false,
        }
        const results = await ObjetoPerdido.paginate({}, options);
        if(!results) return res.status(500).send({error:'Error interno'})

        res.send(results)
    } catch (error) {
        res.status(400).send({error})
    }
})
router.patch('/objetos/:id', authorize([cargos.admin, cargos.odeco]), async (req, res) => {
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