//
// Command: help
//
module.exports = function (controller) {
    
    var commands = [
        "What is my least called API [for {product_name}]?",
        "What is my most called API [for {product_name}]?",
        "What is my least called operation [for {product_name | api_name}]?",
        "What is my most called operation [for {product_name | api_name}]?",
        "What are my least 5 called operations?",
        "What are my top 5 called operations?",
        "What is my least used product?",
        "What is my most used product?",
        "What is the average response time for the operation {operation_name} [of the API {api_name}]?",
    ];

    controller.hears(["help", "who"], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are the different questions I can answer:";
        for (var i = 0; i < commands.length; i++)
        {
            text += "\n- " + bot.enrichCommand(message, commands[i]);
        }
        bot.reply(message, text);
    });
}
