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
        console.log(colors.green(`[info] ${colors.blue( client.commands.count )} command(s) found and loaded` ))

    }
}



