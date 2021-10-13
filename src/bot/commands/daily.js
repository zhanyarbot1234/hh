const {
  MessageAttachment
} = require('discord.js'),
imgclass = require('../../me-handler/kingman/img'),
Img = new imgclass.IMG(),
KingLevel = require('../../me-handler/kingman/Level'),
KingmanLevel = new KingLevel.KingmanLevel(),
NumberConverter = require('../../me-handler/kingman/convnum'),
Captcha = require('../../me-handler/kingman/Captcha').default,
UserProfileData = require('../../Modals/Level System/Profile')
module.exports = {
    name: "credit",
    category: "",
    usage: " ",
    description : "",
    run: async(client, kmsg, args, prefix, memsg, memode) => {
      let User1 = kmsg.member,
      User2 = await memsg.GetUser(args[0] ? args[0]: ""),
      Balance = args[1];
      if(!User2){
        return await KingmanLevel.GetRank(User1)
        .then(data => {
          kmsg.channel.send(`**🏦 |  ${kmsg.author.username}, your account balance \`$${data.Credit}\`**`)
        })
      } else if(User2 && !Balance) {
        return await KingmanLevel.GetRank(User2)
        .then(data => {
          kmsg.channel.send(`**${User2.user.username} 💳 balance is \`$${data.Credit}\`**`)
        })
      } else if(User2 && Balance){
        if(isNaN(parseInt(Balance))){
          return kmsg.channel.send(`**⁉️ | ${kmsg.author.username}, type the credit you need to transfer!**`)
        }
        let Data1 = await KingmanLevel.GetRank(User1)
        if(Data1.Credit < parseInt(Balance)|| parseInt(Balance) === 0) {
          return kmsg.channel.send(`**❌ | Error , You Don't Have Enough Credit**`)
        } else {
          Cap = new Captcha()
          kmsg.channel.send(
            `type these numbers to confirm:`,
                new MessageAttachment(Cap.JPEGStream, "captcha.jpeg")
          )
          let collector = kmsg.channel.createMessageCollector(m => m.author.id === kmsg.author.id, { maxMatches: 1, time: 10000 });
          collector.on("collect", async (m) => {
              if (m.content.toUpperCase() === Cap.value) kmsg.channel.send(`**💰 | ${kmsg.author.username}, has transferred \`$${Balance}\` to ${User2}**`);
              let D1, D2;
              D1 = await UserProfileData.findOne({
                UserID: User1.id
              })
              D1.Credit = D1.Credit - parseInt(Balance)
              D1.save()
              D2 = await UserProfileData.findOneAndUpdate({
                UserID: User2.id
              },{
                $inc :{
                  Credit: parseInt(Balance)
                }
              })
              if(!D2){
                D2 = await UserProfileData.create({
                  UserID: User2.id,
                  Credit: parseInt(Balance)
                }).save()
              }
              collector.stop();
            });
        }
      }
    }
}

CRIDT
