//
// Command: hello
//
module.exports = function (controller) {

    controller.hears(["thank"], 'direct_message,direct_mention', function (bot, message) {
        var text = "You are welcome!";
        //text += "\n- " + bot.enrichCommand(message, ".commons") + ": shows metadata about myself";
        //text += "\n- " + bot.enrichCommand(message, "help") + ": spreads the word about my skills";
        bot.reply(message, text);
    });
}
