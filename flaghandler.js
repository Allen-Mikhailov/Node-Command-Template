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
    const callPriority = []

    function handlePut(flagData, data)
    {
        let call;
        switch (typeof (flagData.put))
        {
            case Array:
                call = () => {
                    for (let i = 0; i < data.length; i++)
                    {
                        p[flagData.put[i]] = data[i]
                    }
                }
                break
            case Function:
                call = flagData.put
                break

            case String:
                p[flagData.put] = data[0]
                break
            
        }

        let i = 0;
        while(i < calls.length && callPriority[i] > (flagData.priority || 0))
        {
            i++;
        }

        calls.push(call, i)
        callPriority.push(flagData.priority || 0, i)
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
        if (flags[targetArg] && targetArg!="base")
        {
            if (defined[targetArg])
                return `Error: Flag "${targetArg}" has already been defined`

            defined[targetArg] = true

            const fargs = []
            i++;
            while(fargs.length < flags[targetArg].args)
            {
                if (i >= args.length)
                    return `Error: Invalid count of args in flag "${targetArg}"`

                fargs.push(args[i])
                i++;
            }

            handlePut(flags[targetArg], fargs)
        } else {
            return `Error: Invalid flag "${targetArg}"`
        }
    }


}
