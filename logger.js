const EventEmitter = require('events')

var url = 'http://mylogger.io/log'

class Logger extends EventEmitter{

    log(message) {
        //send an http request
        console.log(message)
    
        this.emit('messageLogged', { id: 2, message: "message" })
    
    }

}


module.exports = Logger