const ExpressAppCore = require('lib-express-app-core-nodejs');

const settings = {
    appDir: __dirname,
    customValidators: require('./lib/validators')(),
    preRouteSetupHook: (app) => {
        require('./lib/auth')();
    },
    postRouteSetupHook: (app) => {
        const response = require('./lib/response');
        app.get('/*', (req, res, next) => {
            res.status(404).send(response.NotFound());
        });
    },
    errorHandler: require('./lib/errors')
};

ExpressAppCore.construct(settings)
    .then((app) => app.startServer())
    .catch((e) => {
        console.error(e);
    });
