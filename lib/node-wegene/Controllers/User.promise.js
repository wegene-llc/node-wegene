/**
 * node-wegene
 *
 * writen by Cheiron Zhang on 02/24/2018
 */

const promiseRequest = require('../promiseRequest');

const User = {

  /**
   * Endpoint for basic user information
   *
   * @return {User}
   */
  getUser: () => promiseRequest({
    url: '/user/',
    options: {
      method: 'GET'
    }
  })

};

module.exports = User;
