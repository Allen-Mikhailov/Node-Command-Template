const fs = require("fs")

const dir = __dirname+"/../tools/"

function getAllCommands()
{
    let commands = []
    fs.readdirSync(dir).map((path) => {
        let data
        const stats = fs.lstatSync(dir+"/"+path)
        if (stats.isDirectory())
            data = require(dir+"/"+path+"/index.js")
        else if (stats.isFile() && path.match(".*\\.js"))
            data = require(dir+"/"+path)
        else
            return;

        if (typeof(data) == Array)
            commands = commands.concat(data.d)
        else if (typeof(data.d) == typeof({}))
            commands.push(data.d)
        else
            console.log(`Error: Unidentified type ${toString(typeof(data.d))} in ${path}`)
    })
    return commands
}

exports.getAllCommands = getAllCommands