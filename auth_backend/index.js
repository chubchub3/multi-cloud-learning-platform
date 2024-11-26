const express = require('express');
const app = express();
const { auth } = require('express-oauth2-jwt-bearer');
const { requiredScopes } = require('express-oauth2-jwt-bearer');

const port = process.env.PORT || 8080;

const jwtCheck = auth({
  audience: 'https://www.e-university.com',
  issuerBaseURL: 'https://dev-y2sv4gt201fu8n5i.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

// enforce on all endpoints
app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

app.get('/courses', requiredScopes('read:courses'), (req, res) => {
    res.json([
      { id: 1, title: 'Introduction to React' },
      { id: 2, title: 'Node.js Fundamentals' },
    ]);
  });

app.listen(port);

console.log('Running on port ', port);