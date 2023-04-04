const fs = require("fs")

function funct()
{
    let helpStr = ""
    fs.readdirSync(__dirname).map((value) => {
        if (!path.match(".*\\.js")) { return; }
        const data = require(__dirname+"/"+path)
        helpStr += ` `
    })
}


const starters = [
    {
        funct: funct,
        flags: {},
        starters: ["", "help"],
        description: "Gives a description of every command"
    
    }
]

exports.starters = starters