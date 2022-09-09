const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const User = require('./models/user')
require('dotenv').config();
const wishesRouter = require('./controllers/wishes');
const usersRouter = require('./controllers/users');
const PORT = process.env.PORT;
const DATABASE_URI = process.env.DATABASE_URI;
const db = mongoose.connection;
const expressSession = require('express-session');
app.use(express.static('public'));
const Wish = require('./models/wish');
const $ = require('jquery');

mongoose.connect(process.env.MONGODB_URI);
mongoose.connect(DATABASE_URI);
db.on('connected', () => console.log('Connected to MongoDB'));
db.on('error', (err) => console.log('MongoDB Error: ' + err.message));

app.use(express.urlencoded({ extended: false}));
app.use(methodOverride('_method'));
app.use(expressSession({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: false
}));

app.use(async (req, res, next) => {
    if(req.session.userId) {
        const user = await User.findById(req.session.userId);
        const admin = Boolean;
        req.user = user;
        req.user.isAdmin = admin;
        res.locals.user = user.username;
    } else {
        res.locals.user = null;
        req.user = null;
    }
    next();
});

function isAuthenticated(req, res, next) {
    if(!req.user) return res.redirect('/login');
    next();
};

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/wishlist', (req, res) => {
    Wish.find({}, (err, wishes) => {
        res.render('list/index.ejs', {wishes: wishes});
    });
});

app.use(usersRouter);
app.use('/wishlist/', isAuthenticated, wishesRouter);


app.listen(process.env.PORT, () => {
    console.log(`Express is listening on port: ${PORT}`);
});