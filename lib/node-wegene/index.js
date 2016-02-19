/**
  * @module WegeneAPILib
  *
  * Open API for Wegene Gene Data
  */

var configuration = require('./configuration'),
    User = require('./Controllers/User'),
    Allele = require('./Controllers/Allele'),
    Sport = require('./Controllers/Sport'),
    Health = require('./Controllers/Health');


function initializer(){}

//Main functional components of Node-Wegene
initializer.configuration = configuration;
initializer.User = User;
initializer.Allele = Allele;
initializer.Sport = Sport;
initializer.Health = Health;

//Main Models of Node-Wegene

module.exports = initializer;
