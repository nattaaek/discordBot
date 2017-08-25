const discord = require('discord.js');
const music = require('discord.js-music-v11');
const Bot = new discord.Client();
const tokens = "MzQ5OTQxNTAwODczOTMyODIx.DH80fg.nycJGmYP4gPghKbnm-BTDaUPYUo" // Recommended to load from json file. 
 Bot.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
});
music(Bot);
Bot.login(tokens);