const express = require('express')
const verifyAuth = require('../middleware/auth')
const ObjetoPerdido = require('../models/ObjetoPerdido')
const router = express.Router()

router.post('/objetos', verifyAuth, async (req, res) => {
    try {
        const body = req.body
        const objectoSaved = new ObjetoPerdido(body)
        await objectoSaved.save()
        res.status(204).send()
    } catch (error) {
        res.status(400).send({error})
    }
})
router.get('/objetos', verifyAuth, async (req, res) => {
    try {
        const query = req.query
        const options = {
            ...query,
            leanWithId: false,
        }

        const results = await ObjetoPerdido.paginate({}, options);
        if(!results) return res.status(500).send({error:'Internal error'})

        res.send(results)
    } catch (error) {
        res.status(400).send({error})
    }
})
router.patch('/objetos/:id', verifyAuth, async (req, res) => {
    try {
        const body = req.body
        const id = req.params.id

        const objectoUpdated = await ObjetoPerdido.findByIdAndUpdate(id,{...body},{new:true})
        if(!objectoUpdated) return res.status(500).send({error:'Internal Error'})
        
        res.status(204).send()
    } catch (error) {
        res.status(400).send({error})
    }
})

module.exports = router