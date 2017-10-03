const passport = require('passport');
const _ = require('lodash');

module.exports = function () {
    const ExpressAppCore = require('lib-express-app-core-nodejs');

    const { app, logger, routes } = ExpressAppCore.getInstance();

    app.get(routes.SAMPLE_ROUTE, (req, res, next) => {
        console.log('power on');
    })
};
