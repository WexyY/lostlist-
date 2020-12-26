const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = function(client, message, args) {
  let yetkili = message.author;
  let botisim = message.guild.members.get(args[1]);
  let sahip = message.guild.members.get(args[0]);
    let sebep = args.slice(2).join(" ")
  let log = ayarlar.sertifikaLOG;

  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      `:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`
    );
  let embed2 = new Discord.RichEmbed()
    .setColor("#7f0000")
    .setDescription(
      ` <a:reddet:773624107241046027> |**Maalesef!** ${botisim} **adlı botunun sertifikası reddedildi.** \n  📕 | **Sebep =** ${sebep} \n  🔏 | **Reddeden yetkili =** ${yetkili} `
    );

  let embed = new Discord.RichEmbed()
    .setColor("#7f0000")
    .setDescription(
      `  <a:reddet:773624107241046027> | ${sahip} **adlı kişinin** ${botisim} **adlı botunun sertifikası reddedildi.** \n  📕 | **Sebep =** ${sebep} \n  🔏 | **Reddeden yetkili =** ${yetkili} `
    );

  if (!botisim)
    return message.channel
      .send(`Sertifika başvurusu reddedilecek botun ID'sini belirtmelisin`)
      .then(msg => msg.delete(10000));
  if (!sebep)
    return message.channel
      .send(`Sertifika başvurusu reddedilecek botun red sebebini belirtmelisin`)
      .then(msg => msg.delete(10000));
  if (!sahip)
    return message.channel
      .send(`Sertifika başvurusu reddedilecek botun sahibinin ID'sini belirtmelisin`)
      .then(msg => msg.delete(10000));
  message.delete();
  client.channels.get(log).send(embed);
  sahip.send(embed2);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["s-red", "s-red"],
  permLevel: 0
};

exports.help = {
  name: "s-red",
  description: "Sunucuya eklenen botu reddeder.",
  usage: "botreddet <bot ismi> - <sebep>"
};
