const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.listen(3000, function(){
	console.log('Server started on port 3000');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/css/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../css/styles.css'));
});

// TODO: Double check for XSS vulnerability
app.post('/index.html', (req, res) => {
  console.log(req.body);
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;
  res.send(`The result of the calculation is ${result}`);
});
