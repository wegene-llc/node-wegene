/**
 * node-wegene
 *
 * writen by Cheiron Zhang on 02/24/2018
 */

const promiseRequest = require('../promiseRequest');

const Sport = {

  /**
   * Sports advice based on genetic and individual information
   * @param {string} profileId    Required parameter: Genetic profile Id
   * @param {string} sex    Required parameter: Sex of the user
   * @param {int} age    Required parameter: Age of the user
   * @param {int} height    Required parameter: Height of the user
   * @param {int} weight    Required parameter: Weight of the user
   * @param {string} healthTarget    Required parameter: Target for sport, only supporting slimming now
   *
   * @return {SportAdvice}
   */
  getAdvice: (profileId, sex, age, height, weight, healthTarget) => promiseRequest({
    url: '/sport/advise/',
    params: {
      'profile_id': profileId
    },
    body: {
      'age': age,
      'health_target': healthTarget || 'slimming',
      'height': height,
      'sex': sex,
      'weight': weight
    }
  })

};

module.exports = Sport;
