const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

// GET Signup
router.get('/signup', (req, res) => {
    res.render('users/signup.ejs');
});

// POST Signup
router.post('/signup', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (err, user) => {
        req.session.userId = user._id
        console.log(req.session);
        res.redirect('/wishlist');
    });
});

// GET Login
router.get('/login', (req, res) => {
    res.render('users/login.ejs', { error: null });
});

// POST Login
router.post('/login', (req, res) => {
    User.findOne({ username: req.body.username }, (err, foundUser) => {
        if(!foundUser) return res.render('users/login.ejs', {
            error: 'Incorrect Username or Password'
        });
        const isMatch = bcrypt.compareSync(req.body.password, foundUser.password);
        if(!isMatch) return res.render('users/login.ejs', {
            error: 'Incorrect Username or Password'
        });
        req.session.userId = foundUser._id;
        res.redirect('/wishlist');
    });
        
    
    
})

// GET Logout
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

module.exports = router;