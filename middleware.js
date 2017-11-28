var cryptojs = require('crypto-js');

module.exports = function(db) {

    return {
        requireAuthentication: function(req, res, next) {
            var token = req.get('Auth') || '';

            // look for a token in the db
            db.token.findOne({
                where: {
                    // the value is the hashed value of whatever the user has set as the auth header
                    tokenHash: cryptojs.MD5(token).toString()
                }
            }).then(function(tokenInstance) { // if we find that then we run this block
                if (!tokenInstance) {
                    throw new Error();
                }
                // if success token instance, we store it onto the request object
                req.token = tokenInstance;
                return db.user.findByToken(token);
            }).then(function(user) {
                // set the user object onto the request object
                req.user = user;
                next(); // we continue with the execution of the promise
            }).catch(function(e) {
                res.status(401).send();
            });
        }
    };
}