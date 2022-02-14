const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const leaderboard = require('./controllers/leaderboard');

const db = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    }
});

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Success');
});

// Sign-in
app.post('/signin', signin.handleSignin(db, bcrypt));

// Register
app.post('/register', register.handleRegister(db, bcrypt));

// Profile
app.get('/profile/:id', profile.handleProfileGet(db));

// Image
app.put('/image', image.handleImage(db));
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) });

// Leaderboard
app.get('/leaderboard', leaderboard.handleLeaderboard(db));

app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running on port ${process.env.PORT}`);
});