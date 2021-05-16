import dotenv from "dotenv";

interface Config {
    ServerPort:string
}

let config:Config = {
    ServerPort: getConf("SERVER_PORT")
}

function getConf(name:string, def:string = ''):string {
    if (process.env[name]) {
        return process.env[name] || "";
    }

    return def;
}

module.exports = config;