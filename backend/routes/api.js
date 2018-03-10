//
//  api.js
//  SagoMini
//
//  Created by Brendan Lynch on 2018-03-09.
//  API router
//

const express = require('express'),
      buildController = require('../controllers/build.js')

let router = express.Router()

router.get('/read', buildController.readBuild)
router.post('/set', buildController.setBuild)
router.post('/bump', buildController.bumpBuild)

module.exports = router
