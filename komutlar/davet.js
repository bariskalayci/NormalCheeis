const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const Embed = new Discord.RichEmbed()
    .setTimestamp()
    .setAuthor("Cheeis", client.user.avatarURL)
    .setColor("BLUE")
    .setTitle("Bot Destek Davet Bölümü")
    .setURL(
      "https://discord.com/oauth2/authorize?client_id=778287651878207488&scope=bot&permissions=128"
    )
    .setDescription(`__Botumuzu Sunucuna Eklemek İçin... =__`)

    .addField("Davet Linki.", `[Tıkla](https://discord.com/oauth2/authorize?client_id=778287651878207488&scope=bot&permissions=128)`)

    .setFooter("© Cheeis Destek", client.user.avatarURL);
  message.channel.send(Embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "davet",
  description: "Davet Et.",
  usage: "davet"
};
