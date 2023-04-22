const fs = require("fs")
const { getAllCommands } = require("./modules/toolUtils.js")
const { argv } = require("process")

const starterArg = argv[2] || "help"
const starters = {}

getAllCommands().map((command) => {
    command.starters.map((starter) => {
        starters[starter] = command.funct
    })
})

if (starters[starterArg])
{
    const line = argv.slice(3)
    starters[starterArg](line)
} else {
    console.log(`Error: "${starterArg}" is not a valid command`)
}