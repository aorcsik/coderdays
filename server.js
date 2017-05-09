var path = require('path');
var ghost = require('ghost');
var express = require('express'),
    parentApp = express();

ghost({
    config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {

    parentApp.use('/static', express.static(__dirname + '/public'));
    parentApp.use('/.well-known', express.static(__dirname + '/.well-known'));

    parentApp.use(ghostServer.config.paths.subdir, ghostServer.rootApp);

    ghostServer.start(parentApp);
});
