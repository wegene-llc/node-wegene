/**
  * @module node-wegene
  *
  * Open API for Wegene Gene Data
  */

var configuration = require('./configuration'),
    User = require('./Controllers/User'),
    Allele = require('./Controllers/Allele'),
    Sport = require('./Controllers/Sport'),
    Ancestry = require('./Controllers/Ancestry'),
    Haplogroups = require('./Controllers/Haplogroups'),
    Health = require('./Controllers/Health'),
    Athletigen = require('./Controllers/Athletigen'),
    Risk = require('./Controllers/Risk');


function initializer(){}

//Main functional components of node-wegene
initializer.configuration = configuration;
initializer.User = User;
initializer.Allele = Allele;
initializer.Sport = Sport;
initializer.Health = Health;
initializer.Risk = Risk;
initializer.Athletigen = Athletigen;
initializer.Ancestry = Ancestry;
initializer.Haplogroups = Haplogroups;

// Main functional components of node-wegene using promise
try {
  const UserPromisify = require('./Controllers/User.promise'),
  SportPromisify = require('./Controllers/Sport.promise'),
  RiskPromisify = require('./Controllers/Risk.promise'),
  HealthPromisify = require('./Controllers/Health.promise'),
  HaplogroupsPromisify = require('./Controllers/Haplogroups.promise'),
  AthletigenPromisify = require('./Controllers/Athletigen.promise'),
  AncestryPromisify = require('./Controllers/Ancestry.promise'),
  AllelePromisify = require('./Controllers/Allele.promise');

  initializer.promise = {
    configuration,
    User: UserPromisify,
    Sport: SportPromisify,
    Risk: RiskPromisify,
    Health: HealthPromisify,
    Haplogroups: HaplogroupsPromisify,
    Athletigen: AthletigenPromisify,
    Ancestry: AncestryPromisify,
    Allele: AllelePromisify
  };
} catch (e) {
  console.log('promise api init failed.');
  console.log(e);
}


//Main Models of node-wegene

module.exports = initializer;
