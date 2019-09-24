const express = require('express')
const userRouter = require('./routers/usuario')
const validacionRouter = require('./routers/validacion')
const objetosRouter = require('./routers/objetoPerdido')
const clienteRouter = require('./routers/cliente')
const socketActions = require('./routers/socket')
const cors = require('cors')
const port = process.env.PORT
require('./db/db')

const app = express()
//socket config
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(userRouter)
app.use(validacionRouter)
app.use(objetosRouter)
app.use(clienteRouter)
//socket route
app.post('/socket',  socketActions.descuento(io))
app.get('/socket',  socketActions.validacion(io))

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})


/*
var io = require('socket.io').listen(server, {
  log: false,
  agent: false,
  origins: '*:*',
  transports: ['websocket', 'htmlfile', 'xhr-polling', 'jsonp-polling', 'polling']
});*/
