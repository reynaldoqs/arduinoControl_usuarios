const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_LOCAL_URL, {
    useNewUrlParser: true
}).then(
    () => {console.log('\x1b[32m','---> Base de datos contectado','\x1b[0m')},
    err => {console.log('\x1b[31m', err,'\x1b[0m')}
)