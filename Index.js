const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running!");
})

app.get("/", (req, res) => {
  res.send("Hello world!");
})

const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
  allowedMentions: ["users"]
});

client.on("ready", () => {
  client.user.setActivity('MirBot', {type: 'PLAYING'})
});

const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const { token } = process.env['token']

const clientId = '940144298354180136'

const rest = new REST({ version : '9'})

async () => {
  try {
    console.log("Started refreshing [/] Commands")

    await rest.put(
      Routes.applicationGuildCommands(clientId),
      { body: commands}
    )

    console.log("Successfully reloaded [/] Applications")
  } catch (error) {
    console.error(error)
  }
};

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    } else if (commandName === 'hello') {
        await interaction.reply('Hi there!');
    } else if (commandName === 'say') {
        await interaction.reply('Hmmmmm i say')
    } else {
        await interaction.reply('Sorry, I don\'t know that command.');
    }
});

const canvacord = require("canvacord");
//Mir Support Server
client.on("guildMemberAdd",  async member => {
  if(member.guild.id === "948486276733091860") {
  const welcomeCard = new canvacord.Welcomer()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setAvatar(member.user.displayAvatarURL({format: "png"}))
  .setColor("title", "#15A9E8")
  .setColor("username-box", "#120AEF")
  .setColor("discriminator-box", "#120AEF")
  .setColor("message-box", "#0C80ED")
  .setColor("border", "#120AEF")
  .setColor("avatar", "#0A52F0") .setBackground("https://i.imgur.com/5eDqvDz.png")
  .setMemberCount(member.guild.memberCount)

    welcomeCard.build().then(buffer => {
      const file = new Discord.MessageAttachment(buffer, "welcome.png")
      const embed = new Discord.MessageEmbed()
      .setTitle(`New member has joined!`)
      .setDescription(`Hey **${member}**, welcome to **${member.guild.name}**! \nWe hope you enjoy and have fun in this server. \nIf you are in need of a help, do not hesitate to ask us in <#949136551575699536>`)
      .setImage(`attachment://welcome.png`)
      .setColor("RANDOM")
    client.channels.cache.get("949575774464266260").send({ content: member.user.toString(), embeds: [embed], files: [file] });
  })
  }  
})

client.on("guildMemberRemove", async member => {
  if (member.guild.id === "948486276733091860") {
    const leave = new Discord.MessageEmbed()
    .setTitle(`**${member.user.username}** left the server`)
    .setDescription("Well hope they enjoyed it")
    .setColor("RED")
    .setTimestamp()
  client.channels.cache.get("949575774464266260").send({ content: member.user.toString(), embeds: [leave]})
  }
})


//Chilling Server
client.on("guildMemberAdd",  async member => {
  if(member.guild.id === "948845355666128926") {
  const welcomeCard = new canvacord.Welcomer()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setAvatar(member.user.displayAvatarURL({format: "png"}))
  .setColor("title", "#15A9E8")
  .setColor("username-box", "#120AEF")
  .setColor("discriminator-box", "#120AEF")
  .setColor("message-box", "#0C80ED")
  .setColor("border", "#120AEF")
  .setColor("avatar", "#0A52F0") .setBackground("https://i.imgur.com/5eDqvDz.png")
  .setMemberCount(member.guild.memberCount)

    welcomeCard.build().then(buffer => {
      const file = new Discord.MessageAttachment(buffer, "welcome.png")
      const embed = new Discord.MessageEmbed()
      .setTitle(`New member has joined!`)
      .setDescription(`Hey **${member}**, welcome to **${member.guild.name}**! \nWe hope you enjoy and have fun in this server. \nIf you are in need of a help, do not hesitate to ask us in <#949136551575699536>`)
      .setImage(`attachment://welcome.png`)
      .setColor("RANDOM")
    client.channels.cache.get("948845356265914380").send({ content: member.user.toString(), embeds: [embed], files: [file] });
  })
  }  
})

client.on("guildMemberRemove", async member => {
  if (member.guild.id === "948845355666128926") {
    const leave = new Discord.MessageEmbed()
    .setTitle(`**${member.user.username}** left the server`)
    .setDescription("Well hope they enjoyed it")
    .setColor("RED")
    .setTimestamp()
  client.channels.cache.get("948845356265914381").send({ content: member.user.toString(), embeds: [leave]})
  }
})

//MCKK Server
client.on("guildMemberAdd",  async member => {
  if(member.guild.id === "955671301106860062") {
  const welcomeCard = new canvacord.Welcomer()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setAvatar(member.user.displayAvatarURL({format: "png"}))
  .setColor("title", "#15A9E8")
  .setColor("username-box", "#120AEF")
  .setColor("discriminator-box", "#120AEF")
  .setColor("message-box", "#0C80ED")
  .setColor("border", "#120AEF")
  .setColor("avatar", "#0A52F0") .setBackground("https://media.discordapp.net/attachments/888333960365629452/955726463951315014/MCKK-Featured-Image.png")
  .setMemberCount(member.guild.memberCount)

    welcomeCard.build().then(buffer => {
      const file = new Discord.MessageAttachment(buffer, "welcome.png")
      const welcome = new Discord.MessageEmbed()
      .setTitle(`New member has joined!`)
      .setDescription(`Hey **${member}**, welcome to **${member.guild.name}**! \nWe hope you enjoy and have fun in this server. \nMake sure to introduce yourself in <#955681998884700180>`)
      .setImage(`attachment://welcome.png`)
      .setColor("RANDOM")
    client.channels.cache.get("955672199128313856").send({ content: member.user.toString(), embeds: [welcome], files: [file] });
  })
  }  
})

client.on("guildMemberRemove", async member => {
  if (member.guild.id === "955671301106860062") {
    const leave = new Discord.MessageEmbed()
    .setTitle(`**${member.user.username}** left the server`)
    .setDescription("Well hope they enjoyed it")
    .setColor("RED")
    .setTimestamp()
  client.channels.cache.get("955672155213955112").send({ content: member.user.toString(), embeds: [leave]})
  }
})

client.on("messageCreate", message => {
  if(message.content === "<@!940144298354180136>")
    message.channel.send("Hello there! My prefix is `mir!`. Do `mir!help` for a list of commands.")
})

client.on("messageCreate", message => {
  if(message.content === "Pizzaa")
    message.channel.send("Mamamia 🤌")
})

client.on("messageCreate", message => {
  if(message.content === "There's a conflict in Europe")
    message.channel.send("Nah j, i would stay neutral like Switzerland 😎")
})

client.on("messageCreate", message => {
  if(message.content === "Stop it, get some help")
    message.channel.send("I think you need some help, let me call TherapyBot.")
})

const fs = require("fs");
const prefix = "mir!"
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"))
for(file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./Commands/${commandName}`)
  client.commands.set(commandName, command)
}

client.on("messageCreate", message => {
if(message.content.startsWith(prefix)) {
  const args = message.content.slice(prefix.length).trim().split(` `)
  const commandName = args.shift()
  const command = client.commands.get(commandName) || client.commands.filter(cmd => cmd.aliases && cmd.aliases.includes(commandName)).first()
  if(!command) return message.channel.send({content: "That command does not exist!"})
  command.run(client, message, args)
}
})

client.login(process.env.token)
