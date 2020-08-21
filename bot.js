const Discord = require('discord.js');
const dotenv = require('dotenv');
const client = new Discord.Client();

dotenv.config();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  //Fetch modtag-roles channel, so the bot will get events on messages after restart.
  client.channels
    .fetch('746356135749091418')
    .then((channel) => channel.messages.fetch());
});

client.on('message', (msg) => {
  if (msg.author.bot) return;

  if (msg.content[0] !== '!') return;
  msg.content = msg.content.slice(1, msg.content.length);
  switch (msg.content.toLowerCase()) {
    case 'ping':
      msg.reply('Pong!');
      break;
    case 'react':
      msg.react('⚗️');
      break;
    case 'what':
      msg.channel.send('Waddup <@221324555870797826>');
      break;
    default:
      break;
  }
});

client.on('messageReactionAdd', (reaction, user) => {
  if (user.bot) return;
  console.log('reaction!');
});

client.login(process.env.DISCORD_TOKEN);
