const fs = require("fs")

const { argv } = require("process")

const starterArg = argv[2] || "help"
const starters = {}

fs.readdirSync(__dirname+"/tools/").map((path) => {
    let data
    const stats = fs.lstatSync(__dirname+"/tools/"+path)
    if (stats.isDirectory())
        data = require(__dirname+"/tools/"+path+"/index.js")
    else if (stats.isFile() && path.match(".*\\.js"))
        data = require(__dirname+"/tools/"+path)
    else
        return;

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