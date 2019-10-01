const express = require('express')
const User = require('../models/Usuario')
const router = express.Router()
const authorize = require('../middleware/auth')
const cargos = require('../helpers/cargos')
router.post('/users', authorize(cargos.admin), async (req, res) => {
    try {
        const body = req.body
        //body.cargo = 'observador'
        const user = new User(body)
        await user.save()
        //const token = await user.generateAuthToken()
        //const {cargo, email} = user;
        res.status(204).send()
    } catch (error) {
        res.status(400).send({error})
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        if(!user) {
            return res.status(401).send({error: 'Login fallido, verificar credenciales'})
        }
        const token = await user.generateAuthToken()
        const {cargo} = user;
        res.status(200).send({cargo, email, token })
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error)
    }
})

router.patch('/admin/users', authorize(cargos.admin), async (req, res) =>{
    try {
        const userUpdated = await User.findByEmailAndUpdate(req.body.email, req.body)
        if(!userUpdated) throw new Error('Campos invalidos')
        res.status(204).send()
    } catch (error) {
        res.status(400).send({error: error.message})
    }
})
router.get('/admin/users', authorize(cargos.admin), async (req, res) => {
    try {
        
        const query = req.query
        const options = {
            ...query,
            select:'cargo nombres apellidoPaterno apellidoMaterno celular email password ci',
            leanWithId: false,
            populate: {
                path: '_validador',
                select: 'cargo email nombres apPaterno apMaterno -_id'
            }
        }

        const results = await User.paginate({}, options);

        if(!results) return res.status(500).send({error:'Error interno'})

        res.send(results)
    } catch (error) {
        res.status(400).send({error: error.message})
    }
})
router.delete('/admin/users', authorize(cargos.admin), async (req, res) => {
    try {
        const userUpdated = await User.findByEmailAndRemove(req.body.email)
        if(!userUpdated) throw new Error('Error al borrar este usuario')
        res.status(204).send()
    } catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.get('/users/profile', authorize([cargos.admin, cargos.cajero,cargos.obs,cargos.odeco,cargos.tAdmin,cargos.tValidador]), (req, res) => {
    const {cargo, email, apPaterno, apMaterno, ci, nombres, celular, direccion } = req.user
    res.status(200).send({cargo, email, apPaterno, apMaterno, ci, nombres, celular, direccion})
})
router.post('/users/profile/logout', authorize([cargos.admin, cargos.cajero,cargos.obs,cargos.odeco,cargos.tAdmin,cargos.tValidador]), async (req, res) => {
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

router.post('/users/profile/logutall', authorize([cargos.admin, cargos.cajero,cargos.obs,cargos.odeco,cargos.tAdmin,cargos.tValidador]), async(req, res) => {
    try {
        req.user.tokens.splice(0, req.user.tokens.length)
        await req.user.save()
        res.status(204).send()
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router