const { Router } = require('express');
const numbersToWordsConverter = require('../models/convertNumbersToWordsList');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const numberToConvert = req.query.number;
    const wordsList = numbersToWordsConverter(numberToConvert);
    res.json({
      data: [...wordsList],
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
