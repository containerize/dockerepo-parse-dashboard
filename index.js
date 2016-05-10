var express = require('express');
var ParseDashboard = require('parse-dashboard');

var app = express();

var dashboard = new ParseDashboard({
    "apps": [
        {
            "serverURL": "http://" + process.env.PARSE_PUBLIC_ADDR + ":" + process.env.PARSE_PUBLIC_PORT + "/parse",
            "appId": process.env.APP_ID,
            "masterKey": process.env.MASTER_KEY, // Keep this key secret!
            "appName": "demo"
        }
    ],
    "users": [
        {
            "user": process.env.ADMIN_USER,
            "pass": process.env.ADMIN_PASS
        }
    ]
}, process.env.PARSE_DASHBOARD_ALLOW_INSECURE_HTTP);

// make the Parse Dashboard available at /dashboard
app.use('/dashboard', dashboard);

var httpServer = require('http').createServer(app);
httpServer.listen(4040);
