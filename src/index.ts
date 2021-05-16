;(async function () {
    try {
        const db = new DB()
        db.connect()

        app.listen(PORT, () => {
            console.log(`App is running on port ${PORT}.`)
        })

        // initSocket(server)
        console.log('Database connection initialized.')
    } catch (e) {
        throw new Error(`DB connection error: ${e}`)
    }
})()