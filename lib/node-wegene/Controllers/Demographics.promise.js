/**
 * node-wegene
 *
 * writen by Cheiron Zhang on 02/24/2018
 */

const promiseRequest = require('../promiseRequest');

const Demographics = {

    /**
      * Demographics based on genetic information
      * @param {string} profileId    Required parameter: Genetic profile Id
      *
      * @return {Demographics}
    */
    getDemographics: (profileId) => promiseRequest({
        url: '/demographics/',
        params: {
            'profile_id': profileId
        },
        body: {}
    })

};

module.exports = Demographics;
