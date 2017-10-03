module.exports = function () {
    const ExpressAppCore = require('lib-express-app-core-nodejs');

    const { app, logger, routes } = ExpressAppCore.getInstance();

    app.get(routes.API_SYSTEM_HEALTH,
        logger.collect('endpoint.health', {
            status: true,
            timing: true
        }),
        function (req, res, next) {
            res.status(200).send();
        }
    );
};
