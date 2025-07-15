require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Schéma
const zbierkaSchema = new mongoose.Schema({
  id: Number,
  nazov: String,
  kategoria: String,
  popis: String,
  obrazok: String,
  sumaCiel: Number,
  sumaZiskana: Number,
  darcovia: [
    {
      id: Number,
      meno: String,
      priezvisko: String,
      sumaDarovana: Number,
    },
  ],
}, { collection: 'Zbierka' });

const Zbierka = mongoose.model('Zbierka', zbierkaSchema);

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: 'CharityCloud' });
    console.log('✅ Connected to MongoDB');

    // Vymažeme existujúce záznamy
    await Zbierka.deleteMany({});
    console.log('🗑️ Zbierka collection cleared');

    // Načítame dáta zo súboru
    const filePath = path.join(__dirname, 'seedData.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    await Zbierka.insertMany(data);
    console.log(`✅ Inserted ${data.length} zbierok`);

    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  } catch (err) {
    console.error('❌ Error seeding data:', err);
    process.exit(1);
  }
}

seed();
