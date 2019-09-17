const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true,
        trim: true
    },
    apPaterno: {
        type: String,
        required: false,
        trim: true
    },
    apMaterno: {
        type: String,
        required: false,
        trim: true
    },
    ci: {
        type: String,
        required: true,
        trim: true
    },
    celular: {
        type: Number,
        required: false,
        trim: true
    },
    direccion: {
        type: String,
        required: false,
        trim: true
    },
    cargo: {
        type: String,
        required: true,
        enum: ['administrador', 'transito', 'cajero', 'odeco', 'observador'],
        trim: true,
        default: 'observador'
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if (!validator.isEmail(value)){
                throw new Error({error: 'Invalid Email address'})
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.pre('save', async function(next) {
    const user = this
    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

userSchema.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({_id: user._id}, process.env.JWT_KEY, { expiresIn: '12h'})
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    try {
        const user = await User.findOne({ email} )
        if (!user) {
            console.log('we will send Error')
            throw 'Invalid login credentials'
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
            throw 'Invalid login credentials'
        }
        return user
    } catch (error) {
        return null
    }
}

userSchema.statics.findByEmailAndUpdate = async (email, body) => {
    try {
        const user = await User.findOne({ email } )
        if(!user) {
            throw "User with this email doesn't exist"
        }
        const { password } = body
        delete body['email']
        if(password) {
            const newPassword = await bcrypt.hash(password, 8)
            await user.updateOne({...body, password: newPassword})
            return user
        }
        await user.updateOne(body)
        return user
    } catch (error) {
        return null
    }
}

userSchema.statics.findByEmailAndRemove = async (email) => {
    try {
        const user = await User.findOne({ email } )
        if(!user) {
            throw "User with this email doesn't exist"
        }
        await user.remove()
        return {}
    } catch (error) {
        return null
    }
}

const User = mongoose.model('User', userSchema)

module.exports = User