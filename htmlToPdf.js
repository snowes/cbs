"use strict";
var page = require('webpage').create();
var system = require('system');

var address = 'file://' + system.args[1] + '/index.html';
var output = system.args[2]+'.pdf';
page.paperSize = {format: 'A4', orientation: 'portrait', margin: '1cm'};
page.open(address, function (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit(1);
    } else {
        window.setTimeout(function () {
            page.render(output);
            phantom.exit();
        }, 200);
    }
});