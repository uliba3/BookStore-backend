const jwt = require('jsonwebtoken');

const getTokenFrom = request => {
    const authorization = request.get('authorization');
    return authorization && authorization.startsWith('Bearer ') ? authorization.replace('Bearer ', '') : null;
};

const verifyRequest = (request, response) => {
    const token = getTokenFrom(request);
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET);
        if (!decodedToken.id) {
            response.status(401).json({ error: 'Token invalid' });
            return null;
        }
        return decodedToken;
    } catch (error) {
        return null;
    }
};

module.exports = { verifyRequest };
