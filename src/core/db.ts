import mongoose from "mongoose"
import * as log from "loglevel"
import config from "../config/config"

const db = mongoose.connection
db.on("error", () => {
    log.error("DB: mongo", "mongo db connection is not open")
    log.warn("killing myself so that container restarts")
})

db.once("open", () => {
    log.info("DB: mongo db connection is established")
})

interface mongoDBInfo {
    host: string
    username: string
    port: number
    password: string
    database: string
}

function getMongoDBUrl(auth: boolean, dbInfo?: mongoDBInfo): string {
    let url: string
    if (auth) {
        return `mongodb://localhost:27017/${config.MongoDatabase}`
    }

    url =
        "mongodb://" +
        config.MongoUser +
        ":" +
        config.MongoPassword +
        "@" +
        config.MongoHost +
        ":" +
        config.MongoPort.toString() +
        "/" +
        config.MongoDatabase

    return url
}
export default class Database {
    url: string = getMongoDBUrl(false, {
        database: config.MongoDatabase,
        host: config.MongoHost,
        password: config.MongoPassword,
        port: config.MongoPort,
        username: config.MongoUser
    })

    constructor() {
        if (config.MongoAuthDisable) {
            this.url = getMongoDBUrl(config.MongoAuthDisable)
        }

        log.info("DATABASE URL: ", this.url)
    }

    connect() {
        return mongoose.connect(
            this.url,
            {
                autoIndex: false,
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: 5000
            },
            (error) => {
                if (error) {
                    log.error("MongoDB Connection error:", error)
                    process.exit(1)
                }
            }
        )
    }
}
