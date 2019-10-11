var source = require("./token.js");
var token = source.get_token();
var txt = "";
var result = "";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = new JSDOM("<script></script>").window;
global.document = document;
var $ = (jQuery = require("jquery")(window));
var settings = {
  async: true,
  crossDomain: true,
  url:
    "https://api.loganalytics.io/v1/workspaces/188e060f-1491-4080-acee-d92acbff84f3/query",
  type: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
    "Postman-Token":
      "cef60051-9b20-4953-a83f-3da83fee0fd2,1499eec5-079a-4aab-aef5-6190439ece14"
  },
  processData: false,
  timeout: 10000
};

settings.data =
  '{ \r\n"query": "let dt = now(); AzureDiagnostics | summarize count() by bin(TimeGenerated, 24h), productId_s | where datetime_part(\'day\', dt) == datetime_part(\'day\', TimeGenerated) | top 1 by count_ asc;", "timespan": "PT24H"\r\n\t\r\n}';

var r = $.ajax(settings);

r.done(function(response) {
  result = response["tables"][0]["rows"][0][1];
  console.log("Your least used product is " + result);
});

r.fail(function(jqXHR, textStatus) {
  console.log("Triggered fail callback: " + textStatus);
});

module.exports = function(controller) {
  controller.hears(
    ["least used product"],
    "direct_message,direct_mention",
    function(bot, message) {
      var txt = "Your least used product is " + result;
      bot.reply(message, txt);
      txt = "";
    }
  );
};
