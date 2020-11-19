const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.delete()

  let pages = [
              '``Kullanıcı Ön Bilgi``\n\n\n' + '<a:cevrimici:778641403818934302> ``>`` __--afk__ **= Genelde Herkesin Yaptığı** ``AFK`` **Moduna Geçebilirsin.** \n**<a:cevrimici:778641403818934302> ``>`` Yetkili Komutlarının Çalışabilmesi İçin Yetkililere Mutlaka __Mesajları Yönet__ Yetkisini Veriniz.**\n**<a:cevrimici:778641403818934302> ``>`` Botumuzu Sunucuna Davet Etmek İçin** __--davet__ **Komutunu Kullanabilirsin.**',
              '``Yenilikler``\n\n\n' + '<a:unlem:778640807783039036> ``>`` __--canlıdestek__ **= Botun Sahibinden Bot İçin ``Destek Talebinde`` Bulunursun. **\n<a:unlem:778640807783039036> ``>``  __--sunucunutanıt__ **=  Sunucunuzu __[Destek Sunucumda](https://discord.gg/FMJXKuSNMM)__ Tanıtırım.** \n<a:unlem:778640807783039036> ``>``  __--kanalıkilitle__ **= Komutu Kullandığınız Kanalda Belirttiğiniz Süre Boyunca Yazma Erişimine Kapatır.**',
              '``Kullanıcı Ve Eğlence``\n\n\n' + '<a:X_Star:778641538791637032> ``>``  __--profil__ **= Level Ve GP (Gelişim Puanı)’nızı Gösterir.** \n<a:X_Star:778641538791637032> ``>``  __--rastgeleresim__ **= Rastgele ``Cool ve Rahatlatıcı`` Resim Atar. **\n<a:X_Star:778641538791637032> ``>``  __--vaporwave__ **= Yazdığınız Metni Estetik Bir Şekilde Yazar.** \n<a:X_Star:778641538791637032> ``>``  __--balıktut__ **= Rastgele Bir Balık Tutarsınız.** \n<a:X_Star:778641538791637032> ``>``  __--döviz__ **= Euro Ve Doların ``Alış-Satış`` Fiyatını Gösterir.** \n<a:X_Star:778641538791637032> ``>`` __--atatürk__ **= Atatürk’ün Bulunduğu Resimleri GİF Olarak Atar.** \n',
             // '``Müzik``\n\n\n' + '``-``  --oynat = Youtubeda İstediğiniz Bir Şarkıyı Aratır Ve Oynatır. \n``-``  --duraklat = Oynatılan Şarkıyı Devam Etmek Üzere Durdurur. \n``-``  --devamet = Duraklatılan Şarkıyı Devam Ettir. \n``-``  --geç = Oynatılan Şarkıyı Geçer. \n``-``  --kuyruk = Kuyruk’ta Olan Müzikleri Gösterir. \n``-``  --çalan = Oynatılan Müziği Gösterir. \n``-``  --ses = Ses Seviyesini Ayarlarsınız.',
             // '``Çerçeve/Profil``\n\n\n ' + '``-``  --hacked = Profilinize ``hacked`` Efekti Verir. \n``-``  --triggered = Profilinize ``triggered`` Efekti Verir. \n``-``  --wasted = Profilinize ``wasted`` Efekti Verir. \n``-``  --winner = Profilinize ``winner`` Efekti Verir. \n``-``  --sniper = Profilinize ``sniper`` Efekti Verir. \n``-``  --hpbalance = Profilinize ``hypesquad balance`` Efekti Verir. \n``-``  --hpbravery = Profilinize ``hypesquad bravery`` Efekti Verir. \n``-``  --hpbrilliance = Profilinize ``hypesquad brilliance`` Efekti Verilir. \n``-``  --dcbughunter = Profilinize ``bug hunter`` Efekti Verir. \n``-``  --hpevent = Profilinize ``hypesquad`` Efekti Verir. \n``-``  --dcpartner = Profilinize ``partner`` Efekti Verir. \n``-``  --dcstaff = Profilinize ``staff`` Efekti Verir. \n``-``  --atatürk = Profilinize ``atatürk`` Efekti Verir.',
            //  '``Bot Bilgi``\n\n\n' + '``-``  --davet = Bot İle İlgili Bağlantıları Görürsünüz. \n``-``  --ping = Botun Pingini Gösterir. \n``-``  --istatistik = Botun İstatistiklerini Gösterir.',
              ];
  let page = 1;

  const embed = new Discord.MessageEmbed()
    .setColor('PURPLE')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('PURPLE')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('PURPLE')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};