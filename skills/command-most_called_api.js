var source = require("./token.js");
var token = source.get_token();
var txt = "";
var result1 = "";
var result2 = "";
var result3 = "";
var result4 = "";
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
  '{ \r\n"query": "let dt = now(); AzureDiagnostics | summarize count() by bin(TimeGenerated, 24h), apiId_s, productId_s | where datetime_part(\'day\', dt) == datetime_part(\'day\', TimeGenerated) | where productId_s==\'trusted-consumer\'  | top 1 by count_;", "timespan": "PT24H"\t\r\n}';
var r = $.ajax(settings);

r.done(function(response) {
  result1 = response["tables"][0]["rows"][0][1];
  console.log("Your most called API for 'trusted-consumer' is " + result1);
});

r.fail(function(jqXHR, textStatus) {
  console.log("Triggered fail callback: " + textStatus);
});

settings.data =
  '{ \r\n"query": "let dt = now(); AzureDiagnostics | summarize count() by bin(TimeGenerated, 24h), apiId_s, productId_s | where datetime_part(\'day\', dt) == datetime_part(\'day\', TimeGenerated) | where productId_s==\'trusted-services\'  | top 1 by count_ ;", "timespan": "PT24H"\t\r\n}';
var r = $.ajax(settings);

r.done(function(response) {
  result2 = response["tables"][0]["rows"][0][1];
  console.log("Your most called API for 'trusted-services' is " + result2);
});

r.fail(function(jqXHR, textStatus) {
  console.log("Triggered fail callback: " + textStatus);
});

settings.data =
  '{ \r\n"query": "let dt = now(); AzureDiagnostics | summarize count() by bin(TimeGenerated, 24h), apiId_s | where datetime_part(\'day\', dt) == datetime_part(\'day\', TimeGenerated) | top 1 by count_ ;", "timespan": "PT24H"\r\n\t\r\n}';
var r = $.ajax(settings);

r.done(function(response) {
  result3 = response["tables"][0]["rows"][0][1];
  console.log("Your most called API is " + result3);
});

r.fail(function(jqXHR, textStatus) {
  console.log("Triggered fail callback: " + textStatus);
});

settings.data =
  '{ \r\n"query": "let dt = now(); AzureDiagnostics | summarize count() by bin(TimeGenerated, 24h), apiId_s | where datetime_part(\'day\', dt) == datetime_part(\'day\', TimeGenerated) | top 5 by count_ ;", "timespan": "PT24H"\t\r\n}';
var r = $.ajax(settings);

r.done(function(response) {
  //console.log(response['tables'][0]['rows'][0][1]);
  //console.log(response['tables'][0]['rows'][1]);
  var ops = response["tables"][0]["rows"].length;
  //console.log(ops);
  if (ops > 5) {
    ops = 5;
  }
  for (var i = 0; i < ops; i++) {
    result4 += response["tables"][0]["rows"][i][1];
    if (i != 4) {
      result4 += ", ";
    }
  }
  console.log("Your most 5 called operations are " + result4);
});

r.fail(function(jqXHR, textStatus) {
  console.log("Triggered fail callback: " + textStatus);
});

module.exports = function(controller) {
  controller.hears(
    [
      "most called API for trusted-consumer",
      "most called API for trusted consumer"
    ],
    "direct_message,direct_mention",
    function(bot, message) {
      var txt = "Your most called API for 'trusted-consumer' is " + result1;
      bot.reply(message, txt);
      txt = "";
    }
  );

  controller.hears(
    [
      "most called API for trusted-services",
      "most called API for trusted services"
    ],
    "direct_message,direct_mention",
    function(bot, message) {
      var txt = "Your most called API for 'trusted-services' is " + result2;
      bot.reply(message, txt);
      txt = "";
    }
  );

  controller.hears(
    ["most called API"],
    "direct_message,direct_mention",
    function(bot, message) {
      var txt = "Your most called API is " + result3;
      bot.reply(message, txt);
      txt = "";
    }
  );

  controller.hears(
    [
      "most 5 called API",
      "top 5 API",
      "top 5 called API",
      "top five called API",
      "most five called API"
    ],
    "direct_message,direct_mention",
    function(bot, message) {
      var txt = "Your top 5 called APIs are " + result4;
      bot.reply(message, txt);
      txt = "";
    }
  );
};
