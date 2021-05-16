import app from "./app"
import DB from "./core/db"
import config from "./config/config"
import log from "npmlog"

;(async function () {
    try {
        const db = new DB()
        db.connect()

        app.listen(config.HttpPort, () => {
            log.info("INDEX", `Server is running on port: ${config.HttpPort}`)
        })

        log.info("INDEX", "Database connection initialized.")
    } catch (e) {
        throw new Error(`DB connection error: ${e}`)
    }
})()
