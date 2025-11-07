

const QRCode = require('qrcode');  // same as import


QRCode.toString("Hello I am here...", {type:'terminal'}, function(err, url){
    try {
        console.log(url);
    } catch (error) {
        console.log(err);
    }
});
