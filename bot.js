const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("./config.json");
const links = require("./links.json");

//Quando membro entrar no servidor sendo o primeiro para mandar no server e o segundo para mandar dm.
bot.on("guildMemberAdd", member => {
    member.guild.channels.get('616056453731581958').send(member.user.username + ' Acaba de chegar!');
    member.send('Seja bem vindo ao mundo de sorvetes!');
});

//Quando o bot estiver ligado. Primeira linha o status e segunda msg q manda no console (aqui).
bot.on('ready', () => {
    bot.user.setActivity('Yuup.Online');
    console.log('Ligadasso!');
});

//Quando o bot recebe um comando
bot.on("message", message => {
    //Mensagens de links e textos
    responseObject = links;
    if(responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }

    //ignora msg na dm
    if (!message.guild) return;

    //ignora mensagens de bot, evitando loop
    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix)  !== 0) return;

    //separara as mensagens por msgs - 0 1 2 ...
    const msgs = message.content.slice(config.prefix.length).trim().split(/ +/g);
    //converte o comando em minúsuculo e lê
    const comando = msgs.shift().toLowerCase();

//comandos normais
switch (comando) {
    case "teste" :
        message.channel.send("Testado! :P");
    break;
    
    case "ping" :
        message.channel.send("Pong? :grin:");
    break;
    }


//comando extenso

//comando roleta
if(comando == "roleta"){
  randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
  if(randomNumber == 3){
  message.reply("Ah, que pena.. Você morreu XP")
  }
  else{
  message.reply("Ui, quase não respirei! Você está a salvo rs");
  }
  message.delete();
}

//comando do dado
if(comando == "dado"){
  randomNumber = Math.floor(Math.random() * (20 - 1) + 1);
  if(randomNumber == 1){
    message.reply(":zero::one: - Ui, um erro crítico, mais sorte na próxima! :tired_face:");
  }
  if(randomNumber == 2){
    message.reply("Pior que tá não fica rs... :zero::two:!");
  }
  if(randomNumber == 3){
    message.reply("É, quem sabe um dia... :zero::three:");
  }
  if(randomNumber == 4){
    message.reply("Ta melhorando... :zero::four:!");
  }
  if(randomNumber == 5){
    message.reply("Grande Sol que ilumina minha face, o que poderia ser pior?... :zero::five:!");
  }
  if(randomNumber == 6){
    message.reply("Piripirim... :zero::six:!");
  }
  if(randomNumber == 7){
    message.reply("Meh, dia normal... :zero::seven:!");
  }
  if(randomNumber == 8){
    message.reply("Meh, dia normal... :zero::eight:!");
  }
  if(randomNumber == 9){
    message.reply("Meh, dia normal... :zero::nine:!");
  }
  if(randomNumber == 10){
    message.reply("Nem bom nem ruim, mediano... :one::zero:!");
  }
  if(randomNumber == 11){
    message.reply("Meh, dia normal... :one::one:!");
  }
  if(randomNumber == 12){
    message.reply("Foi o suficiente? Saiu :one::two:!");
  }
  if(randomNumber == 13){
    message.reply("Dizem que os azarados detestam este: :one::three:!");
  }
  if(randomNumber == 14){
    message.reply("Hmm... este jogo está esquentando: :one::four:!");
  }
  if(randomNumber == 15){
    message.reply(":one::five: - Agora você tem minha atenção!");
  }
  if(randomNumber == 16){
    message.reply("Certeza que deu tudo certo! Deu :one::six:!");
  }
  if(randomNumber == 17){
    message.reply("Tunts tuns...:one::seven:...tunts tunts");
  }
  if(randomNumber == 18){
    message.reply("Eita que isso: :one::eight:? Uau!");
  }
  if(randomNumber == 19){
    message.reply("Vo mata u tanus : :one::nine:!");
  }
  if(randomNumber == 20){
    message.reply("Que? Como? Um acerto crítico? Caraca parabéns hein! VINTE! :two::zero:!!!!");
  }
  message.delete();
}

//comando apagar mensagens
if(comando == "clean"){
let totalDelMsg = parseInt(msgs[5]) + 1;
  
async function clear() {
    try {
    message.delete();
    const fetched = await message.channel.fetchMessages({limit: totalDelMsg});
    message.channel.bulkDelete(fetched);
    } catch(e) {
        return message.reply("Sinto algo estranho em minhas casquinhas :confounded: ");
    }
}
clear();
message.reply("Até estou mais leve! Algumas mensagens acabaram de sumir! :sunglasses:");
}

//comando para logar no voz
/*if (comando == "join") {
    if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
        .then(connection => {
            message.reply("Testando...1..2..3.. Conseguem me ouvir?");
        })
        .catch(console.log);
    } else {
        message.reply("Hey, você precisa estar em um canal de voz primeiro :confused:");
    }
} */


//Mensagem comandos
if(comando == "comandos"){
  const embed = {
    "description": "Quer saber mais sobre o que eu, o Sorveteiro, sou capaz de fazer? Relaxa que te ajudo! Vamos conferir:",
    "color": 15369457,
    "timestamp": "2019-08-28T21:27:53.495Z",
    "footer": {
      "icon_url": "https://i.imgur.com/7dq0VrP.png",
      "text": "Yuup.Online"
    },
    "thumbnail": {
      "url": "https://i.imgur.com/7dq0VrP.png"
    },
    "image": {
      "url": "https://i.imgur.com/3SG87b9.png"
    },
    "author": {
      "name": "COMANDOS!",
      "url": "https://i.imgur.com/3TIo3xb.png",
      "icon_url": "https://i.imgur.com/3TIo3xb.png"
    },
    "fields": [
      {
        "name": "Comandos Básicos",
        "value": "+ajuda  -  Veja onde tirar suas dúvidas \n+ping  -  Surpresa \n+teste  -  Teste se eu estou ativo \n+redes  -  Para verificar nossas redes sociais \n+clean  -  Para limpar 100 mensagens"
      },
      {
        "name": "Comandos de Jogos",
        "value": "+roleta  -  Sorteia um número de 1 a 6. \n+dado  -  Sorteia um número no dado D20."
      },
      {
        "name": "Gostou?",
        "value": "Aproveite e divirta-se em nosso hotel :grin:"
      }
    ]
  };
  message.channel.send({ embed });
  message.delete();
}

if(comando == "lost"){
  const embed = {
    "description": "```..E então de repente era tudo pó, poeira. Nada mais restava a não ser uma vasta destruição. \n Eu já não sabia mais o que era real e irreal, moral e imoral. Nao sabia distinguir realidade de ficção. \n E pensar que tudo isso era result...```",
    "url": "https://discordapp.com",
    "color": 65807,
    "timestamp": "2019-09-04T18:12:41.588Z",
    "footer": {
      "icon_url": "",
      "text": "Arquivo 42-U"
    },
    "author": {
      "name": "Mensagem recuperada datada de 04/09/3019:",
      "url": "",
      "icon_url": ""
    },
    "fields": [
      {
        "name": "A mensagem parece estar danificada. Recuperada outra parte da mesma: ",
        "value": "```Segui andando por aquelas estranhas e sinuosas ruas eis que encontro um antigo MacBook Air 5.7.. Por incrível que pareça, ele ainda funciona! \n Misteriosamente está ligado em um jogo pixelado ... Yuup? \n Seria possível isto? E tem outros jogadores! Pessoas vivas neste caos?```"
      },
      {
        "name": "Fim da transmissão.",
        "value": ".",
        "inline": true
      }
    ]
  };
  message.channel.send("EaStErEgG", { embed });
  message.delete();
}
});

bot.login(config.token);