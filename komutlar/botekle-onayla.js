const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = function(client, message, args) {
  let yetkiliROL = ayarlar.yetkiliROL;
 // if (!message.member.roles.has(yetkiliROL)) return;
  let yetkili = message.author;
  let sahip = message.guild.members.get(args[0]);
  let botisim = message.guild.members.get(args[1]);
  let botisim2 = args[1];
  let prefix = args[2];
  let isim = client.users.get(args[1]).username;
  let log = ayarlar.log;
  let rol = ayarlar.developerROL;
  let b = ayarlar.botROL;

  if (!botisim)
    return message.channel
      .send(`Onaylanacak botun ID'sini girmen gerekiyor.`)
      .then(msg => msg.delete(5000));
  if (!sahip)
    return message.reply(
      "Onaylanacak botun sahibinin ID'sini girmen gerekiyor."
    );
  if (!prefix) return message.reply("Onaylanacak botun prefixini yazmalısın.");
  message.delete();
  sahip.addRole(rol);
  message.guild.members.get(botisim2).setNickname(` [${prefix}] ` + `${isim}`);
  botisim.addRole(b);
  let embedd = new Discord.RichEmbed().setDescription(
    ` <a:tik:773624119396007956> | **Tebrikler!** ${botisim} **adlı botun onaylandı.Developer permin verildi** \n\n  🔏 | **Onaylayan yetkili =** ${yetkili} `
  );
  sahip.send(embedd);
  let embed2 = new Discord.RichEmbed()
    .setColor("#5fbf00")
    .setDescription(
      ` <a:tik:773624119396007956> | ${sahip} **adlı kişinin** ${botisim} **adlı botu onaylandı.** \n\n  🔏 | **Onaylayan yetkili =** ${yetkili} `
    );
  client.channels.get(log).send(embed2);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-onayla", "onayla"],
  permLevel: 0
};

exports.help = {
  name: "botonayla",
  description: "Sunucuya eklenen botu onaylar.",
  usage: "botonayla <bot ismi>"
};
