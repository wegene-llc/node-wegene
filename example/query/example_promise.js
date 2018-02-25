const wegene = require('../../lib/node-wegene').promise;

let config = wegene.configuration;
config.oAuthAccessToken = 'Replace With Access Token With Proper Scopes';

let userInfo = {};

async function getUser () {
  try {
    const user = await wegene.User.getUser();
    userInfo = user;
    console.log(`User Info: \n ${JSON.stringify(user)}`);
  } catch (err) {
    console.log(err);
  }
}

async function getRisk () {
  try {
    const risk = await wegene.Risk.getRisk(userInfo.profiles[0].id, 104);
    console.log(`Hypertension Risk: \n ${JSON.stringify(risk)}`);
  } catch (err) {
    console.log(err);
  }
}

async function getCarrier () {
  try {
    const carrier = await wegene.Health.getCarrier(userInfo.profiles[0].id, 189);
    console.log(`Nijmegen Breakage Syndrome: \n ${JSON.stringify(carrier)}`);
  } catch (err) {
    console.log(err);
  }
}

async function getDrug () {
  try {
    const drug = await wegene.Health.getDrug(userInfo.profiles[0].id, 1462);
    console.log(`Alcohol: \n ${JSON.stringify(drug)}`);
  } catch (err) {
    console.log(err);
  }
}

async function getTraits () {
  try {
    const traits = await wegene.Health.getTraits(userInfo.profiles[0].id, 1);
    console.log(`Sleep time: \n ${JSON.stringify(traits)}`);
  } catch (err) {
    console.log(err);
  }
}

async function getMetabolism () {
  try {
    const metabolism = await wegene.Health.getMetabolism(userInfo.profiles[0].id, 256);
    console.log(`Vitamin-A: \n ${JSON.stringify(metabolism)}`);
  } catch (err) {
    console.log(err);
  }
}

async function getHaplogroups () {
  try {
    const haplogroups = await wegene.Haplogroups.getHaplogroups(userInfo.profiles[0].id);
    console.log(`Haplogroups: \n ${JSON.stringify(haplogroups)}`);
  } catch (err) {
    console.log(err);
  }
}

async function getAthletigen () {
  try {
    const athletigen = await wegene.Athletigen.getAthletigen(userInfo.profiles[0].id, 1487);
    console.log(`Endurance: \n ${JSON.stringify(athletigen)}`);
  } catch (err) {
    console.log(err);
  }
}

async function getAncestry () {
  try {
    const ancestry = await wegene.Ancestry.getAncestry(userInfo.profiles[0].id);
    console.log(`Ancestry: \n ${JSON.stringify(ancestry)}`);
  } catch (err) {
    console.log(err);
  }
}

async function getAllele () {
  try {
    const allele = await wegene.Allele.getAllele(userInfo.profiles[0].id, ['rs529040510', 'rs671']);
    console.log(`rs182549 allele: \n ${JSON.stringify(allele)}`);
  } catch (err) {
    console.log(err);
  }
}

async function test () {
  await getUser();
  await getRisk();
  await getCarrier();
  await getDrug();
  await getTraits();
  await getMetabolism();
  await getHaplogroups();
  await getAthletigen();
  await getAncestry();
  await getAllele();
}

test();
