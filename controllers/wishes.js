const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// INDEX
router.get('/seed', (req, res) => {
    const data = require('../data.json');

    Book.deleteMany({}, (err, result) => {
        Book.insertMany(data, (err) => {
            res.redirect('/wishlist');
        });
    });
});

router.get('/', (req, res) => {
    Book.find({}, (err, books) => {
        res.render('list/index.ejs', {books: books});
    });
});

// NEW
router.get('/new', (req, res) => {
    res.render('list/new.ejs');
});

// DELETE
router.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id, (err, deletedBook) => {
        console.log('deletedBook');
        res.redirect('/wishlist');
    });
});

// UPDATE
router.put('/:id', (req, res) => {
    req.body.completed = !! req.body.completed;

    Book.findByIdAndUpdate(req.params.id, req.body, (err, bookBeforeUpdate) => {
        console.log('Errors: ' + err);
        res.redirect('/wishlist/' + req.params.id);
    });
});

// CREATE
router.post('/', (req, res) => {
    req.body.completed = !! req.body.completed;
    
    Book.create(req.body, (err, createdBook) => {
        console.log('Errors: ' + err);
        res.redirect('/wishlist');
    });
});

// EDIT
router.get('/:id/edit', (req, res) => {
    Book.findById(req.params.id, (err, foundBook) => {
        res.render('list/edit.ejs', { book: foundBook });
    });
});

// SHOW
router.get('/:id', (req, res) => {
	Book.findById(req.params.id, (err, foundBook) => {
		res.render('list/show.ejs', { book: foundBook });
	});
});

module.exports = router;

