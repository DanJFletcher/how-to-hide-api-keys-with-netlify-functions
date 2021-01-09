const axios = require('axios')

const handler = async (event) => {
  const {lat, long} = event.queryStringParameters

  const API_SECRET = process.env.API_SECRET 
  const url = `http://api.weatherstack.com/current?access_key=${API_SECRET}&query=${lat},${long}&forcast_days=4`

  try {
    const { data } = await axios.get(url)

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: status,
      body: JSON.stringify({status, statusText, headers, data})
    }
  }
}

module.exports = { handler }
