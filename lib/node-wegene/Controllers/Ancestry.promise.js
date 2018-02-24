/**
 * node-wegene
 *
 * writen by Cheiron Zhang on 02/24/2018
 */

const promiseRequest = require('../promiseRequest');

const Ancestry = {

  /**
   * Ancestry data
   * @param {string} profileId    Required parameter: Genetic Profile Id
   *
   * @return {mixed}
   */
  getAncestry: (profileId) => promiseRequest({
    url: '/ancestry/',
    params: {
      'profile_id': profileId
    }
  })

};

module.exports = Ancestry;
