const express = require('express')
const userRouter = require('./routers/user')
const validacionRouter = require('./routers/validacion')
const cors = require('cors')
const port = process.env.PORT
require('./db/db')

const app = express()

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(validacionRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
