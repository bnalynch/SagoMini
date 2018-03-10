//
//  build.js
//  SagoMini
//
//  Created by Brendan Lynch on 2018-03-08.
//  Build model
//

const mongoose = require('mongoose')

exports.Build = mongoose.model('Build', new mongoose.Schema({
    identifier: {
        type: String,
        unique: true,
        required: true
    },
    number: {
        type: Number,
        required: true,
        default: 0,
        get: v => Math.round(v),
        set: v => Math.round(v)
    }
}, {
    toJSON: {
        transform: (doc, ret, options) => {
            delete ret.__v
            delete ret._id
        }
    }
}))
