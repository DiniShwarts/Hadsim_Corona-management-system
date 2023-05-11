const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const cors=require('cors')
const bodyParsr = require('body-parser')
const Corona_detail  = require('./routes/corona_details.router')
const Personal_detail = require('./routes/Personal_details.router')


app.use(cors())
app.use(bodyParsr.json())
app.use('/Corona_detail', Corona_detail)
app.use('/Personal_detail', Personal_detail)


const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log('connected to db')
    }).catch(err => {
        console.log(err)
    })


app.listen(process.env.PORT, () => { console.log(`listening port ${process.env.PORT}`) })