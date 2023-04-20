const fs = require("fs")

const indent = "  "
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

function spaceStr(spaces)
{
    let space = ""
    for (let i = 0; i < spaces; i++)
    {
        space += " "
    }
    return space
}

function funct()
{
    let helpStr = ""

    console.log()
    console.log("Usage: ")
    console.log(`${indent}asciis <command> [options]`)
    console.log()
    console.log("Commands: ")

    const commands = []

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
            commands.push(command)
        })
    })

    // Gathering length data
    let starterLength = 0
    let flagSize = 0
    commands.map((command) => {
        let starterStr = wrapList(command.starters, " ")
        if (starterLength < starterStr.length)
            starterLength = starterStr.length

        command.flags.map((flag) => {
            let flagStr = wrapList(flag.starters, " ")
            if (flagSize < flagStr.length)
                flagSize = flagStr.length
        })
    })

    commands.map((command) => {
        let starts = wrapList(command.starters, " ")
        console.log(indent + starts + spaceStr(starterLength-starts.length) + " : "+ command.description)
    })

    console.log(helpStr)
}

const commands = [
    {
        funct: funct,
        flags: [
            {
                starters: ["-h", "-1"]
            }
        ],
        starters: ["help", "help2"],
        description: "Gives a description of every command"
    
    }
]

exports.commands = commands