//
//  build.js
//  SagoMini
//
//  Created by Brendan Lynch on 2018-03-08.
//  Build controller
//

const utils = require('../utils.js'),
      outputJSON = utils.outputJSON,
      Build = require('../models/build.js').Build

exports.readBuild = (req, res, next) => {
    let bundle_id = req.query.bundle_id || null
    Build.findOne({identifier: bundle_id}, (err, build) => {
        if (!err) {
            if (build) {
                outputJSON(res, build)
            } else {
                let err = new Error('Build not found. Create a new one?')
                err.status = 404
                next(err)
            }
        } else {
            next(err)
        }
    })
}

exports.setBuild = (req, res, next) => {
    let bundle_id = req.body.bundle_id || null
    let new_build_number = req.body.new_build_number || null
    let query = {
        identifier: bundle_id
    }
    let update = {
        $max: {
            number: new_build_number
        }
    }
    let options = {
        new: true
    }
    Build.findOneAndUpdate(query, update, options, (err, build) => {
        if (build) {
            outputJSON(res, build)
        } else {
            let build = new Build(query)
            build.save((err, build) => {
                if (!err) {
                    outputJSON(res, build)
                } else {
                    let err = new Error('Build could not be set. Check your entries and try again')
                    err.status = 400
                    next(err)
                }
            })
        }
    })
}

exports.bumpBuild = (req, res, next) => {
    let bundle_id = req.body.bundle_id || null
    let query = {
        identifier: bundle_id
    }
    let update = {
        $inc: {
            number: 1
        }
    }
    let options = {
        new: true
    }
    Build.findOneAndUpdate(query, update, options, (err, build) => {
        if (build) {
            outputJSON(res, build)
        } else {
            let build = new Build(query)
            build.save((err, build) => {
                if (!err) {
                    outputJSON(res, build)
                } else {
                    let err = new Error('Build could not be bumped. Check your entries and try again')
                    err.status = 400
                    next(err)
                }
            })
        }
    })
}
