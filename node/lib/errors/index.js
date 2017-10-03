const response = require('../response');
const util = require('util');

const ExpressAppCore = require('lib-express-app-core-nodejs');

module.exports = (function () {
    return (err, req, res, next) => {
        const { logger } = ExpressAppCore.getInstance();

        // default to an internal server error
        if (!err.status) {
            err.status = 500;
        }

        switch (err.status) {
            case 400:
                switch (err.code) {
                    case 'MISSING_REQUIRED_PARAMETER':
                        return res.status(400).send(response.MissingRequiredParameter(err.message));
                    case 'INVALID_PARAMETER_VALUE':
                        return res.status(400).send(response.InvalidParameterValue(err.message));
                    default:
                        return res.status(400).send(response.BadRequest(err.message));
                }

            case 401:
                switch (err.code) {
                    default:
                        return res.status(401).send(response.Unauthorized(err.message));
                }

            case 403:
                switch (err.code) {
                    case 'ACCESS_DENIED':
                    default:
                        return res.status(403).send(response.Forbidden(err.message));

                }

            case 404:
                switch (err.code) {
                    case 'NOT_FOUND':
                        return res.status(404).send(response.NotFound(err.message));
                    default:
                        return res.status(404).send(response.NotFound());
                }

            default:
                logger.error(util.inspect(err), 'Request');
                logger.error(err.stack, 'Request');
                return res.status(500).send(response.ServerError());
        }
    };
}());
