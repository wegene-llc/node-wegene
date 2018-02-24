/**
 * node-wegene
 *
 * writen by Cheiron Zhang on 02/24/2018
 */

const promiseRequest = require('../promiseRequest');

const Allele = {

  /**
   * Allele data
   * @param {string} profileId    Required parameter: Genetic Profile Id
   * @param {array} locations    Required parameter: Allele locations in array
   *
   * @return {mixed}
   */
  getAllele: (profileId, locations) => promiseRequest({
    url: '/genotypes/',
    params: {
      'profile_id': profileId
    },
    body: {
      locations
    }
  })

};

module.exports = Allele;
