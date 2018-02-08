const wegene = require('../../lib/node-wegene').promise;

let config = wegene.configuration;
config.oAuthAccessToken = '<Replace the access token with one with proper scope>';

async function getUser () {
  try {
    const user = await wegene.User.getUser();
    console.log(`User Info: \n ${JSON.stringify(user)}`);
  } catch (err) {
    console.log(err);
  }
}

getUser();
