const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Bot is online als ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content === '!wm') {
    message.channel.send(`Welkom!

Waar kunnen wij u mee helpen?

Mvg, 𝘾𝙡𝙤𝙪𝙙 𝙈𝙖𝙧𝙠𝙚𝙩™`);
  }

  if (message.content === '!vouch') {
    message.channel.send(`+rep ${message.author} | Product | Payment method | Price | Instant Delivery`);
  }

  if (message.content === '!done') {
    message.channel.send(`Bedankt dat je voor 𝘾𝙡𝙤𝙪𝙙 𝙈𝙖𝙧𝙠𝙚𝙩™ hebt gekozen!

Laat AUB een revieuw achter dat doe je door in je ticket !vouch te typen en zal je een template krijgen, doe je dit niet kan je helaas geen service meer van ons krijgen.

Mvg, 𝘾𝙡𝙤𝙪𝙙 𝙈𝙖𝙧𝙠𝙚𝙩™`);
  }
});

client.login('MTQ5NTc0MzMxMzg1OTQ0ODkyMg.GH0Qzq.3lbuRAMn0SEljULC7GRK9F4kO0Dr2XNxMayt90');

const TARGET_CHANNEL_ID = 'JOUW_CHANNEL_ID';

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (message.channel.id !== TARGET_CHANNEL_ID) return;

  try {
    await message.react('❤️');
  } catch (err) {
    console.log('React error:', err);
  }
});
