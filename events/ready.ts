module.exports ={
    config : {
        eventNames: "ready",
        enable: true
    },
    execute: ( client: any ) => {
        const colors = require('colors');


        client.db.setup()
        console.log(colors.green(`[app] connected as ${colors.yellow(client.user.username)}`))
        console.log(colors.green(`[info] ${colors.blue( client.modules.count )} module(s) found and loaded` ))

        // send slash commands to discord API
        client.modules.sendSlahCommand.exec( process.env.TOKEN, true, client.commands.all, process.env.BOTID, process.env.GUILD_ID )

        console.log(colors.green(`[info] ${colors.blue( client.commands.count )} command(s) found and loaded` ))

    }
}



