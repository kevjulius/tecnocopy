const fs = require('fs');

fs.readdir('./',(err, files) => {
    files.forEach( function(file) {
        console.log(file);
    });
});