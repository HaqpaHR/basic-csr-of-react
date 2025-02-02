import express from 'express';
import renderer from './helper/renderer';

const app = express();

const port = 3001;

app.use(express.static('dist'));

app.get('*', (req, res) => {
  const content = renderer(req);

  res.send(content);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});