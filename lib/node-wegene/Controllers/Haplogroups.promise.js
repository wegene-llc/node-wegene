/**
 * node-wegene
 *
 * writen by Cheiron Zhang on 02/24/2018
 */

const promiseRequest = require('../promiseRequest');

const Haplogroups = {

  /**
   * Haplogroups data
   * @param {string} profileId    Required parameter: Genetic Profile Id
   *
   * @return {Haplogroups}
   */
  getHaplogroups: (profileId) => promiseRequest({
    url: '/haplogroups/result/',
    params: {
      'profile_id': profileId
    }
  })

};

module.exports = Haplogroups;
