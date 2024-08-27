const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const paymentRoutes = require('./routes/paymentRoutes.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());


// Use payment routes
app.use('/api/payment', paymentRoutes); 


app.get('/', (req, res) => {
  res.status(200).send('Server is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`FinGrid mock server running on http://localhost:${PORT}`);
});
