'use strict';

const _ = require('lodash');

module.exports = (function Response() {
    const reasons = {
        ERR_BAD_REQUEST: {
            status: 400,
            message: 'Bad Request'
        },
        ERR_INVALID_PARAMETER_VALUE: {
            status: 400,
            message: 'Invalid Parameter Value'
        },
        ERR_MISSING_REQUIRED_PARAMETER: {
            status: 400,
            message: 'Missing Required Parameter'
        },
        ERR_UNAUTHORIZED: {
            status: 401,
            message: 'Unauthorized Access'
        },
        ERR_FORBIDDEN: {
            status: 403,
            message: 'Forbidden'
        },
        ERR_NOT_FOUND: {
            status: 404,
            message: 'Not Found'
        },
        METHOD_NOT_ALLOWED: {
            status: 405,
            message: 'Method Not Allowed'
        },
        ERR_UNPROCESSABLE: {
            status: 409,
            message: 'Unprocessable'
        },
        ERR_SERVER_ERROR: {
            status: 500,
            message: 'Internal Server Error'
        },
        ERR_NOT_IMPLEMENTED: {
            status: 501,
            message: 'Not Implemented'
        }
    };

    const errorResponse = function (reason, errors, data) {
        if (!_.has(reasons, reason)) {
            throw new Error(`Invalid response value: ${reason}`);
        }

        const returnObject = _.clone(reasons[reason]);

        returnObject.code = reason;

        if (errors !== undefined) {
            returnObject.error = errors;
        }

        if (data !== undefined) {
            returnObject.data = data;
        }

        return returnObject;
    };

    return {
        NotFound(errors, data) {
            return errorResponse('ERR_NOT_FOUND', errors, data);
        },

        MethodNotAllowed(errors, data) {
            return errorResponse('METHOD_NOT_ALLOWED', errors, data);
        },

        Unprocessable(errors, data) {
            return errorResponse('ERR_UNPROCESSABLE', errors, data);
        },

        Forbidden(errors, data) {
            return errorResponse('ERR_FORBIDDEN', errors, data);
        },

        Unauthorized(errors, data) {
            return errorResponse('ERR_UNAUTHORIZED', errors, data);
        },

        BadRequest(errors, data) {
            return errorResponse('ERR_BAD_REQUEST', errors, data);
        },

        InvalidParameterValue(errors, data) {
            return errorResponse('ERR_INVALID_PARAMETER_VALUE', errors, data);
        },

        MissingRequiredParameter(errors, data) {
            return errorResponse('ERR_MISSING_REQUIRED_PARAMETER', errors, data);
        },

        ServerError(errors, data) {
            return errorResponse('ERR_SERVER_ERROR', errors, data);
        },

        NotImplemented(errors, data) {
            return errorResponse('ERR_NOT_IMPLEMENTED', errors, data);
        }
    };
}());
