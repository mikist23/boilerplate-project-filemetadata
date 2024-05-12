var express = require('express');
var cors = require('cors');
require('dotenv').config()
var multer = require('multer');

var app = express();
var upload = multer({ dest: 'uploads/' }); // Destination folder for file uploads


app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Handle file upload
app.post('/api/fileanalyse', upload.single('upfile'), function(req, res) {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
