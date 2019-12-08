const { Router } = require('express')
const router = Router()
const Cooperativa = require('../models/Cooperativa')

router.get('/cooperativas', async (req, res) => {
    try {
        const destino = req.query.destino
        const cooperativas = await Cooperativa.find({'destinos._destino':destino})
        const results = cooperativas.map(c => { 
            c.destinos = c.destinos.filter(x => {
                return x._destino.toString() === destino
            })
            return c
        })
        if(!results) return res.status(500).send({error:'Error interno'})
        res.send(results)
    } catch (error) {
        res.status(400).send({error})
    }
})
router.post('/cooperativas', async (req, res) =>{
    try {
        const data = req.body
        const coopertiva = new Cooperativa(data)
        const newCooperativa = await coopertiva.save()
        if(!newCooperativa) return res.status(500).send({error:'error interno'})
        res.send(newCooperativa)
    } catch (error) {
        res.status(400).send({error})
    }
})

module.exports = router