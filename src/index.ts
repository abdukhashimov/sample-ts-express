import "reflect-metadata"
import app from "./app"
import DB from "./core/db"
import config from "./config/config"
import * as log from "loglevel"

;(async function () {
    try {
        const db = new DB()
        db.connect()

        app.listen(config.HttpPort, () => {
            log.info(`Server is running on port: ${config.HttpPort}`)
        })

        // initSocket(server)
        console.log("Database connection initialized.")
    } catch (e) {
        throw new Error(`DB connection error: ${e}`)
    }
})()
