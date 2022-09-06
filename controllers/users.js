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
    // 1) encrypt: hash/sale req.body.password
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    // 2) save the user with the hashed/ salted password
    User.create(req.body, (err, user) => {
    // 3) redirect the user to the books index
        req.session.userId = user._id
        console.log(req.session);
        res.redirect('/books');
    });
});

// GET Login
router.get('/login', (req, res) => {
    res.render('users/login.ejs', { error: null });
});

// POST Login
router.post('/login', (req, res) => {
    // 1) Lookup user by username
    User.findOne({ username: req.body.username }, (err, foundUser) => {
        // 1.1) if the user doesnt exist alert the client the credentials are wrong
        if(!foundUser) return res.render('users/login.ejs', {
            error: 'Incorrect Username or Password'
        });
        // 2) compare the plaintext password to the hashed salted password
        const isMatch = bcrypt.compareSync(req.body.password, foundUser.password);
        // 3) If the password doesn't match let the client know their credentials are wrong
        if(!isMatch) return res.render('users/login.ejs', {
            error: 'Incorrect Username or Password'
        });
        // 3.1) If the password matches, create a session and 
        //    redirect the user to the books index page and 
        //    send a session cookie
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