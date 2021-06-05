const express = require('express');

const app = express();

const port = process.env.PORT || 1551;

app.listen(port, () => {
  console.log(`listening at 'htttp://localhost:${port}`);
});
