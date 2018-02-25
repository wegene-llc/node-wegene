/**
 * node-wegene-example
 *
 * This is an example showcase how to use node-wegene to query WeGene data
 */

var async = require('async');
var wegene = require('../../lib/node-wegene');

/**
 * Config WeGene access token
 * Set oAuthAccessToken as a valid access token authorized by the user
 * Node.js Express apps can use passport-wegene package
 */
var config = wegene.configuration;
config.oAuthAccessToken = '<Replace With Access Token With Proper Scopes>';

async.waterfall([
	/**
	 * Endpoint for basic user information
	 * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
	 *
	 * @return {User}
	 */
	function(callback){
		var user = wegene.User;
    user.getUser(function(error, result){
      if(error){ return callback(error.message) }
			console.log('User Info:\n', JSON.stringify(result));
			console.log('----------');
			// A user can have multiple genetic test profiles related to one account, each has a profile id with different analysis
      callback(null, result.profiles[0].id);
    });
  },
	/**
	 * Health Risks based on genetic information
	 * @param {string} profileId    Required parameter: Genetic profile Id
	 * @param {string} reportId    Required parameter: Report Id for the specific drug response to look
	 * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
	 *
	 * @return {Report}
	 */
	function(profile_id, callback){
		var risk = wegene.Risk;
		risk.getRisk(profile_id, 104, function(error, result){
			if(error){ return callback(error.message) }
			console.log('Health Risk:\n', JSON.stringify(result));
			console.log('----------');
			callback(null, profile_id);
		});
	},
	/**
	 * Health Risks based on genetic information
	 * @param {string} profileId    Required parameter: Genetic profile Id
	 * @param {string} reportId    Required parameter: Report Id for the specific drug response to look
	 * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
	 *
	 * @return {Report}
	 */
	function(profile_id, callback){
		var athletigen = wegene.Athletigen;
		athletigen.getAthletigen(profile_id, 1487, function(error, result){
			if(error){ return callback(error.message) }
			console.log('Athletigen:\n', JSON.stringify(result));
			console.log('----------');
			callback(null, profile_id);
		});
	},
	/**
	 * Drug response based on genetic information
	 * @param {string} profileId    Required parameter: Genetic profile Id
	 * @param {string} reportId    Required parameter: Report Id for the specific drug response to look
	 * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
	 *
	 * @return {Report}
	 *
	 *
	 * ** Same usage for querying Health Risk (health.getRisk()) and Disease Carrier (health.getCarrier())
	 */
	function(profile_id, callback){
		var health = wegene.Health;
		health.getDrug(profile_id, 1462, function(error, result){
			if(error){ return callback(error.message) }
			console.log('Health Report:\n', JSON.stringify(result));
			console.log('----------');
			callback(null, profile_id);
		});
	},
	/**
	 * Allele data
	 * @param {string} profileId    Required parameter: Genetic Profile Id
	 * @param {array} locations    Required parameter: Allele locations in array
	 * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
	 *
	 * @return {Alleles}
	 */
	function(profile_id, callback){
		var allele = wegene.Allele;
		allele.getAllele(profile_id, ['rs671', 'rs529040510'], function(error, result){
			if(error){ return callback(error.message) }
			console.log('Allele Data:\n', JSON.stringify(result));
			console.log('----------');
			callback(null, profile_id);
		});
	},
	/**
	 * Haplogroups based on genetic and individual information
	 * @param {string} profileId    Required parameter: Genetic profile Id
	 * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
	 *
	 * @return {Haplogroups}
	 */
	function(profile_id, callback){
		var haplogroups = wegene.Haplogroups;
		haplogroups.getHaplogroups(profile_id, function(error, result){
			if(error){ return callback(error.message) }
			console.log('Haplogroups Results:\n', JSON.stringify(result));
			console.log('----------');
			callback(null, profile_id);
		});
	},
	/**
	 * Ancestry Composition based on genetic and individual information
	 * @param {string} profileId    Required parameter: Genetic profile Id
	 * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
	 *
	 * @return {AncestryComposition}
	 */
	function(profile_id, callback){
		var ancestry = wegene.Ancestry;
		ancestry.getAncestry(profile_id, function(error, result){
			if(error){ return callback(error.message) }
			console.log('Ancestry Composition:\n', JSON.stringify(result));
			console.log('----------');
			callback(null, 'profile_id');
		});
	}],function(error, result){
		if(error){ console.log(error) }
		console.log(result);
});
