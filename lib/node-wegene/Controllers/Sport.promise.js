/**
 * node-wegene
 *
 * writen by Cheiron Zhang on 01/19/2018
 */

const request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    APIHelper = require('../APIHelper');

const Sport = {

    /**
     * Sports advice based on genetic and individual information
     * @param {string} profileId    Required parameter: Genetic profile Id
     * @param {string} sex    Required parameter: Sex of the user
     * @param {int} age    Required parameter: Age of the user
     * @param {int} height    Required parameter: Height of the user
     * @param {int} weight    Required parameter: Weight of the user
     * @param {string} healthTarget    Required parameter: Target for sport, only supporting slimming now
     *
     * @return {SportAdvice}
     */
    getAdvice : function(profileId, sex, age, height, weight, healthTarget){
        //Assign default values
        healthTarget = healthTarget || "slimming";

        //prepare query string for API call;
        const baseUri = configuration.BASEURI;

        let queryBuilder = `${baseUri}/sport/advise/{profile_id}`;

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
            "age" : age,
            "health_target" : healthTarget,
            "height" : height,
            "sex" : sex,
            "weight" : weight
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
        })
    }

};

module.exports = Sport;
