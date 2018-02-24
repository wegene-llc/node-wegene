/**
 * node-wegene
 *
 * writen by Cheiron Zhang on 02/24/2018
 */

const promiseRequest = require('../promiseRequest');

const Health = {

  /**
   * Disease carrier information based on genetic information
   * @param {string} profileId    Required parameter: Genetic profile Id
   * @param {string} reportId    Required parameter: Report Id for the specific disease carrier to look
   *
   * @return {Report}
   */
  getCarrier: (profileId, reportId) => promiseRequest({
    url: '/health/carrier/',
    params: {
      'profile_id': profileId
    },
    body: {
      'report_id': reportId
    }
  }),

  /**
   * Drug response based on genetic information
   * @param {string} profileId    Required parameter: Genetic profile Id
   * @param {string} reportId    Required parameter: Report Id for the specific drug response to look
   *
   * @return {Report}
   */
  getDrug: (profileId, reportId) => promiseRequest({
    url: '/health/drug/',
    params: {
      'profile_id': profileId
    },
    body: {
      'report_id': reportId
    }
  }),

  /**
    * Genetic traits based on genetic information
    * @param {string} profileId    Required parameter: Genetic profile Id
    * @param {string} reportId    Required parameter: Report Id for the specific genetic traits to look
    *
    * @return {Report}
  */
  getTraits: (profileId, reportId) => promiseRequest({
    url: '/health/traits/',
    params: {
      'profile_id': profileId
    },
    body: {
      'report_id': reportId
    }
  }),

  /**
    * Nutrition element metabolism based on genetic information
    * @param {string} profileId    Required parameter: Genetic profile Id
    * @param {string} reportId    Required parameter: Report Id for the specific nutrition element metabolism  to look
    *
    * @return {Report}
  */
  getMetabolism: (profileId, reportId) => promiseRequest({
    url: '/health/metabolism/',
    params: {
      'profile_id': profileId
    },
    body: {
      'report_id': reportId
    }
  })

};

module.exports = Health;
