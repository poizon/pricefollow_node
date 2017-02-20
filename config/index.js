/**
 * Created by P.Kuptsov on 20.02.2017.
 */
var nconf = require('nconf');
var path = require('path');

nconf.argv()
    .env()
    .file({file: path.join(__dirname, 'config.json')});


module.exports = nconf;