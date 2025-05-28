const express = require('express');
const bcrypt = require('bcrypt');
const logger = require('./logger'); // Import logger

const app = express();

app.use(express.json());

app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    logger.warn('Missing email or password in registration'); // Log warning
    return res.status(400).send('Email and password required');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    logger.info(`User registered with hashed password: ${hashedPassword}`);
    // Normally you would save email and hashedPassword to DB
    res.status(201).send(`User registered with hashed password: ${hashedPassword}`);
  } catch (err) {
    logger.error('Error hashing password', err);
    res.status(500).send('Error hashing password');
  }
});

app.listen(4000, () => {
  logger.info('Application started on port 4000');
  console.log('Server running on port 4000');
});



