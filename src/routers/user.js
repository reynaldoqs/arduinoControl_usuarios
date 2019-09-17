const express = require('express')
const User = require('../models/User')
const verifyAuth = require('../middleware/auth')

const router = express.Router()

router.post('/users', async (req, res) => {
    try {
        body = req.body
        body.cargo = 'observador'
        const user = new User(body)
        await user.save()
        const token = await user.generateAuthToken()
        const {cargo, email} = user;
        res.status(201).send({cargo, email, token })
    } catch (error) {
        res.status(400).send({error})
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        if(!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        const {cargo} = user;
        res.status(200).send({cargo, email, token })
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error)
    }
})

router.patch('/admin/users/update', verifyAuth, async (req, res) =>{
    try {
        if(req.user.cargo !== 'administrador') return res.status(401).send({ error: 'Not authorized'})
        const userUpdated = await User.findByEmailAndUpdate(req.body.email, req.body)
        if(!userUpdated) throw new Error('Check you json fields')
        res.status(204).send()
    } catch (error) {
        res.status(400).send({error: error.message})
    }
})
router.get('/admin/users', verifyAuth, async (req, res) => {
    try {
        if(req.user.cargo !== 'administrador') return res.status(401).send({ error: 'Not authorized'})
        const users = await User.find({})
        const usersMaped = users.map(user => {
            user.password = null
            user.tokens = []
            return user
        })
        
        res.status(200).send(usersMaped)
    } catch (error) {
        res.status(400).send({error: error.message})
    }
})
router.delete('/admin/users/remove', verifyAuth, async (req, res) => {
    try {
        if(req.user.cargo !== 'administrador') return res.status(401).send({ error: 'Not authorized'})
        const userUpdated = await User.findByEmailAndRemove(req.body.email)
        if(!userUpdated) throw new Error('Error removing this user')
        res.status(204).send()
    } catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.get('/users/profile', verifyAuth, (req, res) => {
    const {cargo, email, apPaterno, apMaterno, ci, nombres, celular, direccion } = req.user
    res.status(200).send({cargo, email, apPaterno, apMaterno, ci, nombres, celular, direccion})
})
router.post('/users/profile/logout', verifyAuth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.status(204).send()
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/users/profile/logutall', verifyAuth, async(req, res) => {
    try {
        req.user.tokens.splice(0, req.user.tokens.length)
        await req.user.save()
        res.status(204).send()
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router