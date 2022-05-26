/**
 * all npm modules require
 */
const mongoose = require("mongoose");
const colors = require('colors');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const path = require("path");
const { readdirSync, readFileSync } = require("fs");
const { Client, Intents, Collection } = require("discord.js");
require('dotenv').config({ path: path.resolve( `${__dirname}/config/.env` ) });
/**
 *  all internal options
 */
const errorMessage: any = require("./config/error");
/**
 * init discord client
 */
const client = new Client({
    intents: [Intents.FLAGS.GUILDS],
    presence:{
        status: "online", // online, idle, invisible, dnd
        afk: false,
        activities: [{
            name: "test",
            type: "PLAYING", // PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
            //url: "", // if type is on STREAMING
        }]
    }
});
const SlashCommands: any[] = [];

/**
 * client options
 */
client.db = {
    setup: require("./config/DB/setup"),
    models: require("./config/DB/getModels")
};
client.commands = {
    count : 0,
    all: SlashCommands
}
client.modules = {
    count : 0
}
client.config = process.env

// response to all event
readdirSync(`${__dirname}/events/`)
    .filter( (file: any)=> file.endsWith(".ts") )
    .forEach( ( fileName: any )=>{
        const event = require(`${__dirname}/events/${fileName}`);
        let eventName = event.config.eventNames;

        if ( !event.config.enable ) return;


        client.on(eventName, () => {
            event.execute( client )
        } )
    });

// get all commands
readdirSync(`${__dirname}/commands/any/`)
    .filter( (file: any)=> file.endsWith(".ts") )
    .forEach( ( fileName: any )=>{

        const command = require(`${__dirname}/commands/any/${fileName}`);

        let Json = command.config.jsonCommand


        SlashCommands.push( Json )
        client.commands.count++

        client.on('interactionCreate', (interaction: any) =>{
            if ( interaction.commandName == command.config.jsonCommand.name ){
                    command.execute(client, interaction, errorMessage)
            }
        } )

    });

// lod modules from directory
readdirSync(`${__dirname}/modules/`)
    .filter( (file: any)=> file.endsWith(".ts") )
    .forEach( ( fileName: any )=>{

        client.modules[fileName.replace('.ts', '')] = { exec : require(`${__dirname}/modules/${fileName}`) }
        client.modules.count++

    });


// send slash commands to discord API



const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);


(async () => {
    try {

        if ( SlashCommands.length === 0 ) return console.log(colors.red("[app] invalid slash commands found: \"invalid JSON\""));


        await rest.put(
            Routes.applicationGuildCommands( process.env.BOTID , process.env.GUILD_ID),
            { body: SlashCommands },
        );


        console.log(colors.green('[app] slash commands reloaded.'));
    } catch (error) {
        console.error(error);
    }
})();


client.login(process.env.TOKEN);


