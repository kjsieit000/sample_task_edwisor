const express = require('express')
const mongoose = require('mongoose')
const app = express()

const sampleRoute = require('./routes/sampleRoutes')

app.use(express.json())
app.use('/sample', sampleRoute)



mongoose
    .connect(
        'mongodb+srv://sachinpandey_01:s#######1@cluster0-cjf4g.mongodb.net/operations?retryWrites=true&w=majority'
    )
    .then(() => {
        app.listen(3002)
        console.log('connected to mongoDBAtlas and listening to PORT 3002 ')
    }).catch(err => {
        console.log('unable to connect to mongodbAtlas', err)
    })