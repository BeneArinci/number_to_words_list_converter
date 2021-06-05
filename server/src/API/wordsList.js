const { Router } = require('express');

const router = Router();

router.get('/', async (req, res, next) => {
  res.json({
    message: 'it works',
  });
});

module.exports = router;
