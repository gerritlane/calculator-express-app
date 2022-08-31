const express = require('express');
const app = express();
const path = require('path');
app.listen(3000, function(){
	console.log('Server started on port 3000');
});

app.get('/', (req, res) => {
	// res.send(__dirname + '/../')
  res.sendFile(path.join(__dirname, '../index.html'));
  // res.sendFile(path.join(__dirname, '../css/styles.css'));
});

app.get('/css/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../css/styles.css'));
});