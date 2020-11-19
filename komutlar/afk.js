const db = require("quick.db");
const Discord = require("discord.js");

exports.run = function(client, message, args) {
message.delete()
  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  const embed = new Discord.MessageEmbed()
  .setColor('#FF0000')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle('Birşeyler Burada Ters Gidiyor Olabilir!')
  .setDescription('<a:Confirm:778640809909288991> ``>`` **Lütfen Tekrar Deneyin __AFK__ Olmak İçin Bir Sebep Belirtin** ')
  .setFooter('Cheeis AFK Sistemi')
  if(!REASON) return message.channel.send(embed).then(msg => msg.delete(5000))
  
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
  const afk = new Discord.MessageEmbed()
  .setColor('#006400')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle('Başarılı!')
  .setDescription('<a:Confirm:778640809909288991> ``>`` Başarıyla ``AFK`` Moduna Girdiniz.')
  .setFooter('Cheeis AFK Sistemi')
  message.channel.send(afk).then(msg => msg.delete(5000));
 
}; 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  kategori: 'genel',
  description: 'Kullanıcııyı afk moduna sokar.',
  usage: 'afk <sebep>'
};