const _ = require('lodash');

module.exports = function () {
    function isValidVersion(version) {
        if (version === undefined) {
            return false;
        }

        version = version.split('.');

        if (version.length > 2) {
            return false;
        }

        const major = version[0] === '0' ? 0 : parseInt(version[0]) || null;
        const minor = version[1] === '0' ? 0 : parseInt(version[1]) || null;

        return (!_.isNull(major) && !_.isNull(minor));
    }

    function isValidArray(items) {
        let isValid = true;
        if (!_.isArray(items) || items.length === 0) {
            return false;
        }

        items.forEach((item) => {
            const nrnValid = validNrn(item, /nrn:+(collection|video)/);

            if (!nrnValid) {
                isValid = false;
                return;
            }
        });

        return isValid;
    }

    function isValidNrn(nrn) {
        return validNrn(nrn, /nrn:playlist:+(user|certification)/);
    }

    function validNrn(nrn, options) {
        const explodeItem = nrn.split(':');
        const mongoId = explodeItem[explodeItem.length - 1].split('v')[0];
        const nrnOption = nrn.split(`:${mongoId}`)[0];

        return options.test(nrnOption) && /^[a-f0-9]{24}$/.test(mongoId);
    }

    return {
        isValidVersion,
        isValidArray,
        isValidNrn
    };
};
