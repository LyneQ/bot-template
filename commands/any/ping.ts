import {Constants} from "discord.js";

module.exports ={
    config : {
        jsonCommand: {
            name: "ping",
            description: "teste le temps de réponses avec discord",
        },
        enable: true
    },
    execute: async ( client: any, interaction: any, error: any ) => {

        interaction.reply({ content: " Pong ! "})

    }
}
