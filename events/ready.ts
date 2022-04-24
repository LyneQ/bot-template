module.exports ={
    config : {
        eventNames: "ready",
        enable: true
    },
    execute: ( client: any ) => {
        const colors = require('colors');


        client.db.setup()

        console.log(colors.green(`[app] connected as ${colors.yellow(client.user.username)} `))

    }
}



