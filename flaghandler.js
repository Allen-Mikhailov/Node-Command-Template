/*
const flags = {
    "-e": {
        args: 2,
        priority: 1,
        required: true,
        put: (p, args) => {

        }
    },
    "base": {
        args: 1,
        priority: 2,
        put: ["Thing1", "Thing2"]
    }
}

*/

function handle(flags, args, p)
{
    p = p || {}

    // Used when no arg is given
    let baseI = 0;

    let i = 0;
    const defined = {}
    const baseArgs = []
    const calls = []

    function handlePut(flagData, data)
    {
        switch (typeof (flagData.put))
        {
            case Array:
                
                break

        }
    }

    // Base Flags
    while (i < args.length)
    {
        baseArgs.push(args[i])
        i++;
    }
    calls.push(() => handlePut(flags.base, baseArgs))

    // Regular flags
    while(i < args.length)
    {
        const targetArg = args[i]



        // Getting the flag argument
        if (flags[targetArg] || !targetArg.startsWith("-"))
        {
            if (defined[targetArg])
                return `Error: Flag "${targetArg}" has already been defined`

            defined[targetArg] = true

            const fargs = []
            i++;
            while(fargs.length < flags[targetArg].args)
            {
                if (i >= args.length)


                fargs.push(args[i])
                i++;
            }

            handlePut(flags[targetArg], fargs)
        } else {
            return `Error: Invalid flag "${targetArg}"`
        }
    }


}
