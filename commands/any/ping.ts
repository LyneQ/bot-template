module.exports ={
    config : {
        jsonCommand: {
            name: "date",
            description: "je vous donne la date d'aujourd'hui",
        },
        enable: true
    },
    execute: async ( client: any, interaction: any, error: any ) => {

        console.log( client.modules )

        interaction.reply({ content: `nous sommes le ${ client.modules.date.exec() } ` })

    }
}
