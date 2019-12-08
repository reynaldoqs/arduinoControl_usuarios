const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const destinoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    urlImagen: {
        type: String,
        required: false
    },
    informacion:{
        type: String,
        trim: true
    }
})

destinoSchema.plugin(mongoosePaginate)

const Destino = mongoose.model('Destino', destinoSchema)

module.exports = Destino