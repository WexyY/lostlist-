const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = function(client, message, args) {
  let yetkili = message.author;
  let botisim = args[1]
  let sahip = args[0]
  let sebep = args.slice(2).join(" ")
  let log = ayarlar.log;

  let yetkiliROL = ayarlar.yetkiliROL;
  if (!message.member.roles.has(yetkiliROL)) return;
  let embed2 = new Discord.RichEmbed()
    .setColor("#7f0000")
    .setDescription(
      ` <a:reddet:773624107241046027> |**Maalesef!** ${botisim} **adlı botun reddedildi.** \n  📕 | **Sebep =** ${sebep} \n  🔏 | **Reddeden yetkili =** ${yetkili} `
    );

  let embed = new Discord.RichEmbed()
    .setColor("#7f0000")
    .setDescription(
      `  <a:reddet:773624107241046027> | ${sahip} **adlı kişinin** ${botisim} **adlı botu reddedildi.** \n  📕 | **Sebep =** ${sebep} \n  🔏 | **Reddeden yetkili =** ${yetkili} `
    );

  if (!botisim)
    return message.channel
      .send(`Reddedilecek botun ID'sini belirtmelisin.`)
      .then(msg => msg.delete(5000));
  if (!sebep)
    return message.channel
      .send(`Botu neden reddettiğini belirtmelisin.`)
      .then(msg => msg.delete(5000));
  if (!sahip)
    return message.reply("Reddedilecek botun sahibinin ID'sini belirtmelisin.");
  message.delete();
  client.channels.get(log).send(embed);
  sahip.send(embed2);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-reddet", "reddet"],
  permLevel: 0
};

exports.help = {
  name: "botreddet",
  description: "Sunucuya eklenen botu reddeder.",
  usage: "botreddet <bot ismi> - <sebep>"
};
