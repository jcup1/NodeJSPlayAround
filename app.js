
const fs = require('fs')
const files = fs.readdirSync('./')

fs.readdir('./', function(error, result) {

    if(error) {
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