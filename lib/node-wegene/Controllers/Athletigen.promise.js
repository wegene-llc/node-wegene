/**
 * node-wegene
 *
 * writen by Cheiron Zhang on 02/24/2018
 */

const promiseRequest = require('../promiseRequest');

const Athletigen = {

  /**
    * Athletigen based on genetic information
    * @param {string} profileId    Required parameter: Genetic profile Id
    * @param {string} reportId    Required parameter: Report Id for the specific athletigen to look
    *
    * @return {Report}
  */
  getAthletigen: (profileId, reportId) => promiseRequest({
    url: '/athletigen/',
    params: {
      'profile_id': profileId
    },
    body: {
      'report_id': reportId
    }
  })

};

module.exports = Athletigen;
