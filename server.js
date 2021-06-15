const mongoose = require('mongoose')
const dotenv = require('dotenv')
const data_config = dotenv.config({ path: './.env'})
const db = process.env.DB.replace(data_config.DB_PASSWORD);

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => {
        console.log("connected to mongodb ")
    }).catch(error => {
        console.log("mongo error", error)
    })