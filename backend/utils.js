//
//  utils.js
//  SagoMini
//
//  Created by Brendan Lynch on 2018-03-08.
//  Utility functions
//

exports.outputJSON = (res, output) => {
	res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(output.toJSON ? output.toJSON() : output, null, 4))
}
