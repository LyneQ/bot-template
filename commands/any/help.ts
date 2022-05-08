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
            .setColor("#CA994A")

        function getEmbed(command_name:string ){
            const command = client.commands.all.filter( (cmd :any) => cmd.name === command_name )

            embed.setDescription( `**/${command[0].name}** => ${command[0].description}` )
            embed.addField('\u200B', '\u200B')


            if ( command[0].options !== undefined ) {
                command[0].options.forEach( (opt: any) =>{

                    embed.addField( `paramètre ${opt.name} `, opt.description )

                })
            }
        }

        function getBasicEmbed(){

            const command = client.commands.all

            embed.setDescription( `voici toutes nos commandes` )
            embed.addField('\u200B', '\u200B')

            for (let i = 0; i < command.length; i++) {

                embed.addField( command[i].name, command[i].description, true )



            }



        }


        if ( inputText == undefined ) {

            getBasicEmbed()

            return interaction.reply({ embeds: [embed], ephemeral: true })


        } else {

            getEmbed( inputText.value )

           return interaction.reply({ embeds: [embed], ephemeral: true })

        }

    }
}
