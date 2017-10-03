const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;

module.exports = function () {
    const ExpressAppCore = require('lib-express-app-core-nodejs');

    const { serviceClients } = ExpressAppCore.getInstance();

    const { auth: authServiceClient } = serviceClients;

    /**
     * BearerStrategy
     *
     * This strategy is used to authenticate either users or clients based on an access token
     * If a user, they must have previously authorized a client
     * application, which is issued an access token to make requests on behalf of
     * the authorizing user.
     */
    passport.use(new BearerStrategy(
        {
            passReqToCallback: true
        },
        function (req, accessToken, done) {
            authServiceClient.API.getTokenInfo(accessToken).exec()
                .then(function (result) {
                    req.token = result;
                    req.token.access_token = accessToken;

                    done(null, req.token);
                })
                .catch(function (error) {
                    return done(null, false);
                });
        }
    ));
};
