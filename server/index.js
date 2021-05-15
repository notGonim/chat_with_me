import express from 'express'
import * as io from "socket.io"

import http from 'http'


const PORT = process.env.PORT || 5000

const app = express()
const server = http.createServer(app)
const socketio = new io.Server(server);


server.listen(PORT, () => console.log(`Server is running on PORT : ${PORT}`))