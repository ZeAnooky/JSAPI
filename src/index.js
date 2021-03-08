const express = require('express');
const parser = require('body-parser');
const api = express()

api.use(express.static(__dirname + '/public'))
api.use(parser.json())

api.listen(3000, () => {
  console.log('API listening at https://JSAPI.jordanchesley.repl.co');
});

/*api.get('/', (req, res) => {
  res.send('Hello World!');
})*/

api.post('/add', (req, res) => {
  console.log("POST request to Add");
  console.log(req.body);
  res.send('Add request received!');
})