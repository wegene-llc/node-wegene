/**
 * node-wegene
 *
 * writen by Cheiron Zhang on 02/24/2018
 */

const promiseRequest = require('../promiseRequest');

const Skin = {

    /**
      * Skin based on genetic information
      * @param {string} profileId    Required parameter: Genetic profile Id
      * @param {string} reportId    Required parameter: Report Id for the specific skin to look
      *
      * @return {Report}
    */
    getSkin: (profileId, reportId) => promiseRequest({
        url: '/skin/',
        params: {
            'profile_id': profileId
        },
        body: {
            'report_id': reportId
        }
    })

};

module.exports = Skin;
