const fs = require("fs")

function funct()
{
    let helpStr = ""
    fs.readdirSync(__dirname).map((path) => {
        if (!path.match(".*\\.js")) { return; }
        const data = require(__dirname+"/"+path)
        helpStr += ` `
    })
}


const commands = [
    {
        funct: funct,
        flags: {},
        starters: ["", "help"],
        description: "Gives a description of every command"
    
    }
]

exports.commands = commands