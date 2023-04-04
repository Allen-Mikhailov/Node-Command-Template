const fs = require("fs")

const { argv } = require("process")

const starterArg = argv[3] || ""
const starters = {}

fs.readdirSync(__dirname+"/tools/").map((path) => {
    if (!path.match(".*\\.js")) { return; }
    const data = require(__dirname+"")
    data.starters.map((starter) => {
        starters[]
    })
})

if (starters[starterArg])
{

} else {
    console.log(`Error: "${starterArg}" is not a valid argument`)
}

console.log(argv) 