var express = require('express');
var ParseDashboard = require('parse-dashboard');

var app = express();

var dashboard = new ParseDashboard({
    "apps": [
        {
            "serverURL": "http://" + process.env.S1_ENV_PARSE_PUBLIC_ADDR + ":" + process.env.S1_ENV_PARSE_PUBLIC_PORT + "/parse",
            "appId": process.env.S1_ENV_APP_ID,
            "masterKey": process.env.S1_ENV_MASTER_KEY, // Keep this key secret!
            "appName": process.env.S1_ENV_APP_NAME || "s1-demo"
        },
        {
            "serverURL": "http://" + process.env.S2_ENV_PARSE_PUBLIC_ADDR + ":" + process.env.S2_ENV_PARSE_PUBLIC_PORT + "/parse",
            "appId": process.env.S2_ENV_APP_ID,
            "masterKey": process.env.S2_ENV_MASTER_KEY, // Keep this key secret!
            "appName": process.env.S2_ENV_APP_NAME || "s2-demo"
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
