const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const zbierkaRoutes = require('./routes/zbierka');  // správna cesta

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { dbName: 'CharityCloud' })
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Dôležité: používať správnu cestu k route
app.use('/api/zbierka', zbierkaRoutes);

// Pridaj jednoduchý root endpoint pre test
app.get('/', (req, res) => {
  res.send('Server beží');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

