import {Constants} from "discord.js";

module.exports ={
    config : {
        jsonCommand: {
            name: "help",
            description: "liste toute les commandes disponible",
            options: [{
                name: "commande",
                description: "le nom de la commande qui t'intrigue",
                required: false,
                type: Constants.ApplicationCommandOptionTypes.STRING
            }]
        },
        enable: true
    },
    execute: async ( client: any, interaction: any, error: any ) => {
        /**
         * init variable
         */
        const inputText = interaction.options.get("commande") || undefined

        const { MessageEmbed } = require("discord.js")

        let embed = new MessageEmbed()
            .setTitle("help embed")
            .setTimestamp()
            .setColor("#333")

        function getEmbed(command_name:string ){
            console.log(command_name)
            const command = client.commands.all.filter( (cmd :any) => cmd.name === command_name )

            console.log( command[0] )

            embed.setDescription( `**/${command[0].name}** => ${command[0].description}` )
            embed.addField('\u200B', '\u200B')


            if ( command[0].options !== undefined ) {
                command[0].options.forEach( (opt: any) =>{

                    embed.addField( `paramètre ${opt.name} `, opt.description )

                })
            }


        }


        if ( inputText == undefined ) {
            console.log("no commands found ! :'( ")

            return interaction.reply({ content: error.arguments.invalidArguments, ephemeral: true })


        } else {
            console.log("commands found ! ")

            getEmbed( inputText.value )

           return interaction.reply({ embeds: [embed], ephemeral: true })

        }

    }
}
