/**
  * @module node-wegene
  *
  * Open API for Wegene Gene Data
  */

var configuration = require('./configuration'),
    User = require('./Controllers/User'),
    Allele = require('./Controllers/Allele'),
    Ancestry = require('./Controllers/Ancestry'),
    Haplogroups = require('./Controllers/Haplogroups'),
    Health = require('./Controllers/Health'),
    Athletigen = require('./Controllers/Athletigen'),
    Skin = require('./Controllers/Skin'),
    Psychology = require('./Controllers/Psychology'),
    Demographics = require('./Controllers/Demographics'),
    Risk = require('./Controllers/Risk');


function initializer(){}

//Main functional components of node-wegene
initializer.configuration = configuration;
initializer.User = User;
initializer.Allele = Allele;
initializer.Health = Health;
initializer.Risk = Risk;
initializer.Athletigen = Athletigen;
initializer.Skin = Skin;
initializer.Demographics = Demographics;
initializer.Psychology = Psychology;
initializer.Ancestry = Ancestry;
initializer.Haplogroups = Haplogroups;

// Main functional components of node-wegene using promise
try {
  const UserPromisify = require('./Controllers/User.promise'),
  RiskPromisify = require('./Controllers/Risk.promise'),
  HealthPromisify = require('./Controllers/Health.promise'),
  HaplogroupsPromisify = require('./Controllers/Haplogroups.promise'),
  AthletigenPromisify = require('./Controllers/Athletigen.promise'),
  SkinPromisify = require('./Controllers/Skin.promise'),
  DemographicsPromisify = require('./Controllers/Demographics.promise'),
  PsychologyPromisify = require('./Controllers/Psychology.promise'),
  AncestryPromisify = require('./Controllers/Ancestry.promise'),
  AllelePromisify = require('./Controllers/Allele.promise');

  initializer.promise = {
    configuration,
    User: UserPromisify,
    Risk: RiskPromisify,
    Health: HealthPromisify,
    Haplogroups: HaplogroupsPromisify,
    Athletigen: AthletigenPromisify,
    Skin: SkinPromisify,
    Demographics: DemographicsPromisify,
    Psychology: PsychologyPromisify,
    Ancestry: AncestryPromisify,
    Allele: AllelePromisify
  };
} catch (e) {
  console.log('promise api init failed.');
  console.log(e);
}


//Main Models of node-wegene

module.exports = initializer;
