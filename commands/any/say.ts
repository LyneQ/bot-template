import {Constants} from "discord.js";

module.exports ={
    config : {
        // slash commands for discord ()
        jsonCommand: {
            name: "say",
            description: "fait dire au bot ce que vous voulez qu'il disent ",
            options: [{
                name: "textchannel",
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
    execute: async ( client: any, interaction: any, error: any ) => {

        // init all commands options
        const channel   = interaction.options.get("textchannel")
        const inputText = interaction.options.get("text").value

        //commands execution

        const finalChannel: any = interaction.guild.channels.cache.get( channel.value )

        if ( !channel ) return interaction.reply({ content: error.channel.typeTextRequire, ephemeral: true })
        if ( finalChannel.type !== "GUILD_TEXT" ) return interaction.reply({ content: error.channel.typeTextRequire, ephemeral: true})


        finalChannel.send({
            content: inputText,
            ephemeral: false
        })

    }
}
