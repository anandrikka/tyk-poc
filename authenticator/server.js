// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cookieParser());

// Sample users (for demo purposes)
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
];

// Secret key for JWT
const JWT_SECRET = 'your-secret-key';

// Authentication middleware
function authenticate(req, res, next) {
    // Check if there's a JWT token in the cookie
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = decoded;
        next();
    });
}

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET);
    res.cookie('gateway_token', token, { httpOnly: true });
    res.json({ message: 'Login successful' });
});

// Protected API endpoints
app.get('/api/v1/users', (req, res) => {
  const token = jwt.sign({ id: '1', username: '2' }, JWT_SECRET);
  res.cookie('gateway_token', token, { httpOnly: true });
  res.json({ data: 'Protected data' });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
