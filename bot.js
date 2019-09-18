const Discord = require('discord.js');

const client = new Discord.Client();
// Create a new webhook
const hook = new Discord.WebhookClient('webhook id', 'webhook token');
 

client.on('ready', () => {

    console.log('I am ready!');

});

 


client.on('message', message => {

    if (message.content === '.ite') {

       message.reply('> **ITE** `Internal Server Error`');

       }

});


client.on('message', message => {
    // If the message is '!rip'
    if (message.content === '.logo') {
        // Create the attachment using Attachment
        const attachment = new Attachment('https://cdn.glitch.com/5df14e9f-5821-4dac-89c0-f460fc156aa9%2F1567935115820.png?v=1568297795770');
        // Send the attachment in the message channel
        message.channel.send(attachment);
    }
});
// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'members');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`${member}, just joined the server!`);
});
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
