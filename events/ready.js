const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

let prefix = ayarlar.prefix;

module.exports = client => {
  client.user.setStatus("online");
console.log('Razy Bot List.');
  console.log(
    ` \n ${client.user.username}: { Kanal : ` +
      client.channels.size +
      ` Sunucu :` +
      client.guilds.size +
      ` Kullanıcı : ` +
      client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +
      ` }`
  );
};
