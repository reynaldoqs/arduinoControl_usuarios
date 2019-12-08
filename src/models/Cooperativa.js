const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const cooperativaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    destinos: [
        {
            _id: false,
            _destino: { type: mongoose.Schema.Types.ObjectId, ref: 'Destino' },
            costo: Number,
            manana:[
                {
                    _id: false,
                    horario: String
                }
            ],
            tarde: [
                {
                    _id: false,
                    horario: String
                }
            ],
            noche: [
                {
                    _id: false,
                    horario: String
                }
            ],
            telefonos:[
                String
            ]
        }
    ]
})

cooperativaSchema.plugin(mongoosePaginate)

const Cooperativa = mongoose.model('Cooperativa', cooperativaSchema)

module.exports = Cooperativa