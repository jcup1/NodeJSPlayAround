
const logger = require('./logger')
const fs = require('fs')

const files = fs.readdirSync('./')

fs.readdir('./', function(error, result) {

    if(error) {
        console.log("Error", error)
    } else {

        console.log("Result", result)
    }

})

//class
const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg)
})

emitter.emit('messageLogged', { id: 1, url: "http://" })

emitter.on('logging', (arg) => {
    console.log(arg)
}) 

emitter.emit('logging', {id: 2, message: "Logging"})

console.log(files)