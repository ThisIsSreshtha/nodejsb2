const QRCode = require('qrcode');

var a = 45;
var b = 33;
var add = a + b;
var sub = a - b;
var mul = a * b;
var div = a / b;


QRCode.toString(
    `Addition ${add}\nSubstraction ${sub}\nMultiplication ${mul}\nDivision ${div}`,
    { type: 'terminal' },
    function (err, url) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(url);
    }
);