
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

emitter.on('messageLogged', function() {
    console.log('Listener called')
})

emitter.emit('messageLogged')

console.log(files)