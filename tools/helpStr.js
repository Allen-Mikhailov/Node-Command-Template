const fs = require("fs")

const tab = "     "
const quotes = '"'

function wrapList(list, mid, head, tail)
{
    let str = ""
    mid = mid || ", "
    head = head || ""
    tail = tail || head || ""

    list.map((value) => {
        str += `${head}${value}${tail}${mid}`
    })

    str = str.substring(0, str.length-mid.length)
    return str
}

function funct()
{
    let helpStr = ""
    fs.readdirSync(__dirname).map((path) => {
        let data
        const stats = fs.lstatSync(__dirname+"/"+path)
        if (stats.isDirectory())
        data = require(__dirname+"/"+path+"/index.js")
        else if (stats.isFile() && path.match(".*\\.js"))
        data = require(__dirname+"/"+path)
        else
            return;
        
        data.commands.map((command) => {
            helpStr += `${wrapList(command.starters, quotes)}\n${tab}- ${command.description}`
        })
    })

    console.log(helpStr)
}

const commands = [
    {
        funct: funct,
        flags: {
            "-test-flag": "boby"
        },
        starters: ["", "help"],
        name: "help",
        description: "Gives a description of every command"
    
    }
]

exports.commands = commands