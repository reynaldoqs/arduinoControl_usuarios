const express = require('express')
const userRouter = require('./routers/usuario')
const validacionRouter = require('./routers/validacion')
const objetosRouter = require('./routers/objetoPerdido')
const clienteRouter = require('./routers/cliente')
const recargasRouter = require('./routers/recarga')
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
app.use(recargasRouter)
//socket route
app.post('/socket_desc',  socketActions.descuento(io))
app.post('/socket_val',  socketActions.validacion(io))

server.listen(port, () => {
  console.log('\x1b[32m',`---> Server corriendo en el puerto ${port}`,'\x1b[0m')
})


/*
var io = require('socket.io').listen(server, {
  log: false,
  agent: false,
  origins: '*:*',
  transports: ['websocket', 'htmlfile', 'xhr-polling', 'jsonp-polling', 'polling']
});*/
