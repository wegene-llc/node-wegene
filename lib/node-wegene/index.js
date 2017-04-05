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

//Main Models of node-wegene

module.exports = initializer;
