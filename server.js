const express = require('express');
const encryption = require('./encryption')
const app = express();
const db = require("quick.db")

app.get('/', (req, res) => {
  res.type('html')
  res.send('hi <a href="api/connect">hi<a>')
});
app.get('/api/connect', (req, res) => {
  res.send("hi2")
});
app.get('/api/start', (req, res) => {
  res.send("hi2")
});
app.get('/api/connect/:num', (req, res) => {
  const num = req.params.num
   const key = encryption.encrypt(JSON.stringify({hi: "hi"}), num)
  res.json({ connectionKey: key, id: num, test: JSON.parse(encryption.decrypt(key, num))})
});

module.exports = {
  start: function() {app.listen(3000)}
}

