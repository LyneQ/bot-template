module.exports ={
    config : {
        jsonCommand: {
            name: "date",
            description: "je vous donne la date d'aujourd'hui",
        },
        enable: true
    },
    execute: async ( client: any, interaction: any, error: any ) => {

        const time = require("../../modules/date/date-main")


        interaction.reply({ content: `nous sommes le ${ time() } ` })

    }
}
