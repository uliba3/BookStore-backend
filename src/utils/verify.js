const jwt = require('jsonwebtoken');


const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.startsWith('Bearer ')) {
      return authorization.replace('Bearer ', '')
    }
    return null
}

const verifyRequest = (request) => {
    const token = getTokenFrom(request);
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!decodedToken.id) {
        return response.status(401).json({ error: 'token invalid' })
    }
    return decodedToken;
  } catch (error) {
    return null;
  }
};

module.exports = { verifyRequest };