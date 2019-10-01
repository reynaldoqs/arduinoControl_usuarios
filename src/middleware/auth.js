const jwt = require('jsonwebtoken')
const User = require('../models/Usuario')


const authorize = ( cargos = [] ) => {
    if(typeof cargos === 'string') cargos = [cargos]
    return async(req, res, next) => {
        try {
            const token = req.header('Authorization').replace('Bearer ', '')
            const data = jwt.verify(token.trim(), process.env.JWT_KEY)
            const user = await User.findOne({_id: data._id, 'tokens.token': token})
            if (!user) {
                throw new Error()
            }
            req.user = user
            req.token = token
            if(!cargos.includes(user.cargo)){
                return res.status(401).send({ error: 'No autorizado para este recurso'})
            }
            next()
        } catch (error) {
            res.status(401).send({ error: 'No autorizado para este recurso'})
        }
    }
}


module.exports = authorize