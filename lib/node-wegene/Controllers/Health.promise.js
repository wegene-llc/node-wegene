/**
 * node-wegene
 *
 * writen by Cheiron Zhang on 01/19/2018
 */

const request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    APIHelper = require('../APIHelper');

const Health = {

    /**
     * Disease carrier information based on genetic information
     * @param {string} profileId    Required parameter: Genetic profile Id
     * @param {string} reportId    Required parameter: Report Id for the specific disease carrier to look
     *
     * @return {Report}
     */
    getCarrier: function (profileId, reportId) {

        //prepare query string for API call;
        const baseUri = configuration.BASEURI;

        let queryBuilder = `${baseUri}/health/carrier/{profile_id}`;

        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "profile_id" : profileId
        });

        //validate and preprocess url
        const queryUrl = APIHelper.cleanUrl(queryBuilder);

        //prepare headers
        const headers = {
            "accept" : "application/json",
            "Authorization" : `Bearer ${configuration.oAuthAccessToken}`
        };

        //prepare form data
        const form = {
            "report_id" : reportId
        };

        //Remove null values
        APIHelper.cleanObject(form);

        //Construct the request
        const options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
            form : form,
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
            })
        });
    },


    /**
     * Drug response based on genetic information
     * @param {string} profileId    Required parameter: Genetic profile Id
     * @param {string} reportId    Required parameter: Report Id for the specific drug response to look
     *
     * @return {Report}
     */
    getDrug: function (profileId, reportId) {

        //prepare query string for API call;
        const baseUri = configuration.BASEURI;

        let queryBuilder = `${baseUri}/health/drug/{profile_id}`;

        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "profile_id" : profileId
        });

        //validate and preprocess url
        const queryUrl = APIHelper.cleanUrl(queryBuilder);

        //prepare headers
        const headers = {
            "accept" : "application/json",
            "Authorization" : `Bearer ${configuration.oAuthAccessToken}`
        };

        //prepare form data
        const form = {
            "report_id" : reportId
        };

        //Remove null values
        APIHelper.cleanObject(form);

        //Construct the request
        const options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
            form : form,
        };

        //Build the response processing.
        return new Promise((resolve, reject) => {
            request(options, (error, response, context) => {
                if (error) {
                    reject({
                        message: error.message,
                        code: error.code
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 206) {
                    resolve(JSON.parse(response.body));
                } else {
                    reject({
                        message: 'HTTP Response Not OK',
                        code: response.statusCode,
                        response: response.body
                    });
                }
            });
        });

    },

      /**
        * Genetic traits based on genetic information
        * @param {string} profileId    Required parameter: Genetic profile Id
        * @param {string} reportId    Required parameter: Report Id for the specific genetic traits to look
        *
        * @return {Report}
      */
    getTraits: function (profileId, reportId) {

        //prepare query string for API call;
        const baseUri = configuration.BASEURI;

        let queryBuilder = `${baseUri}/health/traits/{profile_id}`;

        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "profile_id" : profileId
        });

        //validate and preprocess url
        const queryUrl = APIHelper.cleanUrl(queryBuilder);

        //prepare headers
        const headers = {
            "accept" : "application/json",
            "Authorization" : `Bearer ${configuration.oAuthAccessToken}`
        };

        //prepare form data
        const form = {
            "report_id" : reportId
        };

        //Remove null values
        APIHelper.cleanObject(form);

        //Construct the request
        const options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
            form : form,
        };

        //Build the response processing.
        return new Promise((resolve, reject) => {
            request(options, (error, response, context) => {
                if (error) {
                    reject({
                        message: error.message,
                        code: error.code
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 206) {
                    resolve(JSON.parse(response.body));
                } else {
                    reject({
                        message: 'HTTP Response Not OK',
                        code: response.statusCode,
                        response: response.body
                    });
                }
            });
        });

    },

      /**
        * Nutrition element metabolism based on genetic information
        * @param {string} profileId    Required parameter: Genetic profile Id
        * @param {string} reportId    Required parameter: Report Id for the specific nutrition element metabolism  to look
        *
        * @return {Report}
      */
    getMetabolism: function (profileId, reportId) {

        //prepare query string for API call;
        const baseUri = configuration.BASEURI;

        let queryBuilder = `${baseUri}/health/metabolism/{profile_id}`;

        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "profile_id" : profileId
        });

        //validate and preprocess url
        const queryUrl = APIHelper.cleanUrl(queryBuilder);

        //prepare headers
        const headers = {
            "accept" : "application/json",
            "Authorization" : `Bearer ${configuration.oAuthAccessToken}`
        };

        //prepare form data
        const form = {
            "report_id" : reportId
        };

        //Remove null values
        APIHelper.cleanObject(form);

        //Construct the request
        const options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
            form : form,
        };

        //Build the response processing.
        return new Promise((resolve, reject) => {
            request(options, (error, response, context) => {
                if (error) {
                    reject({
                        message: error.message,
                        code: error.code
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 206) {
                    resolve(JSON.parse(response.body));
                } else {
                    reject({
                        message: 'HTTP Response Not OK',
                        code: response.statusCode,
                        response: response.body
                    });
                }
            });
        });
    },

};

module.exports = Health;
