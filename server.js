require ('newrelic');

// Temporary fix for lodash issue: https://github.com/TryGhost/Ghost/issues/7336
require('ghost/core/server/overrides');

var path = require('path');
var ghost = require('ghost');
var express = require('express'),
    parentApp = express();

ghost({
    config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {

    parentApp.use('/static', express.static(__dirname + '/public'));

    parentApp.use(ghostServer.config.paths.subdir, ghostServer.rootApp);

    ghostServer.start(parentApp);
});
