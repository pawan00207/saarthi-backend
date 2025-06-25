const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<your-firebase-project>.firebaseio.com'
});

module.exports = admin;

// Example: services/aiService.js
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({ apiKey: 'YOUR_OPENAI_API_KEY' });
const openai = new OpenAIApi(configuration);

module.exports = openai;
