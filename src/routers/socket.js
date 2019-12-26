const Cliente = require('../models/Cliente')
const discount = (io) => {
    return async function(req, res) {
        try {
            const {idTarjeta,terminalMac} = req.body
            // verificar termincal mac con un registro de macs habilidattas
            const cliente = await Cliente.findOne({idTarjeta})
            if(!cliente) return res.status(500).send({error:'La tarjeta no fue registrada'})
            
            const clientUpdated = await cliente.makeDiscount(12)
            
            io.sockets.emit("descuento", clientUpdated);
            res.status(200).send({nombres:clientUpdated.nombres,apellidoPaterno:clientUpdated.apellidoPaterno,credito:clientUpdated.credito})
        } catch (error) {
            res.status(400).send({error})
        }
    }
}
const validate = (io) => {
    return async function(req, res) {
        try {
    
            const {idTarjeta,terminalMac} = req.body
            // verificar termincal mac con un registro de macs habilidattas
            const cliente = await Cliente.findOne({idTarjeta})
            if(!cliente) return res.status(500).send({error:'La tarjeta no fue registrada'})
            io.sockets.emit("validacion", cliente);
            res.status(204).send()
        } catch (error) {
            res.status(400).send({error})
        }
    }
}

const registration = (io) => {
    return async function(req, res) {
        try {
            const {idTarjeta,terminalMac} = req.body
            // verificar termincal mac con un registro de macs habilidattas
            const cliente = await Cliente.findOne({idTarjeta})
            if(!cliente) return res.status(500).send({error:'La tarjeta no fue registrada'})
            
            cliente.estado = true

            const clientUpdated = await cliente.save()
            
            io.sockets.emit("registroRetorno", clientUpdated);
            res.status(200).send({nombres:clientUpdated.nombres,apellidoPaterno:clientUpdated.apellidoPaterno,credito:clientUpdated.credito,estado:clientUpdated.estado})
        } catch (error) {
            res.status(400).send({error})
        }
    }
}
module.exports = {
    descuento: discount,
    validacion: validate,
    registroRetorno: registration
}