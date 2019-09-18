const express = require('express')
const User = require('../models/User')
const Validacion = require('../models/Validacion')
const verifyAuth = require('../middleware/auth')
const mongoose = require('mongoose')

const router = express.Router()

router.post('/validacion', verifyAuth, async (req, res) => {
    try {
        const user = req.user
        const data = req.body
        console.log(user._id)
        console.log(data)

        const validacion = new Validacion({
            ...data,
            _validador: user._id,
        })
        const newValidacion = await validacion.save()
        if(!newValidacion) return res.status(500).send({error:'DB internal error'})

        res.send(newValidacion)
    } catch (error) {
        res.status(400).send({error})
    }
})
router.get('/validacion', verifyAuth, async (req, res) => {
    try {
        const user = req.user
        const query = req.query
        console.log(query)

        const options = {
            ...query,
            leanWithId: false,
            populate: {
                path: '_validador',
                select: 'cargo email nombres apPaterno apMaterno -_id'
            }
        }

        const results = await Validacion.paginate({}, options);
        if(!results) return res.status(500).send({error:'DB internal error'})

        res.send(results)
    } catch (error) {
        res.status(400).send({error})
    }
})



module.exports = router