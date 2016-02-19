var async = require('async');
var wegene = require('../../lib/node-wegene');

var config = wegene.configuration;
config.oAuthAccessToken = '<A Valid Access Token With Proper Scope>';

async.waterfall([
	// Query user's genetic test profile id first for further query
	function(callback){
		var user = wegene.User;
    user.getUser(function(error, result){
      if(error){ return callback(error.message) }
			console.log('User Info:\n', JSON.stringify(result));
			console.log('----------');
      callback(null, result.profiles[0].id);
    });
  },
	// Query report for specific health risk/drug response/disease carrier
	function(profile_id, callback){
		var health = wegene.Health;
		health.getDrug(profile_id, 158,function(error, result){
			if(error){ return callback(error.message) }
			console.log('Health Report:\n', JSON.stringify(result));
			console.log('----------');
			callback(null, profile_id);
		});
	},
	// Query report for specific health risk/drug response/disease carrier
	function(profile_id, callback){
		var sport = wegene.Sport;
		sport.getAdvice(profile_id, 'male', 26, 174, 84, 'slimming', function(error, result){
			if(error){ return callback(error.message) }
			console.log('Sport Advice:\n', JSON.stringify(result));
			console.log('----------');
			callback(null, profile_id);
		});
	},
	// Query report for specific health risk/drug response/disease carrier
	function(profile_id, callback){
		var allele = wegene.Allele;
		allele.getAllele(profile_id, ['rs182549'], function(error, result){
			if(error){ return callback(error.message) }
			console.log('Allele Data:\n', JSON.stringify(result));
			console.log('----------');
			callback(null, 'Query Completed!');
		});
	}],function(error, result){
		console.log(result);
});
