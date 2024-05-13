const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Protected API endpoints
app.get('/api/v1/posts', (req, res) => {
  res.json({ data: 'Posts' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});