import {Constants} from "discord.js";

module.exports ={
    config : {
        // slash commands for discord ()
        jsonCommand: {
            name: "hello",
            description: "le bot te répond bonjour",
        },
        enable: true
    },
    execute: async ( client: any, interaction: any ) => {

        interaction.reply({ content: `Bonjour <@${interaction.user.id}>`})

    }
}
