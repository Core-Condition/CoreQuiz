const express = require('express');
const encryption = require('./encryption')
const codegen = require('./codegen')
const app = express();


app.get('/', (req, res) => {
  res.type('html')
  res.send('hi <a href="api/connect">hi<a>')
});
app.get('/api/connect', (req, res) => {
  res.status(404)
}

app.get('/api/connect/:num', (req, res) => {
  const num = req.params.num
   const key = encryption.encrypt(JSON.stringify({hi: "hi"}), num)
  res.json({ connectionKey: key, id: num})
  console.log(JSON.parse(encryption.decrypt(key, num)))
  
});

app.listen(3000);

