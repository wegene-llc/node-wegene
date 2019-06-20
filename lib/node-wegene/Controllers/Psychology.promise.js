/**
 * node-wegene
 *
 * writen by Cheiron Zhang on 02/24/2018
 */

const promiseRequest = require('../promiseRequest');

const Psychology = {

    /**
      * Psychology based on genetic information
      * @param {string} profileId    Required parameter: Genetic profile Id
      * @param {string} reportId    Required parameter: Report Id for the specific psychology to look
      *
      * @return {Report}
    */
    getPsychology: (profileId, reportId) => promiseRequest({
        url: '/psychology/',
        params: {
            'profile_id': profileId
        },
        body: {
            'report_id': reportId
        }
    })

};

module.exports = Psychology;
