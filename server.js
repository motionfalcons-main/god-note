const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

const buildPath = path.join(__dirname, 'compiled-cloud');
const indexPath = path.join(buildPath, 'index.html');

// Check if build directory exists
if (!fs.existsSync(buildPath)) {
  console.error('Error: compiled-cloud directory not found. Please run "npm run build" first.');
  process.exit(1);
}

// Serve static files from the compiled-cloud directory
app.use(express.static(buildPath));

// Handle React Router - serve index.html for all routes
app.get('*', (req, res) => {
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('index.html not found. Please ensure the build completed successfully.');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Serving files from: ${buildPath}`);
});

