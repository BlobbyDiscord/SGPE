const Discord = require('discord.js');

const client = new Discord.Client();
 

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '.join') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('SGPE')
      // Set the color of the embed
      .setColor(0xFF0000)
      .addField("**IP** craft.mcpe.dev")
      .addField("**PORT** 25640")
      // Set the main content of the embed
      .setDescription('Total Survival,PvP,Skyblock,Plots');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});


client.on('message', message => {

    if (message.content === '.ite') {

       message.reply('> **ITE** `Internal Server Error`');

       }

});

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
