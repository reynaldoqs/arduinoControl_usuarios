const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const objetoSchema = mongoose.Schema({
    fechaRegistro: {
        type: Date,
        default: Date.now()
    },
    objeto: {
        type: String,
        required: false,
        trim: true
    },
    detalles: {
        type: String,
        required: false,
        trim: true
    },
    urlImagen: {
        type: String,
        required: false,
    },
    estado: {
        type: String,
        required: true,
        enum: ['solucionado', 'pendiente'],
        trim: true,
        default: 'pendiente'
    }
})


objetoSchema.plugin(mongoosePaginate)

const ObjectoPerdido = mongoose.model('ObjectoPerdido', objetoSchema)

module.exports = ObjectoPerdido