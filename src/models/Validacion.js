const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const validacionSchema = mongoose.Schema({
    _validador: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    _cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
    fechaValidacion: {
        type: Date,
        default: Date.now()
    },
    observaciones: {
        type: String,
        required: false,
        trim: true
    },
    botiquin: {
        type: Boolean,
        default: false,
    },
    exintor: {
        type: Boolean,
        default: false,
    },
    triangulo: {
        type: Boolean,
        default: false,
    },
    placasLaterales: {
        type: Boolean,
        default: false,
    },
    llantaAuxilio: {
        type: Boolean,
        default: false,
    },
    herramientas: {
        type: Boolean,
        default: false,
    }
})


validacionSchema.plugin(mongoosePaginate)

const Validacion = mongoose.model('Validacion', validacionSchema)

module.exports = Validacion