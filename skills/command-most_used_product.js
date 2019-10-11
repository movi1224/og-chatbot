var source = require('./token.js');
var token = source.get_token();
var txt = "";
var result = "";
const jsdom = require("jsdom");
const {JSDOM} = jsdom;
const { window } = new JSDOM();
const {document} = (new JSDOM('<script></script>')).window;
global.document = document;
var $ = jQuery = require('jquery')(window);
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
	        "timeout": 10000
};

module.exports = function (controller) {
    
    /*
     * GetVehicle
     */
    controller.hears(["average response time for the operation 'GetVehicle'","average response time for the operation GetVehicle", "average response time for 'GetVehicle'", "average response time for 'GetVehicle'"], 'direct_message,direct_mention', function (bot, message) {

        settings.data = "{ \r\n\"query\": \"let dt = now(); AzureDiagnostics | summarize count(), avg(DurationMs) by bin(TimeGenerated, 24h), operationId_s | where datetime_part('day', dt) == datetime_part('day', TimeGenerated) | where operationId_s=='GetVehicle' ;\", \"timespan\": \"PT24H\"\t\r\n}";

        var r = $.ajax(settings);

        r.done(
	        function (response) {
	        result = response['tables'][0]['rows'][0][3];
            //console.log(result);
        });

        r.fail(
	        function( jqXHR, textStatus ) {
	        console.log("Triggered fail callback: " + textStatus);
        });
	
        var txt = "The average response time for the operation 'GetVehicle' is " + result;
	    bot.reply(message, txt);
	    txt = "";
    });

    controller.hears(["average response time for the operation 'GetVehicle' of the API, 'sessions'","average response time for the operation GetVehicle of the API, 'sessions'", 
                    "average response time for 'GetVehicle' of the API sessions","average response time for the operation GetVehicle of the API 'sessions'", 
                    "average response time for 'GetVehicle' of the API 'sessions'","average response time for the operation GetVehicle of the API sessions", 
                    "average response time for 'GetVehicle' of the API, sessions","average response time for GetVehicle of the API, sessions"], 
                    'direct_message,direct_mention', function (bot, message) {

        settings.data =  "data": "{ \r\n\"query\": \"let dt = now(); AzureDiagnostics | summarize count(), avg(DurationMs) by bin(TimeGenerated, 24h), operationId_s, apiId_s | where datetime_part('day', dt) == datetime_part('day', TimeGenerated) | where operationId_s=='GetVehicle' and apiId_s=='sessions' ;\", \"timespan\": \"PT24H\"\r\n\t\r\n}";

        var r = $.ajax(settings);

        r.done(
	        function (response) {
	        result = response['tables'][0]['rows'][0][4];
            //console.log(result);
        });

        r.fail(
	        function( jqXHR, textStatus ) {
	        console.log("Triggered fail callback: " + textStatus);
        });
	
        var txt = "The average response time for the operation 'GetVehicle' of the API 'sessions' is " + result;
	    bot.reply(message, txt);
	    txt = "";
    });

    controller.hears(["average response time for the operation 'GetVehicle' of the API, 'client-gateway-users'","average response time for the operation GetVehicle of the API, 'client-gateway-users'", 
                    "average response time for 'GetVehicle' of the API client-gateway-users","average response time for the operation GetVehicle of the API 'client-gateway-users'", 
                    "average response time for 'GetVehicle' of the API 'client-gateway-users'","average response time for the operation GetVehicle of the API client-gateway-users", 
                    "average response time for 'GetVehicle' of the API, client-gateway-users","average response time for GetVehicle of the API, client-gateway-users"], 
                    'direct_message,direct_mention', function (bot, message) {

        settings.data =  "data": "{ \r\n\"query\": \"let dt = now(); AzureDiagnostics | summarize count(), avg(DurationMs) by bin(TimeGenerated, 24h), operationId_s, apiId_s | where datetime_part('day', dt) == datetime_part('day', TimeGenerated) | where operationId_s=='GetVehicle' and apiId_s=='client-gateway-users' ;\", \"timespan\": \"PT24H\"\r\n\t\r\n}";

        var r = $.ajax(settings);

        r.done(
	        function (response) {
	        result = response['tables'][0]['rows'][0][4];
            //console.log(result);
        });

        r.fail(
	        function( jqXHR, textStatus ) {
	        console.log("Triggered fail callback: " + textStatus);
        });
	
        var txt = "The average response time for the operation 'GetVehicle' of the API 'client-gateway-users' is " + result;
	    bot.reply(message, txt);
	    txt = "";
    });

    controller.hears(["average response time for the operation 'GetVehicle' of the API, 'vehicles'","average response time for the operation GetVehicle of the API, 'vehicles'", 
                    "average response time for 'GetVehicle' of the API vehicles","average response time for the operation GetVehicle of the API 'vehicles'", 
                    "average response time for 'GetVehicle' of the API 'vehicles'","average response time for the operation GetVehicle of the API vehicles", 
                    "average response time for 'GetVehicle' of the API, vehicles","average response time for GetVehicle of the API, vehicles"], 
                    'direct_message,direct_mention', function (bot, message) {

        settings.data =  "data": "{ \r\n\"query\": \"let dt = now(); AzureDiagnostics | summarize count(), avg(DurationMs) by bin(TimeGenerated, 24h), operationId_s, apiId_s | where datetime_part('day', dt) == datetime_part('day', TimeGenerated) | where operationId_s=='GetVehicle' and apiId_s=='vehicles' ;\", \"timespan\": \"PT24H\"\r\n\t\r\n}";

        var r = $.ajax(settings);

        r.done(
	        function (response) {
	        result = response['tables'][0]['rows'][0][4];
            //console.log(result);
        });

        r.fail(
	        function( jqXHR, textStatus ) {
	        console.log("Triggered fail callback: " + textStatus);
        });
	
        var txt = "The average response time for the operation 'GetVehicle' of the API 'vehicles' is " + result;
	    bot.reply(message, txt);
	    txt = "";
    });

    /*
     * GetAuthorizationStatus
     */
    controller.hears(["average response time for the operation 'GetAuthorizationStatus'","average response time for the operation GetAuthorizationStatus", "average response time for 'GetAuthorizationStatus'", "average response time for 'GetAuthorizationStatus'"], 'direct_message,direct_mention', function (bot, message) {

        settings.data = "{ \r\n\"query\": \"let dt = now(); AzureDiagnostics | summarize count(), avg(DurationMs) by bin(TimeGenerated, 24h), operationId_s | where datetime_part('day', dt) == datetime_part('day', TimeGenerated) | where operationId_s=='GetAuthorizationStatus' ;\", \"timespan\": \"PT24H\"\t\r\n}";

        var r = $.ajax(settings);

        r.done(
	        function (response) {
	        result = response['tables'][0]['rows'][0][3];
            //console.log(result);
        });

        r.fail(
	        function( jqXHR, textStatus ) {
	        console.log("Triggered fail callback: " + textStatus);
        });
	
        var txt = "The average response time for the operation 'GetAuthorizationStatus' is " + result;
	    bot.reply(message, txt);
	    txt = "";
    });

    controller.hears(["average response time for the operation 'GetAuthorizationStatus' of the API, 'sessions'","average response time for the operation GetAuthorizationStatus of the API, 'sessions'", 
                    "average response time for 'GetAuthorizationStatus' of the API sessions","average response time for the operation GetAuthorizationStatus of the API 'sessions'", 
                    "average response time for 'GetAuthorizationStatus' of the API 'sessions'","average response time for the operation GetAuthorizationStatus of the API sessions", 
                    "average response time for 'GetAuthorizationStatus' of the API, sessions","average response time for GetAuthorizationStatus of the API, sessions"], 
                    'direct_message,direct_mention', function (bot, message) {

        settings.data =  "data": "{ \r\n\"query\": \"let dt = now(); AzureDiagnostics | summarize count(), avg(DurationMs) by bin(TimeGenerated, 24h), operationId_s, apiId_s | where datetime_part('day', dt) == datetime_part('day', TimeGenerated) | where operationId_s=='GetAuthorizationStatus' and apiId_s=='sessions' ;\", \"timespan\": \"PT24H\"\r\n\t\r\n}";

        var r = $.ajax(settings);

        r.done(
	        function (response) {
	        result = response['tables'][0]['rows'][0][4];
            //console.log(result);
        });

        r.fail(
	        function( jqXHR, textStatus ) {
	        console.log("Triggered fail callback: " + textStatus);
        });
	
        var txt = "The average response time for the operation 'GetAuthorizationStatus' of the API 'sessions' is " + result;
	    bot.reply(message, txt);
	    txt = "";
    });

    controller.hears(["average response time for the operation 'GetAuthorizationStatus' of the API, 'client-gateway-users'","average response time for the operation GetAuthorizationStatus of the API, 'client-gateway-users'", 
                    "average response time for 'GetAuthorizationStatus' of the API client-gateway-users","average response time for the operation GetAuthorizationStatus of the API 'client-gateway-users'", 
                    "average response time for 'GetAuthorizationStatus' of the API 'client-gateway-users'","average response time for the operation GetAuthorizationStatus of the API client-gateway-users", 
                    "average response time for 'GetAuthorizationStatus' of the API, client-gateway-users","average response time for GetAuthorizationStatus of the API, client-gateway-users"], 
                    'direct_message,direct_mention', function (bot, message) {

        settings.data =  "data": "{ \r\n\"query\": \"let dt = now(); AzureDiagnostics | summarize count(), avg(DurationMs) by bin(TimeGenerated, 24h), operationId_s, apiId_s | where datetime_part('day', dt) == datetime_part('day', TimeGenerated) | where operationId_s=='GetAuthorizationStatus' and apiId_s=='client-gateway-users' ;\", \"timespan\": \"PT24H\"\r\n\t\r\n}";

        var r = $.ajax(settings);

        r.done(
	        function (response) {
	        result = response['tables'][0]['rows'][0][4];
            //console.log(result);
        });

        r.fail(
	        function( jqXHR, textStatus ) {
	        console.log("Triggered fail callback: " + textStatus);
        });
	
        var txt = "The average response time for the operation 'GetAuthorizationStatus' of the API 'client-gateway-users' is " + result;
	    bot.reply(message, txt);
	    txt = "";
    });

    controller.hears(["average response time for the operation 'GetAuthorizationStatus' of the API, 'vehicles'","average response time for the operation GetAuthorizationStatus of the API, 'vehicles'", 
                    "average response time for 'GetAuthorizationStatus' of the API vehicles","average response time for the operation GetAuthorizationStatus of the API 'vehicles'", 
                    "average response time for 'GetAuthorizationStatus' of the API 'vehicles'","average response time for the operation GetAuthorizationStatus of the API vehicles", 
                    "average response time for 'GetAuthorizationStatus' of the API, vehicles","average response time for GetAuthorizationStatus of the API, vehicles"], 
                    'direct_message,direct_mention', function (bot, message) {

        settings.data =  "data": "{ \r\n\"query\": \"let dt = now(); AzureDiagnostics | summarize count(), avg(DurationMs) by bin(TimeGenerated, 24h), operationId_s, apiId_s | where datetime_part('day', dt) == datetime_part('day', TimeGenerated) | where operationId_s=='GetAuthorizationStatus' and apiId_s=='vehicles' ;\", \"timespan\": \"PT24H\"\r\n\t\r\n}";

        var r = $.ajax(settings);

        r.done(
	        function (response) {
	        result = response['tables'][0]['rows'][0][4];
            //console.log(result);
        });

        r.fail(
	        function( jqXHR, textStatus ) {
	        console.log("Triggered fail callback: " + textStatus);
        });
	
        var txt = "The average response time for the operation 'GetAuthorizationStatus' of the API 'vehicles' is " + result;
	    bot.reply(message, txt);
	    txt = "";
    });

    /*
     * GetUserProfile
     */
    controller.hears(["average response time for the operation 'GetUserProfile'","average response time for the operation GetUserProfile", "average response time for 'GetUserProfile'", "average response time for 'GetUserProfile'"], 'direct_message,direct_mention', function (bot, message) {

        settings.data = "{ \r\n\"query\": \"let dt = now(); AzureDiagnostics | summarize count(), avg(DurationMs) by bin(TimeGenerated, 24h), operationId_s | where datetime_part('day', dt) == datetime_part('day', TimeGenerated) | where operationId_s=='GetUserProfile' ;\", \"timespan\": \"PT24H\"\t\r\n}";

        var r = $.ajax(settings);

        r.done(
	        function (response) {
	        result = response['tables'][0]['rows'][0][3];
            //console.log(result);
        });

        r.fail(
	        function( jqXHR, textStatus ) {
	        console.log("Triggered fail callback: " + textStatus);
        });
	
        var txt = "The average response time for the operation 'GetUserProfile' is " + result;
	    bot.reply(message, txt);
	    txt = "";
    });

    controller.hears(["average response time for the operation 'GetUserProfile' of the API, 'sessions'","average response time for the operation GetUserProfile of the API, 'sessions'", 
                    "average response time for 'GetUserProfile' of the API sessions","average response time for the operation GetUserProfile of the API 'sessions'", 
                    "average response time for 'GetUserProfile' of the API 'sessions'","average response time for the operation GetUserProfile of the API sessions", 
                    "average response time for 'GetUserProfile' of the API, sessions","average response time for GetUserProfile of the API, sessions"], 
                    'direct_message,direct_mention', function (bot, message) {

        settings.data =  "data": "{ \r\n\"query\": \"let dt = now(); AzureDiagnostics | summarize count(), avg(DurationMs) by bin(TimeGenerated, 24h), operationId_s, apiId_s | where datetime_part('day', dt) == datetime_part('day', TimeGenerated) | where operationId_s=='GetUserProfile' and apiId_s=='sessions' ;\", \"timespan\": \"PT24H\"\r\n\t\r\n}";

        var r = $.ajax(settings);

        r.done(
	        function (response) {
	        result = response['tables'][0]['rows'][0][4];
            //console.log(result);
        });

        r.fail(
	        function( jqXHR, textStatus ) {
	        console.log("Triggered fail callback: " + textStatus);
        });
	
        var txt = "The average response time for the operation 'GetUserProfile' of the API 'sessions' is " + result;
	    bot.reply(message, txt);
	    txt = "";
    });

    controller.hears(["average response time for the operation 'GetUserProfile' of the API, 'client-gateway-users'","average response time for the operation GetUserProfile of the API, 'client-gateway-users'", 
                    "average response time for 'GetUserProfile' of the API client-gateway-users","average response time for the operation GetUserProfile of the API 'client-gateway-users'", 
                    "average response time for 'GetUserProfile' of the API 'client-gateway-users'","average response time for the operation GetUserProfile of the API client-gateway-users", 
                    "average response time for 'GetUserProfile' of the API, client-gateway-users","average response time for GetUserProfile of the API, client-gateway-users"], 
                    'direct_message,direct_mention', function (bot, message) {

        settings.data =  "data": "{ \r\n\"query\": \"let dt = now(); AzureDiagnostics | summarize count(), avg(DurationMs) by bin(TimeGenerated, 24h), operationId_s, apiId_s | where datetime_part('day', dt) == datetime_part('day', TimeGenerated) | where operationId_s=='GetUserProfile' and apiId_s=='client-gateway-users' ;\", \"timespan\": \"PT24H\"\r\n\t\r\n}";

        var r = $.ajax(settings);

        r.done(
	        function (response) {
	        result = response['tables'][0]['rows'][0][4];
            //console.log(result);
        });

        r.fail(
	        function( jqXHR, textStatus ) {
	        console.log("Triggered fail callback: " + textStatus);
        });
	
        var txt = "The average response time for the operation 'GetUserProfile' of the API 'client-gateway-users' is " + result;
	    bot.reply(message, txt);
	    txt = "";
    });

    controller.hears(["average response time for the operation 'GetUserProfile' of the API, 'vehicles'","average response time for the operation GetUserProfile of the API, 'vehicles'", 
                    "average response time for 'GetUserProfile' of the API vehicles","average response time for the operation GetUserProfile of the API 'vehicles'", 
                    "average response time for 'GetUserProfile' of the API 'vehicles'","average response time for the operation GetUserProfile of the API vehicles", 
                    "average response time for 'GetUserProfile' of the API, vehicles","average response time for GetUserProfile of the API, vehicles"], 
                    'direct_message,direct_mention', function (bot, message) {

        settings.data =  "data": "{ \r\n\"query\": \"let dt = now(); AzureDiagnostics | summarize count(), avg(DurationMs) by bin(TimeGenerated, 24h), operationId_s, apiId_s | where datetime_part('day', dt) == datetime_part('day', TimeGenerated) | where operationId_s=='GetUserProfile' and apiId_s=='vehicles' ;\", \"timespan\": \"PT24H\"\r\n\t\r\n}";

        var r = $.ajax(settings);

        r.done(
	        function (response) {
	        result = response['tables'][0]['rows'][0][4];
            //console.log(result);
        });

        r.fail(
	        function( jqXHR, textStatus ) {
	        console.log("Triggered fail callback: " + textStatus);
        });
	
        var txt = "The average response time for the operation 'GetUserProfile' of the API 'vehicles' is " + result;
	    bot.reply(message, txt);
	    txt = "";
    });

    /*
     * GetSecurityQuestions
     */
    controller.hears(["average response time for the operation 'GetSecurityQuestions'","average response time for the operation GetSecurityQuestions", "average response time for 'GetSecurityQuestions'", "average response time for 'GetSecurityQuestions'"], 'direct_message,direct_mention', function (bot, message) {

        settings.data = "{ \r\n\"query\": \"let dt = now(); AzureDiagnostics | summarize count(), avg(DurationMs) by bin(TimeGenerated, 24h), operationId_s | where datetime_part('day', dt) == datetime_part('day', TimeGenerated) | where operationId_s=='GetSecurityQuestions' ;\", \"timespan\": \"PT24H\"\t\r\n}";

        var r = $.ajax(settings);

        r.done(
	        function (response) {
	        result = response['tables'][0]['rows'][0][3];
            //console.log(result);
        });

        r.fail(
	        function( jqXHR, textStatus ) {
	        console.log("Triggered fail callback: " + textStatus);
        });
	
        var txt = "The average response time for the operation 'GetSecurityQuestions' is " + result;
	    bot.reply(message, txt);
	    txt = "";
    });

    controller.hears(["average response time for the operation 'GetSecurityQuestions' of the API, 'sessions'","average response time for the operation GetSecurityQuestions of the API, 'sessions'", 
                    "average response time for 'GetSecurityQuestions' of the API sessions","average response time for the operation GetSecurityQuestions of the API 'sessions'", 
                    "average response time for 'GetSecurityQuestions' of the API 'sessions'","average response time for the operation GetSecurityQuestions of the API sessions", 
                    "average response time for 'GetSecurityQuestions' of the API, sessions","average response time for GetSecurityQuestions of the API, sessions"], 
                    'direct_message,direct_mention', function (bot, message) {

        settings.data =  "data": "{ \r\n\"query\": \"let dt = now(); AzureDiagnostics | summarize count(), avg(DurationMs) by bin(TimeGenerated, 24h), operationId_s, apiId_s | where datetime_part('day', dt) == datetime_part('day', TimeGenerated) | where operationId_s=='GetSecurityQuestions' and apiId_s=='sessions' ;\", \"timespan\": \"PT24H\"\r\n\t\r\n}";

        var r = $.ajax(settings);

        r.done(
	        function (response) {
	        result = response['tables'][0]['rows'][0][4];
            //console.log(result);
        });

        r.fail(
	        function( jqXHR, textStatus ) {
	        console.log("Triggered fail callback: " + textStatus);
        });
	
        var txt = "The average response time for the operation 'GetSecurityQuestions' of the API 'sessions' is " + result;
	    bot.reply(message, txt);
	    txt = "";
    });

    controller.hears(["average response time for the operation 'GetSecurityQuestions' of the API, 'client-gateway-users'","average response time for the operation GetSecurityQuestions of the API, 'client-gateway-users'", 
                    "average response time for 'GetSecurityQuestions' of the API client-gateway-users","average response time for the operation GetSecurityQuestions of the API 'client-gateway-users'", 
                    "average response time for 'GetSecurityQuestions' of the API 'client-gateway-users'","average response time for the operation GetSecurityQuestions of the API client-gateway-users", 
                    "average response time for 'GetSecurityQuestions' of the API, client-gateway-users","average response time for GetSecurityQuestions of the API, client-gateway-users"], 
                    'direct_message,direct_mention', function (bot, message) {

        settings.data =  "data": "{ \r\n\"query\": \"let dt = now(); AzureDiagnostics | summarize count(), avg(DurationMs) by bin(TimeGenerated, 24h), operationId_s, apiId_s | where datetime_part('day', dt) == datetime_part('day', TimeGenerated) | where operationId_s=='GetSecurityQuestions' and apiId_s=='client-gateway-users' ;\", \"timespan\": \"PT24H\"\r\n\t\r\n}";

        var r = $.ajax(settings);

        r.done(
	        function (response) {
	        result = response['tables'][0]['rows'][0][4];
            //console.log(result);
        });

        r.fail(
	        function( jqXHR, textStatus ) {
	        console.log("Triggered fail callback: " + textStatus);
        });
	
        var txt = "The average response time for the operation 'GetSecurityQuestions' of the API 'client-gateway-users' is " + result;
	    bot.reply(message, txt);
	    txt = "";
    });

    controller.hears(["average response time for the operation 'GetSecurityQuestions' of the API, 'vehicles'","average response time for the operation GetSecurityQuestions of the API, 'vehicles'", 
                    "average response time for 'GetSecurityQuestions' of the API vehicles","average response time for the operation GetSecurityQuestions of the API 'vehicles'", 
                    "average response time for 'GetSecurityQuestions' of the API 'vehicles'","average response time for the operation GetSecurityQuestions of the API vehicles", 
                    "average response time for 'GetSecurityQuestions' of the API, vehicles","average response time for GetSecurityQuestions of the API, vehicles"], 
                    'direct_message,direct_mention', function (bot, message) {

        settings.data =  "data": "{ \r\n\"query\": \"let dt = now(); AzureDiagnostics | summarize count(), avg(DurationMs) by bin(TimeGenerated, 24h), operationId_s, apiId_s | where datetime_part('day', dt) == datetime_part('day', TimeGenerated) | where operationId_s=='GetSecurityQuestions' and apiId_s=='vehicles' ;\", \"timespan\": \"PT24H\"\r\n\t\r\n}";

        var r = $.ajax(settings);

        r.done(
	        function (response) {
	        result = response['tables'][0]['rows'][0][4];
            //console.log(result);
        });

        r.fail(
	        function( jqXHR, textStatus ) {
	        console.log("Triggered fail callback: " + textStatus);
        });
	
        var txt = "The average response time for the operation 'GetSecurityQuestions' of the API 'vehicles' is " + result;
	    bot.reply(message, txt);
	    txt = "";
    });

    /*
     * Login
     */
    controller.hears(["average response time for the operation 'Login'","average response time for the operation Login", "average response time for 'Login'", "average response time for 'Login'"], 'direct_message,direct_mention', function (bot, message) {

        settings.data = "{ \r\n\"query\": \"let dt = now(); AzureDiagnostics | summarize count(), avg(DurationMs) by bin(TimeGenerated, 24h), operationId_s | where datetime_part('day', dt) == datetime_part('day', TimeGenerated) | where operationId_s=='Login' ;\", \"timespan\": \"PT24H\"\t\r\n}";

        var r = $.ajax(settings);

        r.done(
	        function (response) {
	        result = response['tables'][0]['rows'][0][3];
            //console.log(result);
        });

        r.fail(
	        function( jqXHR, textStatus ) {
	        console.log("Triggered fail callback: " + textStatus);
        });
	
        var txt = "The average response time for the operation 'Login' is " + result;
	    bot.reply(message, txt);
	    txt = "";
    });

    controller.hears(["average response time for the operation 'Login' of the API, 'sessions'","average response time for the operation Login of the API, 'sessions'", 
                    "average response time for 'Login' of the API sessions","average response time for the operation Login of the API 'sessions'", 
                    "average response time for 'Login' of the API 'sessions'","average response time for the operation Login of the API sessions", 
                    "average response time for 'Login' of the API, sessions","average response time for Login of the API, sessions"], 
                    'direct_message,direct_mention', function (bot, message) {

        settings.data =  "data": "{ \r\n\"query\": \"let dt = now(); AzureDiagnostics | summarize count(), avg(DurationMs) by bin(TimeGenerated, 24h), operationId_s, apiId_s | where datetime_part('day', dt) == datetime_part('day', TimeGenerated) | where operationId_s=='Login' and apiId_s=='sessions' ;\", \"timespan\": \"PT24H\"\r\n\t\r\n}";

        var r = $.ajax(settings);

        r.done(
	        function (response) {
	        result = response['tables'][0]['rows'][0][4];
            //console.log(result);
        });

        r.fail(
	        function( jqXHR, textStatus ) {
	        console.log("Triggered fail callback: " + textStatus);
        });
	
        var txt = "The average response time for the operation 'Login' of the API 'sessions' is " + result;
	    bot.reply(message, txt);
	    txt = "";
    });

    controller.hears(["average response time for the operation 'Login' of the API, 'client-gateway-users'","average response time for the operation Login of the API, 'client-gateway-users'", 
                    "average response time for 'Login' of the API client-gateway-users","average response time for the operation Login of the API 'client-gateway-users'", 
                    "average response time for 'Login' of the API 'client-gateway-users'","average response time for the operation Login of the API client-gateway-users", 
                    "average response time for 'Login' of the API, client-gateway-users","average response time for Login of the API, client-gateway-users"], 
                    'direct_message,direct_mention', function (bot, message) {

        settings.data =  "data": "{ \r\n\"query\": \"let dt = now(); AzureDiagnostics | summarize count(), avg(DurationMs) by bin(TimeGenerated, 24h), operationId_s, apiId_s | where datetime_part('day', dt) == datetime_part('day', TimeGenerated) | where operationId_s=='Login' and apiId_s=='client-gateway-users' ;\", \"timespan\": \"PT24H\"\r\n\t\r\n}";

        var r = $.ajax(settings);

        r.done(
	        function (response) {
	        result = response['tables'][0]['rows'][0][4];
            //console.log(result);
        });

        r.fail(
	        function( jqXHR, textStatus ) {
	        console.log("Triggered fail callback: " + textStatus);
        });
	
        var txt = "The average response time for the operation 'Login' of the API 'client-gateway-users' is " + result;
	    bot.reply(message, txt);
	    txt = "";
    });

    controller.hears(["average response time for the operation 'Login' of the API, 'vehicles'","average response time for the operation Login of the API, 'vehicles'", 
                    "average response time for 'Login' of the API vehicles","average response time for the operation Login of the API 'vehicles'", 
                    "average response time for 'Login' of the API 'vehicles'","average response time for the operation Login of the API vehicles", 
                    "average response time for 'Login' of the API, vehicles","average response time for Login of the API, vehicles"], 
                    'direct_message,direct_mention', function (bot, message) {

        settings.data =  "data": "{ \r\n\"query\": \"let dt = now(); AzureDiagnostics | summarize count(), avg(DurationMs) by bin(TimeGenerated, 24h), operationId_s, apiId_s | where datetime_part('day', dt) == datetime_part('day', TimeGenerated) | where operationId_s=='Login' and apiId_s=='vehicles' ;\", \"timespan\": \"PT24H\"\r\n\t\r\n}";

        var r = $.ajax(settings);

        r.done(
	        function (response) {
	        result = response['tables'][0]['rows'][0][4];
            //console.log(result);
        });

        r.fail(
	        function( jqXHR, textStatus ) {
	        console.log("Triggered fail callback: " + textStatus);
        });
	
        var txt = "The average response time for the operation 'Login' of the API 'vehicles' is " + result;
	    bot.reply(message, txt);
	    txt = "";
    });
}
