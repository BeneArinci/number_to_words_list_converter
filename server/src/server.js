const app = require('./index');

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listening at 'htttp://localhost:${port}`);
});
