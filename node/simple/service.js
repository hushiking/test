const url = require('url')

exports.sampleRequest = function (req, res) {
    const reqUrl = url.parse(req.url, true)
    let name = 'World'
    if (reqUrl.query.name) {
        name = reqUrl.query.name
    }

    let response = {
        'text': 'Hello ' + name
    }

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(response))
}

exports.testRequest = function (req, res) {
    let body = ''

    req.on('data', function (chunk) {
        body += chunk
    })
    req.on('end', function (chunk) {
        let postBody = JSON.stringify(body)
        let response = {
            'text': 'Post Request Value is ' + postBody.value
        }

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(response))
    })
}

exports.invalidRequest = function (req, res) {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain')
    res.end('Invalid Request')
}