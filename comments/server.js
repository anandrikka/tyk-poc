const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Protected API endpoints
app.get('/api/v1/comments', (req, res) => {
  res.json({ data: 'Comments' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});