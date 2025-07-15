const mongoose = require('mongoose');

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
    }
  ]
}, { collection: 'Zbierka' });  // tu explicitne nastavíš názov kolekcie

const Zbierka = mongoose.model('Zbierka', zbierkaSchema);

module.exports = Zbierka;
