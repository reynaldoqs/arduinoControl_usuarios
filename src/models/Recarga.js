const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const recargaSchema = mongoose.Schema({
    _cajero: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    _cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
    fechaRecarga: {
        type: Date,
        default: Date.now()
    },
    montoRecarga: {
        type: Number,
        required: true
    },
    creditoPrevio: {
        type: Number,
        default: 0,
    }
})


recargaSchema.plugin(mongoosePaginate)

const Recarga = mongoose.model('Recarga', recargaSchema)

module.exports = Recarga