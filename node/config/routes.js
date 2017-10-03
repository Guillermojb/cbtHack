const _ = require('lodash');
const ExpressAppCore = require('lib-express-app-core-nodejs');

const { config } = ExpressAppCore.getInstance();

const endpoints = {
    SAMPLE_ROUTE: 'sample',
    /**
     * System routes
     */
    API_SYSTEM_HEALTH: '/health',
};

module.exports = _.mapValues(endpoints,
    endpointUrl => `/${config.getProperty('api.prefix')}/${config.getProperty('api.version')}${endpointUrl}`
);
