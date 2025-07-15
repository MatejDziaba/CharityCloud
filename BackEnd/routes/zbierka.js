const express = require('express');
const router = express.Router();
const Zbierka = require('../models/Zbierka'); // správna cesta k modelu

// GET /api/zbierka
router.get('/', async (req, res) => {
  try {
    const zbierky = await Zbierka.find();
    res.json(zbierky);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Chyba servera' });
  }
});

router.get('/projekty', async (req, res) => {
  try {
    const { nazov } = req.query;
    const query = nazov ? { nazov: { $regex: nazov, $options: 'i' } } : {};
    const zbierky = await Zbierka.find(query);
    res.json(zbierky);
  } catch (err) {
    console.error('Chyba servera:', err);
    res.status(500).json({ error: 'Chyba servera' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { nazov, kategoria, popis, obrazok, sumaCiel } = req.body;

    if (!nazov || !popis || !sumaCiel) {
      return res.status(400).json({ error: 'Názov, popis a cieľová suma sú povinné.' });
    }

    // Najdi max id v zbierke, ak žiadna nie je, začni od 1
    const lastZbierka = await Zbierka.findOne().sort({ id: -1 });
    const newId = lastZbierka ? lastZbierka.id + 1 : 1;

    const novaZbierka = new Zbierka({
      id: newId,
      nazov,
      kategoria: kategoria || '',
      popis,
      obrazok: obrazok || '',
      sumaCiel,
      sumaZiskana: 0,
      darcovia: [],
    });

    const ulozenaZbierka = await novaZbierka.save();
    res.status(201).json(ulozenaZbierka);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Nepodarilo sa pridať zbierku' });
  }
});

// PUT - aktualizácia zbierky
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nazov, kategoria, popis, obrazok, sumaCiel, sumaZiskana } = req.body; // ← PRIDANÉ

  try {
    const updated = await Zbierka.findOneAndUpdate(
      { id: Number(id) },  // vyhľadáva podľa id
      { nazov, kategoria, popis, obrazok, sumaCiel, sumaZiskana }, // ← PRIDANÉ
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Zbierka sa nenašla.' });
    }

    res.status(200).json(updated);
  } catch (err) {
    console.error('Chyba pri update:', err);
    res.status(500).json({ message: 'Chyba pri aktualizácii zbierky.' });
  }
});


// DELETE /api/zbierka/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Zbierka.findOneAndDelete({ id: Number(id) });

    if (!deleted) {
      return res.status(404).json({ message: 'Zbierka sa nenašla.' });
    }

    res.status(200).json({ message: 'Zbierka bola úspešne vymazaná.' });
  } catch (error) {
    console.error('Chyba pri vymazaní zbierky:', error);
    res.status(500).json({ message: 'Chyba pri vymazaní zbierky.' });
  }
});

// GET darcovia pre jednu zbierku podľa zbierkaId
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    const zbierka = await Zbierka.findOne({ id: Number(id) });

    if (!zbierka) {
      return res.status(404).json({ error: 'Zbierka nenájdená' });
    }

    res.json({
      sumaCiel: zbierka.sumaCiel,
      darci: zbierka.darcovia || []
    });
  } catch (error) {
    console.error('Chyba pri načítaní darcov:', error);
    res.status(500).json({ error: 'Chyba servera pri načítaní darcov' });
  }
});


module.exports = router;
