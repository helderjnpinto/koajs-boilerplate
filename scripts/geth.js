require('./utils/colors');
var shell = require('shelljs');


var __install = async function () {
    console.log('\t Executing install docker image'.info);
    if (!shell.which('docker')) {
        console.log('\t Sorry, this script requires docker!'.error);
        console.log('\t\t see here how to install: https://docs.docker.com/ '.help);
        shell.exit(1);
    }
    console.log('\t Pulling ethereum go client from hub.docker.com'.info);
    if (shell.exec('docker pull ethereum/client-go').code !== 0) {
        console.log('\t\t Error: docker pull ethereum/client-go failed'.error);
        shell.exit(1);
    }
}

var __run = async function (config = '') {
    console.log('\t Run geth in docker image'.info);
    if (!shell.which('docker')) {
        console.log('\t Sorry, this script requires docker!'.error);
        console.log('\t\t see here how to install: https://docs.docker.com/ '.help);
        shell.exit(1);
    }
    console.log('\t Pulling ethereum go client from hub.docker.com'.info);
    if (shell.exec('docker pull ethereum/client-go').code !== 0) {
        console.log('\t\t Error: docker pull ethereum/client-go failed'.error);
        shell.exit(1);
    }
}

var _initScript = function (envs = process.env.MODE) {
    console.log('\n Running geth script ...'.collectionType);
    console.log('\t Check env MODE:'.green, envs);
    if (!envs) {
        console.log("You must provide env MODE='install' or 'run'".red);
        return;
    }
    if (envs === 'install') {
        __install();
    } else if (envs === 'run') {

    }
};


(function __init() {
    _initScript(process.env.MODE);
}())