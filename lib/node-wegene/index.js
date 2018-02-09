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

const UserPromisify = require('./Controllers/User.promise');
const SportPromisify = require('./Controllers/Sport.promise');
const RiskPromisify = require('./Controllers/Risk.promise');
const HealthPromisify = require('./Controllers/Health.promise')


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
initializer.promise = {
  configuration,
  User: UserPromisify,
  Sport: SportPromisify,
  Risk: RiskPromisify,
  Health: HealthPromisify
}

//Main Models of node-wegene

module.exports = initializer;
