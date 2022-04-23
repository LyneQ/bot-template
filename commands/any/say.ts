import {Constants} from "discord.js";

module.exports ={
    config : {
        // slash commands for discord ()
        jsonCommand: {
            name: "say",
            description: "fait dire au bot ce que vous voulez qu'il disent ",
            options: [{
                name: 'channel',
                description: "le channel ou sera envoyé les données",
                required: true,
                type: Constants.ApplicationCommandOptionTypes.CHANNEL
            }, {
                name: "text",
                description: "le message que le bot va envoyé sur le channel",
                required: true,
                type: Constants.ApplicationCommandOptionTypes.STRING
            }]
        },
        enable: true
    },
    execute: async ( client: any, interaction: any ) => {

        /**
         * init all commands options
         */
        const channel   = interaction.options.getChannel("channel") || "null"
        const inputText = interaction.options.getString("text") || "null"

        console.log(channel.value)
        console.log(inputText)

        interaction.reply({ content: "reçu !" })

    }
}
