/**
 * node-wegene
 *
 * writen by Cheiron Zhang on 02/24/2018
 */

const promiseRequest = require('../promiseRequest');

const Health = {

  /**
   * Health risk based on genetic information
   * @param {string} profileId    Required parameter: Genetic profile id
   * @param {string} reportId    Required parameter: Report Id for the specific health risk to look
   *
   * @return {Report}
   */
  getRisk: (profileId, reportId) => promiseRequest({
    url: '/risk/',
    params: {
      'profile_id': profileId
    },
    body: {
      'report_id': reportId
    }
  })
  
};

module.exports = Health;
