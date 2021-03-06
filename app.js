
const fs = require('fs')
const files = fs.readdirSync('./')

fs.readdir('./', function (error, result) {

    if (error) {
        logger.log(error)
    } else {
        logger.log(result)
    }

})

const EventEmitter = require('events')

const Logger = require('./logger')
const logger = new Logger()

logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg)
})

const http = require('http')

const server = http.createServer((request, response) => {
    if(request.url == '/') {
        response.write('Hello!')
        response.end()
    }

    if(request.url === '/api/schools') {
        response.write(JSON.stringify([1, 2, 3]))
        response.end()
    }
})

server.listen(3002)

logger.log('Listening on port 3002')