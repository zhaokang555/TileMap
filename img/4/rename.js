'use strict';

var fs = require('fs');
var rs, ws;
for (let y = 1; y <= 8; y++)
    for (let x = 1; x <= 8; x++) {
        rs = fs.createReadStream('latest_autocut64-' + ((y-1)*8+x) + '.bmp');
        // console.log('latest_autocut64-' + ((y-1)*8+x) + '.bmp');
        ws = fs.createWriteStream('' + x + y + '.bmp');
        // console.log('' + x + y + '.bmp');
        rs.pipe(ws);
        

    }


