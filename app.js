
const logger = require('./logger')
const fs = require('fs')

const files = fs.readdirSync('./')

fs.readdir('./', function(error, result) {

    if(error) {
        console.log("Error", error);
    } else {
        console.log("Result", result)
    }

} )

console.log(files);