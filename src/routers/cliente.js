const express = require('express')
const Cliente = require('../models/Cliente')
const verifyAuth = require('../middleware/auth')

const router = express.Router()

router.post('/clientes', verifyAuth, async (req, res) => {
    try {
        const data = req.body
        const cliente = new Cliente(data)
        const newCliente = await cliente.save()
        if(!newCliente) return res.status(500).send({error:'DB internal error'})

        res.send(newCliente)
    } catch (error) {
        res.status(400).send({error})
    }
})
router.get('/clientes', verifyAuth, async (req, res) => {
    try {
        const query = req.query
        const options = {
            ...query,
            leanWithId: false
        }
        const results = await Cliente.paginate({}, options);
        if(!results) return res.status(500).send({error:'Internal error'})

        res.send(results)
    } catch (error) {
        res.status(400).send({error})
    }
})

router.patch('/clientes/:id', verifyAuth, async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const clienteUpdated = await Cliente.updateOne({_id:id},body)
        if(!clienteUpdated) return res.status(500).send({error:'Internal error'})
        res.status(200).send(clienteUpdated)
    } catch (error) {
        res.status(400).send({error})
    }
})


module.exports = router