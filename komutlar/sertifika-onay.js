const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = function(client, message, args) {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      `:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`
    );
  let yetkili = message.author;
  let sahip = message.guild.members.get(args[0]);
  let botisim = message.guild.members.get(args[1]);

  let log = ayarlar.sertifikaLOG;
  let rol = ayarlar.sertifikaDEV;
  let b = ayarlar.sertifikaBOT;

  if (!botisim)
    return message.channel
      .send(`Sertifika verilecek botun ID'sini belirtmelisin.`)
      .then(msg => msg.delete(5000));
  if (!sahip)
    return message.reply(
      "Sertifika verilecek botun sahibinin ID'sini belirtmelisin."
    );
  message.delete();
  sahip.addRole(rol);
  botisim.addRole(b);
  let embedd = new Discord.RichEmbed().setDescription(
    ` <a:tik:773624119396007956> | **Tebrikler!** ${botisim} **adlı botun sertifika aldı. Sertifika rolleri verildi** \n\n  🔏 | **Onaylayan yetkili =** ${yetkili} `
  );
  sahip.send(embedd);
  let embed2 = new Discord.RichEmbed()
    .setColor("#5fbf00")
    .setDescription(
      ` <a:tik:773624119396007956> | ${sahip} **adlı kişinin** ${botisim} **adlı botu sertifika aldı.** \n\n  🔏 | **Onaylayan yetkili =** ${yetkili} `
    );
  client.channels.get(log).send(embed2);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sertifika-onay"],
  permLevel: 0
};

exports.help = {
  name: "s-onayla",
  description: "Sunucuya eklenen botu onaylar.",
  usage: "botonayla <bot ismi>"
};
6;
