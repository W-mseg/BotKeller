const Discord = require('discord.js')
const bot = new Discord.Client()


bot.on('message', function (message){
    
        if      (message.content ==='!cours')
            {message.delete();
            message.author.send('https://github.com/W-mseg/coursKeller');} 
        else if (message.content ==='!veille') 
            {message.delete();
             message.author.send('https://github.com/becodeorg/The-Watch/blob/master/CRL-Keller-1.18/agenda.md');} 
        else if ( message.content === '!liste')
            {message.delete();
             message.author.send('voici la liste des commandes : !veille , !cours , !liste');}  
        else if (message.content ==='!bonjour') 
             {message.delete();
                for(let bonj = 0 ; bonj < 100; bonj++)
                {
                    message.author.send('bonjour bonjour');} 
                }

    
})

bot.login('NjU1NDExNzI2NDEzNzI1NzM3.XfUgHQ.ZxnA5OwYJ0Fbs3ZuhrPD1tfyD1o')