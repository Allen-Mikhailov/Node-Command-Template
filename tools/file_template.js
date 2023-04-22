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
        starters: ["test"],
        description: "test command"
    
    }
]

exports.commands = commands