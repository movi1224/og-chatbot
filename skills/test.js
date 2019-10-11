var source = require('./token.js');
var token = source.get_token();
//console.log(token);

const jsdom = require("jsdom");
var txt = "Your last called operation is ";
var result = "";
const {JSDOM} = jsdom;
const { window } = new JSDOM();
const {document} = (new JSDOM('<script></script>')).window;
global.document = document;
var $ = jQuery = require('jquery')(window)

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api.loganalytics.io/v1/workspaces/188e060f-1491-4080-acee-d92acbff84f3/query",
	"type": "POST",
	"headers": {
		"Content-Type": "application/json",
		"Authorization": "Bearer " + token,
		"Postman-Token": "cef60051-9b20-4953-a83f-3da83fee0fd2,1499eec5-079a-4aab-aef5-6190439ece14",
	},
	"processData": false,
	"timeout": 10000,
}

settings.data = "{ \r\n\"query\": \"let dt = now(); AzureDiagnostics | summarize count() by bin(TimeGenerated, 24h), operationId_s | where datetime_part('day', dt) == datetime_part('day', TimeGenerated) | top 5 by count_;\", \"timespan\": \"PT24H\"\t\r\n}";

var r = $.ajax(settings);

r.done(
	function (response) {
		//console.log(response['tables'][0]['rows'][0][1]);
		//console.log(response['tables'][0]['rows'][1]);
        var ops = response['tables'][0]['rows'].length;
		console.log(ops);
        if (ops > 5) { ops = 5; };
        for (var i = 0; i < ops; i++)
        {
	        result += response['tables'][0]['rows'][i][1];
            if (i != 4) { result += ", "; };
        }
        console.log(result);
    });

r.fail(
	function( jqXHR, textStatus ) {
	    console.log("Triggered fail callback: " + textStatus);
 });