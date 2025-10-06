const express = require('express');
const cors = require('cors');
require('dotenv').config();
const estimateRoute = require('./routes/estimate');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/estimate', estimateRoute);

app.listen(5000, () => console.log('Server running on port 5000'));
