
module.exports = async (token?: any, dev?: any, SlashCommands?: any, BOTID?: any, GUILDID?: any) => {
    const colors = require('colors')
    const {REST} = require("@discordjs/rest")
    const { Routes } = require('discord-api-types/v9');
    if ( BOTID === undefined || GUILDID === undefined )  return console.log( colors.red(" [app] invalid parameters on slashCommand sender ") )

    const rest = new REST({ version: '9' }).setToken(token);

    try {

            if ( SlashCommands.length === 0 ) return console.log(colors.red("[app] invalid slash commands found: \"invalid JSON\""));


            if ( dev )  {

                // send SlashCommand in one guild

                await rest.put(
                    Routes.applicationGuildCommands(BOTID, GUILDID),
                    { body: SlashCommands },
                );

                console.log(colors.green(`[app] slash commands reloaded in ${ colors.blue('1')} guild." `));


            } else {

                // send SlashCommand in all guild

                await rest.put(
                    Routes.applicationCommands(BOTID),
                    { body: SlashCommands },
                );

                console.log(colors.green(`[app] slash commands reloaded in all guild.`));

            }


        } catch (error) {
            console.error(error);
        }

}
