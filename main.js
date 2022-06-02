const exe = require("child_process").exec;
const createFile = require("./helpers.js");
const arguments = process.argv[2];

setInterval(() => {
    exe(`heroku logs -a ${arguments}`, (err, stOut, stErr) => {
        console.log(stOut);
    });

}, 5000);

setInterval(() => {
    exe(`heroku logs -a ${arguments}`, (err, stOut, stErr) => {
        createFile(stOut);
    });
}, 60000);