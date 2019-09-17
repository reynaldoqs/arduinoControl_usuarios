const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_LOCAL_URL, {
    useNewUrlParser: true
})