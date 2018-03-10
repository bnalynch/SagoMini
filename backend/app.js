//
//  build.js
//  SagoMini
//
//  Created by Brendan Lynch on 2018-03-08.
//  Node / Express API
//

const config = require('./config.js'),
      error = require('./error.js'),
      express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      cors = require('cors'),
      app = express()

console.log(config.title)

mongoose.connect(config.mongo.database)

let db = mongoose.connection
db.on('error', console.error.bind(console, 'Mongo connection error:'))
db.once('open', () => {
    console.log('Mongo connection open')
    app.listen(config.port, () => {
        console.log('Listening on port ' + config.port)
    })
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()) // allow JSON requests
app.use(cors())
app.use('/api', require('./routes/api.js')) // API router

app.get('/', (req, res) => {
    res.send(config.title)
})

app.use(error.clientErrorHandler)
app.use(error.errorHandler)
