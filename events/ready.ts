module.exports ={
    config : {
        eventNames: "ready",
        enable: true
    },
    execute: ( client: any ) => {

        console.log(`connected as ${client.user.username} `)

    }
}



