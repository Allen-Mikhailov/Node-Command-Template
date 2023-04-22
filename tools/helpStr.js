const fs = require("fs")
const { flaghandler } = require("../modules/flaghandler.js")
const { getAllCommands } = require("../modules/toolUtils.js")

const indent = "  "
const quotes = '"'
const wrapSpacer = " - "

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

function getWrapSize(list, wrap)
{
    let biggestSize = 0
    list.map((starters) => {
        if (wrapList(starters.starters, wrap).length > biggestSize)
            biggestSize = wrapList(list, wrap).length
    })
    return biggestSize
}

const command = {
        funct: funct,
        flags: [
            {
                put: ["command"],
                starters: ["base"],
                args: 1,
                priority: 1,
                required: false,
                description: "Does Stuff"
            }
        ],
        starters: ["help", "help2"],
        description: "Gives a description of every command"
    
    }

function printAllCommands(commands)
{

}

function printCommand(command)
{

}

function funct(arglist)
{
    let helpStr = ""

    console.log()
    console.log("Usage: ")
    console.log(`${indent}asciis <command> [options]`)
    console.log()
    console.log("Commands: ")

    const commands = getAllCommands()

    // Gathering length data
    let starterLength = getWrapSize(commands, wrapSpacer)
    let flagSize = 0
    commands.map((command) => {
        
        let dSize = getWrapSize(command.flags, wrapSpacer)
        if (dSize < flagSize)
                flagSize = dSize
    })

    const p = flaghandler(command, arglist)

    commands.map((command) => {
        let starts = wrapList(command.starters, wrapSpacer)
        console.log(indent + starts + spaceStr(starterLength-starts.length) + " : "+ command.description)
    })

    console.log(helpStr)
}

exports.d = command