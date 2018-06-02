const axios = require('axios')

 module.exports = async function (subreddit) {
  const data = await axios.get('https://www.reddit.com/r/'+subreddit+'/.json?limit=500')

  return data.data.data.children.map((doc) => doc.data.url)
}


