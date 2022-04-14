import * as env from 'dotenv';
env.config();

import Discord from 'discord.js';
import { hasPrefix, isCommand } from './util/commands'
import config from './config'

const client = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: ['DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILDS']
});

client.on("ready", (stream: any) => {
    console.log(`Logged in as ${client.user?.tag}!`);  
});

client.on("messageCreate", (message: any) => {
    const prefix = config.application.prefix

    if (message.author.bot)
        return;   
    if (!hasPrefix(message.content, prefix))
        return

    const content = message.content.split('&&').pop()
    const [command, args] = content.split(' ')

   if (!isCommand(command, config.commands))
        return message.reply(config.messages.MESSAGE_COMMAND_NOT_FOUND)

    message.reply("sou mesmo")
});  

client.login(process.env.DISCORD_TOKEN);