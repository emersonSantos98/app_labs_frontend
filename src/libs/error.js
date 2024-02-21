const axios = require('axios');

class Api extends Error {
    constructor(message) {
        super(`ApiError: ${message}`);
    }
}

class Domain extends Error {
    constructor(message) {
        super(message);
    }
}

class ErrorMessage {
    message(error, msg) {
        if (axios.isAxiosError(error)) {
            const {status} = error.response;
            const messageResponse = error.response.data.message;
            if (status >= 400 && status < 500) {
                return new Domain(messageResponse);
            }

            if (status >= 500) {
                return new Api(messageResponse);
            }
        }

        return new Error(msg);
    }
}

module.exports = {Api, Domain, ErrorMessage};
