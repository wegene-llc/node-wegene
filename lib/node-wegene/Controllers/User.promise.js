/**
 * node-wegene
 *
 * writen by Cheiron Zhang on 01/18/2018
 */

const request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    APIHelper = require('../APIHelper');

const User = {

    /**
     * Endpoint for basic user information
     *
     * @return {User}
     */
    getUser: function () {

        //prepare query string for API call;
        const baseUri = configuration.BASEURI;

        const queryBuilder = `${baseUri}/user/`;

        //validate and preprocess url
        const queryUrl = APIHelper.cleanUrl(queryBuilder);

        //prepare headers
        const headers = {
            "accept" : "application/json",
            "Authorization" : "Bearer " + configuration.oAuthAccessToken
        };

        //Construct the request
        const options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };

        //Build the response processing.
        return new Promise((resolve, reject) => {
            request(options, (error, response, context) => {
                if (error) {
                    reject({
                        message: error.message,
                        code: error.code
                    })
                } else if (response.statusCode >= 200 && response.statusCode <= 206) {
                    resolve(JSON.parse(response.body))
                } else {
                    reject({
                        message: 'HTTP Response Not OK',
                        code: response.statusCode,
                        response: response.body
                    })
                }
            });
        });
    }

};

module.exports = User;
