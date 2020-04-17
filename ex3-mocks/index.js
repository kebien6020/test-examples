const axios = require('axios')

exports.fetchPosts = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts'

  let response
  try {
    response = await axios.get(url)
  } catch (err) {
    return {error: err.message, posts: null}
  }

  return {error: null, posts: response.data}
}

exports.top3Titles = (posts) => {
  const top3 = posts.slice(0, 3)
  const titles = top3.map(post => post.title)

  return titles
}
