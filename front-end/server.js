const express = require('express');
const app = express();
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

const HOST = argv.host || process.env.HOST || '0.0.0.0';
const PORT = argv.port || process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at ${HOST}:${PORT}`);
});
