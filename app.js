const express = require('express');
const path = require('path');

const app = express();

// Serve the zip file when requested
app.get('/download', (req, res) => {
  const filePath = path.join(__dirname, 'files', 'wad.zip');
  res.download(filePath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(500).send('Error downloading file');
    }
  });
});

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Zip Download API! Visit /download to get the ZIP file.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
