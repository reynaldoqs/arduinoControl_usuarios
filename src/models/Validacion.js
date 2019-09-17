const mongoose = require('mongoose')

const validacionSchema = mongoose.Schema({
    _validador: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    usuario: {
        idTarjeta: {
            type: Number
        },
        nombres: {
            type: String
        },
        apellidoPaterno: {
            type: String
        },
        apellidoMaterno: {
            type: String
        },
        ci: {
            type: String
        },
    },
    fechaValidacion: {
        type: Date,
        default: Date.now()
    },
    observacion: {
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

const Validacion = mongoose.model('Validacion', validacionSchema)

module.exports = Validacion