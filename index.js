const Discord = require("discord.js");
const bot = new Discord.Client();

// fs pour File System, module natif de node.js qui permet la manipulation de fichiers
const fs = require("fs");

// L'événement ready est déclenché lorsque le bot est démarré et prêt à être utilisé
bot.on("ready", () => console.log(`${bot.user.username} est prêt à être utilisé`));

// On définit un préfixe pour les commandes du bot
const prefix = "!";

bot.on("message", function(message) {
    if (message.content === prefix + "cours") {
        message.delete();
        message.author.send("https://github.com/W-mseg/coursKeller");
    } else if (message.content === prefix + "veille") {
        message.delete();
        message.author.send("https://github.com/becodeorg/The-Watch/blob/master/CRL-Keller-1.18/agenda.md");
    } else if ( message.content === prefix + "liste") {
        message.delete();
        message.author.send("voici la liste des commandes : !veille , !cours , !liste");
    } else if (message.content === prefix + "bonjour") {
        message.delete();
        for (let bonj = 0; bonj < 100; bonj++) {
            message.author.send("bonjour bonjour");
        }
    }
});

// Lecture du token pour connecter le bot
bot.login(JSON.parse(fs.readFileSync("token.json")));