import express from 'express'
import * as io from "socket.io"

import http from 'http'
import { router } from './routes.js'


const PORT = process.env.PORT || 5000

const app = express()
const server = http.createServer(app)
const socketio = new io.Server(server);

socketio.on('connection', (socket) => {
    console.log('we have a new connection!!!')

    socket.on('disconnect', () => {
        console.log('User has left')
    })
})

app.use(router)
server.listen(PORT, () => console.log(`Server is running on PORT : ${PORT}`))