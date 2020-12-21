const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=51982ac516488bd360b37a02bbc04324&query=' + lat + ',' + lon


    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.location.name + ' It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.precip + ' precipitation out')
        }
    })
}

module.exports = forecast