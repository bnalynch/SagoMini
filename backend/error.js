//
//  error.js
//  SagoMini
//
//  Created by Brendan Lynch on 2018-03-08.
//  Error handlers
//

let getErrorOutput = (err) => {
	let errorType,
		errorMessage = err.message,
		errorStatus = err.status || null

	// Set errorType based on error status code
	switch (errorStatus) {
		case 400:
			errorType = 'Bad request'
			break
		case 401:
			errorType = 'Unauthorized'
			break
		case 402:
			errorType = 'Request Failed'
			break
		case 404:
			errorType = 'Not Found'
			break
		case 422:
			errorType = 'Unprocessable Entity'
			break
		default:
			errorType = 'API Error'
	}

	// Prepare JSON output
	let output = {
		error: {
			type: errorType,
			message: errorMessage
		}
	}

	return JSON.stringify(output, null, 4)
}

exports.clientErrorHandler = (err, req, res, next) => {
	res.header('Content-Type', 'application/json')

	if (!err.status) {
		err.status = 500
	}

	let output = getErrorOutput(err)

	res.status(err.status).send(output)
}

exports.errorHandler = (req, res) => {
	res.header('Content-Type', 'application/json')

	// Set an error and pass to the getErrorOutput method for consistency
  	let err = new Error('Unrecognized request URL (' + req.method + ': ' + req.url + ')')
  	err.status = 404

	let output = getErrorOutput(err)

	res.status(err.status).send(output)
}
