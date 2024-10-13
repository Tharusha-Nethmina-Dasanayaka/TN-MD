const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=HzhVBARZ#BcAls4moedpaXNukNLsMb7gE9YCQLQrIZxH7xBzfQc0",
MONGODB: process.env.MONGODB || "mongodb+srv://Tharusha:Tharusha2006N@cluster0.juziauk.mongodb.net/",//enter mongo db url
};
