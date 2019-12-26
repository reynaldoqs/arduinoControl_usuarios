const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const clienteSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true,
        trim: true
    },
    apellidoPaterno: {
        type: String,
        required: false,
        trim: true
    },
    apellidoMaterno: {
        type: String,
        required: false,
        trim: true
    },
    ci: {
        type: Number,
        required: true,
        trim: true
    },
    credito: {
        type: Number,
        required: true,
        default: 0
    },
    idTarjeta: {
        type: Number,
        required: true,
        unique: true
    },
    estado: {
        type: Boolean,
        default: false
    },
    photoUrl:{
        type: String
    },
    ruta: {
        type: String,
        required: false,
        trim: true
    },
    operador: {
        type: String,
        required: false,
        trim: true
    },
    observaciones: {
        type: String,
        required: false,
        trim: true
    },
    nroPlaca: {
        type: String,
        required: false,
        trim: true
    },
    nroChasis: {
        type: String,
        required: false,
        trim: true
    },
    modelo: {
        type: String,
        required: false,
        trim: true
    },
    licencia: {
        type: String,
        required: false,
        trim: true
    },
    clase: {
        type: String,
        required: false,
        trim: true
    },
    carPhotoUrl: {
        type: String,
        required: false
    },
    capacidad: {
        type: String,
        required: false,
        trim: true
    },
    horario: {
        type: String,
        required: false,
        trim: true
    },
    relevos: [
        {
           chofer: String,
           ci: String,
           licencia: String 
        }
    ],
})
/*
userSchema.pre('save', async function(next) {
    const user = this
    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})
*/
clienteSchema.methods.makeDiscount = async function(mount = 0) {
    const cliente = this
    if(cliente.credito  - mount < 0) throw 'Credito insuficiente'
    cliente.credito -= mount
    await cliente.save()
    return cliente     
}

clienteSchema.plugin(mongoosePaginate)
const Cliente = mongoose.model('Cliente', clienteSchema)

module.exports = Cliente