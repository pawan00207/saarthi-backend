const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express(); // 🔥 Ye line important hai

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', routes);

// Start Server
app.listen(PORT, () => {
  console.log(`Saarthi Backend running on port ${PORT}`);
});
