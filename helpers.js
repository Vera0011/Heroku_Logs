const fs = require("fs");
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

const createFile = (data) => {
    try {
        fs.appendFileSync(`logs/${year}-${month}-${day}.logs`, data);
    } catch (err) {
        fs.mkdirSync(`logs`);
        fs.appendFileSync(`logs/${year}-${month}-${day}.logs`, data);
    }
}

module.exports = createFile;