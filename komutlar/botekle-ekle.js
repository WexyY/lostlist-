const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = function(client, message, args) {
  let botID = args[0];
  let prefix = args[1];
  let basvuru = ayarlar.basvurulog;
  let eklekanal = ayarlar.eklekanal;
  let log = ayarlar.log;

  if (message.channel.id !== eklekanal)
    return message.channel
      .send(`Bu komutu sadece <#${eklekanal}> kanalında kullanabilirsin.`)
      .then(msg => msg.delete(10000));
  if (message.channel.id == eklekanal) {
    if (!botID)
      return message.channel
        .send(`:no_entry: Botunun ID'sini yazmalısın.`)
        .then(msg => msg.delete(10000));
    if (!prefix)
      return message.channel
        .send(`:no_entry: Botunun prefixini yazmalısın.`)
        .then(msg => msg.delete(10000));
    message.delete();
    const embed = new Discord.RichEmbed()
      .setColor("PURPLE")
      .setDescription(
        `[0 Perm Ekle](https://discordapp.com/oauth2/authorize?client_id=${botID}&scope=bot&permissions=0) | ` + ` | [8 Perm Ekle](https://discordapp.com/oauth2/authorize?client_id=${botID}&scope=bot&permissions=8)`,true)
      .setTitle("<a:loading:773624466835898412> Bot Başvurusu ")
      .addField(
        "<a:loading:773624466835898412> Bot Sahibi",`<@${message.author.id}>`)
      .addField("<a:loading:773624466835898412> Bot ID", botID)
      .addField("<a:loading:773624466835898412> Bot Prefix", prefix);
    client.channels.get(basvuru).send(embed);
    let embed2 = new Discord.RichEmbed().setDescription(`>  <a:load:773624129156415508>` + `<@${message.author.id}> adlı kullanıcı <@${botID}> adlı botu sıraya ekledi.En yakın zamanda test edilecektir. \n\n > 🔖 | **Prefix =** {  ${prefix}  }`);
    client.channels.get(log).send(embed2);

    message.channel.send(`<a:tik:773624119396007956>__**Bot ekleme isteğiniz alındı.**__`).then(msg => msg.delete(3000));
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-ekle"],
  permLevel: 0
};

exports.help = {
  name: "botekle",
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: "botekle <botid> <prefix>"
};
