const express = require('express')
const http = require('http')
const ws = require('ws')
const app = express()

const server = http.createServer(app)
const socket  = new ws.Server({server: server})


socket.on('connection', (event)=>{

    console.log("connection done")
})

server.listen(8000, '0.0.0.0')