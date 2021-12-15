const chalk = require('chalk')
const yargs = require('yargs')
const note = require('./notes.js')

yargs.command({
    command: 'list',
    describe: 'List Command Description',
    handler: function() {
        console.log('List Command Handler')
    }
})
console.log(yargs.argv)