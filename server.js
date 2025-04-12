const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const geoip = require('geoip-lite');
const app = express();
const port = 3000;

const upload = multer({ storage: multer.memoryStorage() });

app.use(express.static(path.join(__dirname, 'public')));

const counterFilePath = path.join(__dirname, 'upload-counter.txt');
const logFilePath = path.join(__dirname, 'upload-log.txt');

// Funzione per registrare ogni upload
function logUpload(ip) {
  const timestamp = new Date().toISOString();
  const geo = geoip.lookup(ip);
  const country = geo?.country || 'Unknown';

  fs.readFile(counterFilePath, 'utf8', (err, data) => {
    let count = 0;
    if (!err && !isNaN(parseInt(data))) {
      count = parseInt(data);
    }
    count++;

    fs.writeFile(counterFilePath, count.toString(), err => {
      if (err) console.error('Error writing counter file:', err);
      else console.log(`Upload count updated: ${count}`);
    });

    const logEntry = `${timestamp} | Country: ${country} | Total uploads: ${count}\n`;
    fs.appendFile(logFilePath, logEntry, err => {
      if (err) console.error('Error appending to log file:', err);
    });
  });
}

// Ottiene IP reale anche se dietro proxy
app.set('trust proxy', true);

// Endpoint upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded');
  console.log('Received file:', req.file.originalname);

  const ip = req.ip;
  logUpload(ip);

  const output = `Processed content of: ${req.file.originalname}`;
  res.setHeader('Content-Disposition', 'attachment; filename="processed_' + req.file.originalname + '"');
  res.send(output);
});

// Endpoint download ZIP
app.get('/download-zip', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'sample.zip');
  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).send('File not found');
  }
});

// Endpoint stats
app.get('/stats', (req, res) => {
  if (fs.existsSync(logFilePath)) {
    const log = fs.readFileSync(logFilePath, 'utf8');
    res.setHeader('Content-Type', 'text/plain');
    res.send(log);
  } else {
    res.send('No uploads recorded yet.');
  }
});

app.listen(port, () => {
  console.log(`Bad takes cutter running at http://localhost:${port}`);
});
