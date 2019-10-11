var source = require("./token.js");
var token = source.get_token();
var txt = "";
var result1 = "";
var result2 = "";
var result3 = "";
var result4 = "";
var result5 = "";
var result6 = "";
var result7 = "";
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

//result 1
settings.data =
  '{ \r\n"query": "let dt = now(); AzureDiagnostics | summarize count() by bin(TimeGenerated, 24h), operationId_s,apiId_s | where datetime_part(\'day\', dt) == datetime_part(\'day\', TimeGenerated) | where apiId_s==\'sessions\'  | top 1 by count_ ;", "timespan": "PT24H"\r\n\t\r\n}';
var r = $.ajax(settings);

r.done(function(response) {
  result1 = response["tables"][0]["rows"][0][1];
  console.log("Your most called operation for 'sessions' is " + result1);
});

r.fail(function(jqXHR, textStatus) {
  console.log("Triggered fail callback: " + textStatus);
});

//result 2
settings.data =
  '{ \r\n"query": "let dt = now(); AzureDiagnostics | summarize count() by bin(TimeGenerated, 24h), operationId_s,apiId_s | where datetime_part(\'day\', dt) == datetime_part(\'day\', TimeGenerated) | where apiId_s==\'vehicles\'  | top 1 by count_ ;", "timespan": "PT24H"\r\n\t\r\n}';
var r = $.ajax(settings);

r.done(function(response) {
  result2 = response["tables"][0]["rows"][0][1];
  console.log("Your most called operation for 'vehicles' is " + result2);
});

r.fail(function(jqXHR, textStatus) {
  console.log("Triggered fail callback: " + textStatus);
});

//result 3
settings.data =
  '{ \r\n"query": "let dt = now(); AzureDiagnostics | summarize count() by bin(TimeGenerated, 24h), operationId_s,apiId_s | where datetime_part(\'day\', dt) == datetime_part(\'day\', TimeGenerated) | where apiId_s==\'client-gateway-users\'  | top 1 by count_ ;", "timespan": "PT24H"\r\n\t\r\n}';
var r = $.ajax(settings);

r.done(function(response) {
  result4 = response["tables"][0]["rows"][0][1];
  console.log("Your most called operation for 'client-gateway-users' is " + result3);
});

r.fail(function(jqXHR, textStatus) {
  console.log("Triggered fail callback: " + textStatus);
});

//result 4
settings.data =
  '{ \r\n"query": "let dt = now(); AzureDiagnostics | summarize count() by bin(TimeGenerated, 24h), operationId_s, productId_s | where datetime_part(\'day\', dt) == datetime_part(\'day\', TimeGenerated) | where productId_s==\'trusted-consumer\'  | top 1 by count_ ;", "timespan": "PT24H"\r\n\t\r\n}';
var r = $.ajax(settings);

r.done(function(response) {
  result4 = response["tables"][0]["rows"][0][1];
  console.log("Your most called operation for 'trusted-consumer' is " + result4);
});

r.fail(function(jqXHR, textStatus) {
  console.log("Triggered fail callback: " + textStatus);
});

//result 5
settings.data =
  '{ \r\n"query": "let dt = now(); AzureDiagnostics | summarize count() by bin(TimeGenerated, 24h), operationId_s, productId_s | where datetime_part(\'day\', dt) == datetime_part(\'day\', TimeGenerated) | where productId_s==\'trusted-services\'  | top 1 by count_ ;", "timespan": "PT24H"\r\n\t\r\n}';
var r = $.ajax(settings);

r.done(function(response) {
  result5 = response["tables"][0]["rows"][0][1];
  console.log("Your most called operation for 'trusted-services' is " + result5);
});

r.fail(function(jqXHR, textStatus) {
  console.log("Triggered fail callback: " + textStatus);
});

//result 6
settings.data =
  '{ \r\n"query": "let dt = now(); AzureDiagnostics | summarize count() by bin(TimeGenerated, 24h), operationId_s | where datetime_part(\'day\', dt) == datetime_part(\'day\', TimeGenerated) | top 1 by count_ ;", "timespan": "PT24H"\t\r\n}';
var r = $.ajax(settings);

r.done(function(response) {
  result6 = response["tables"][0]["rows"][0][1];
  console.log("Your most called operation is " + result6);
});

r.fail(function(jqXHR, textStatus) {
  console.log("Triggered fail callback: " + textStatus);
});

//result 7
settings.data =
  '{ \r\n"query": "let dt = now(); AzureDiagnostics | summarize count() by bin(TimeGenerated, 24h), operationId_s | where datetime_part(\'day\', dt) == datetime_part(\'day\', TimeGenerated) | top 5 by count_ ;", "timespan": "PT24H"\t\r\n}';
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
    result7 += response["tables"][0]["rows"][i][1];
    if (i != 4) {
      result7 += ", ";
    }
  }
  console.log("Your most 5 called operations are: "+ result7);
});

r.fail(function(jqXHR, textStatus) {
  console.log("Triggered fail callback: " + textStatus);
});

// get 1
module.exports = function(controller) {
  controller.hears(
    [
      "the most called operation for sessions",
      "most called operation for 'sessions'"
    ],
    "direct_message,direct_mention",
    function(bot, message) {
      var txt = "Your most called operation for 'sessions' is " + result1;
      bot.reply(message, txt);
      txt = "";
      result1 = "";
    }
  );

  // get 2
  controller.hears(
    [
      "the most called operation for vehicles",
      "most called operation for 'vehicles'"
    ],
    "direct_message,direct_mention",
    function(bot, message) {
      var txt = "Your most called operation for 'vehicles' is " + result2;
      bot.reply(message, txt);
      txt = "";
      result2 = "";
    }
  );

  // get 3
  controller.hears(
    [
      "the most called operation for client-gateway-users",
      "most called operation for 'client-gateway-users'",
      "most called operation for 'client gateway users'",
      "most called operation for client gateway users"
    ],
    "direct_message,direct_mention",
    function(bot, message) {
      var txt =
        "Your most called operation for 'client-gateway-users' is " + result3;
      bot.reply(message, txt);
      txt = "";
      result3 = "";
    }
  );

  //get 4
  controller.hears(
    [
      "the most called operation for trusted-consumer",
      "most called operation for 'trusted-consumer'",
      "most called operation for 'trusted consumer'",
      "most called operation for trusted consumer"
    ],
    "direct_message,direct_mention",
    function(bot, message) {
      var txt =
        "Your most called operation for 'trusted-consumer' is " + result4;
      bot.reply(message, txt);
      txt = "";
      result4 = "";
    }
  );

  // get 5
  controller.hears(
    [
      "the most called operation for trusted-services",
      "most called operation for 'trusted-services'",
      "most called operation for 'trusted services'",
      "most called operation for trusted services"
    ],
    "direct_message,direct_mention",
    function(bot, message) {
      var txt =
        "Your most called operation for 'trusted-services' is " + result5;
      bot.reply(message, txt);
      txt = "";
      result5 = "";
    }
  );

  // get 6
  controller.hears(
    ["most called operation"],
    "direct_message,direct_mention",
    function(bot, message) {
      var txt = "Your most called operation is " + result6;
      bot.reply(message, txt);
      txt = "";
      result6 = "";
    }
  );

  // get 7
  controller.hears(
    ["most five called operation",
     "most 5 called operation",
     "top 5 called operation",
     "top five called operation",
     "top 5 operation"],
    "direct_message,direct_mention",
    function(bot, message) {
      var txt = "Your most 5 called operations are " + result7;
      bot.reply(message, txt);
      txt = "";
      result7 = "";
    }
  );
};
