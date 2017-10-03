/**
 * `RequestError` error.
 *
 * @api public
 */
function RequestError(message, code, uri, status) {
    if (!status) {
        switch (code) {
            case 'MISSING_REQUIRED_PARAMETER':
                status = 400;
                break;

            case 'INVALID_PARAMETER_VALUE':
                status = 400;
                break;

            case 'BAD_REQUEST':
                status = 400;
                break;

            case 'NOT_FOUND':
                status = 404;
                break;

            default:
                status = 500;
        }
    }

    Error.call(this);
    Error.captureStackTrace(this, RequestError);
    this.name = 'RequestError';
    this.message = message;
    this.code = code || 'server_error';
    this.uri = uri;
    this.status = status || 500;
}

/**
 * Inherit from `Error`.
 */
RequestError.prototype = new Error();
RequestError.prototype.constructor = RequestError;
RequestError.prototype.name = 'RequestError';

/**
 * Expose `RequestError`.
 */
module.exports = RequestError;
