  name:"c",
  code:`**🏦 | $username[$findUser[$message]] credits is $getUserVar[mone;$findUser[$message]]**
$onlyIf[$findUser[$message]!=;i can't findUser]`
})

bot.command({
  name:"take",
  code:`$buttonCollector[$get[id];$authorID;10m;d,c,w;d,c,w;err]
$let[id;$apiMessage[$channelID;<@$authorID>;{title:take credits}{description:click to daily to 
take daily credits | 
click to weekly to take weekly credits}{color:RED};{actionRow:daily,2,3,d:Cancel,2,4,c:weekly,2,3,w};;yes]] `
})
bot.onInteractionCreate();
bot.awaitedCommand({
  name:"d",
  code:`$interactionReply[**🏦 | $username your daily is $random[1000;4000]**;;;;7]
$setUserVar[mone;$sum[$getUserVar[mone;$authorID];$random[1000;4000]];$authorID]
$cooldown[24h;]`
  
})
bot.awaitedCommand({
  name:"c",
  code:`$interactionReply[command is Cancel to play;;;;7]
$deleteIn[10s]`
})
bot.awaitedCommand({
  name:"w",
  code:`$interactionReply[**🏦 | $username your weekly is $random[10000;25000]**;;;;7]
$setUserVar[mone;$sum[$getUserVar[mone;$authorID];$random[10000;25000]];$authorID]
$cooldown[7d;]`
  
})
