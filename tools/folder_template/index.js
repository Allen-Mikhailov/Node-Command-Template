const commands = [
    {
        funct: () => console.log("Testing"),
        flags: [
            {
                put: () => console.log("A flag was used"),
                starters: ["-flag1", "-flag2"],
                description: "Does Stuff"
            }
        ],
        starters: ["name1", "name2"],
        description: "Gives a description of every command"
    
    }
]

exports.commands = commands