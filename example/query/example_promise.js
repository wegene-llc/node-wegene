const wegene = require('../../lib/node-wegene').promise;

let config = wegene.configuration;
// config.oAuthAccessToken = '<Replace the access token with one with proper scope>';
config.oAuthAccessToken = '9fe0d2f62cc396df5643e63d3ac78ee1';

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

async function getSportAdvice () {
  try {
    const advice = await wegene.Sport.getAdvice(userInfo.profiles[0].id, userInfo.profiles[0].sex, 28, 178, 65);
    console.log(`Sport Advice: \n ${JSON.stringify(advice)}`);
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

async function test () {
  await getUser();
  await getSportAdvice();
  await getRisk();
}

test();
