const fs = require("fs")

const { argv } = require("process")

const starterArg = argv[2] || "help"
const starters = {}

fs.readdirSync(__dirname+"/tools/").map((path) => {
    if (!path.match(".*\\.js")) { return; }
    const data = require(__dirname+"/tools/"+path)
    // console.log(data)
    data.commands.map((command) => {
        command.starters.map((starter) => {
            starters[starter] = command.funct
        })
    })
})

if (starters[starterArg])
{
    const line = argv.slice(3)
    starters[starterArg](line)
} else {
    console.log(`Error: "${starterArg}" is not a valid command`)
}