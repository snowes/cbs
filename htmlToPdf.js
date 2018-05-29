"use strict";
var page = require('webpage').create();
var system = require('system');

var address = 'file://' + system.args[1] + '/index.html';
var output = system.args[2] + '.pdf';
page.paperSize = {
    format: 'A4',
    header: {
        height: "50px",
        contents: phantom.callback(function (pageNum, numPages) {
            return "<div style='text-align: left;  font-family: Verdana; font-size: 8.5pt; ',=>Gredit Bureau（Singapore）Pte Ltd<br/>" +
                "<i style='font-size: 5pt ',=>A subdidiary Infocredit Holdings</i><div style='width: 100%; font-size: 6.5pt; padding-top: 6px ',=><span style='display: inline-block; width: 33.3% ',=>Enquiry No.:782080414</span><span style='display: inline-block; width: 33.3% ',=>Client Ref.:A02018010529</span><span style='display: inline-block; width: 33.3% ',=>Report Date:08-05-2018</span></div></div>";
        })
    },
    orientation: 'portrait', margin: {
        top: '2.2cm',
        bottom: '2.8cm',
        left: '1.8cm',
        right: '1.8cm'
    }
};
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