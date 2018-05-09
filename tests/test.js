var now = Date.now();

var fs = require('fs');
fs.writeFile("tests/results/output.txt", now, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});