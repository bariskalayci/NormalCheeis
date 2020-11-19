const Discord = require('discord.js');


exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('**Kullanım şekli --herkesedm -mesaj-**');
  message.delete();
      const mesajat = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setDescription('**' + mesaj + '**')

      client.users.forEach(u => {
u.send(mesajat)
})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dm'],
  permLevel: 4
};

exports.help = {
  name: 'herkesedm',
  description: 'İstediğiniz şeyi bota duyurtur. Sadece Bot Kurucuları Yapar.',
  usage: 'herkesedm [duyurmak istediğiniz şey]'
};


