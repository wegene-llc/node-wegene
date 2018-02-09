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
   * Health risk based on genetic information
   * @param {string} profileId    Required parameter: Genetic profile id
   * @param {string} reportId    Required parameter: Report Id for the specific health risk to look
   *
   * @return {Report}
   */
  getRisk: function(profileId, reportId) {

      //prepare query string for API call;
      const baseUri = configuration.BASEURI;

      let queryBuilder = `${baseUri}/risk/{profile_id}`;

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
      })
  },

};

module.exports = Health;
