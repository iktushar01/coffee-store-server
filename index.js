const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Coffee server is getting hotter like you')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})