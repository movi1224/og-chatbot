//
// Command: hello
//
module.exports = function (controller) {

        controller.hears(["hi", "hello"], 'direct_message,direct_mention', function (bot, message) {
            'use strict';

            var text = "Hello from the other side!";
            //text += "\n- " + bot.enrichCommand(message, ".commons") + ": shows metadata about myself";
            //text += "\n- " + bot.enrichCommand(message, "help") + ": spreads the word about my skills";
            bot.reply(message, text);
        });
}
