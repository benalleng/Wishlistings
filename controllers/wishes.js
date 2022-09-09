const express = require('express');
const router = express.Router();
const Wish = require('../models/wish');

// INDEX
router.get('/seed', (req, res) => {
    const data = require('../data.json');

    Wish.deleteMany({}, (err, result) => {
        Wish.insertMany(data, (err) => {
            res.redirect('/wishlist');
        });
    });
});

// router.get('/', (req, res) => {
//     Wish.find({}, (err, wishes) => {
//         res.render('list/index.ejs', {wishes: wishes});
//     });
// });

// NEW
router.get('/new', (req, res) => {
    res.render('list/new.ejs');
});

// DELETE
router.delete('/:id', (req, res) => {
    Wish.findByIdAndDelete(req.params.id, (err, deletedWish) => {
        console.log('deletedWish');
        res.redirect('/wishlist');
    });
});

// UPDATE
router.put('/:id', (req, res) => {
    req.body.isPurchased = !! req.body.isPurchased;

    Wish.findByIdAndUpdate(req.params.id, req.body, (err, wishBeforeUpdate) => {
        console.log('Errors: ' + err);
        res.redirect('/wishlist');
    });
});

router.put('/:id/buy', (req, res) => {
    req.body.isPurchased = !! req.body.isPurchased;
    
    Wish.findByIdAndUpdate(req.params.id, req.body, (err, wishBeforeBuy) => {
        console.log('Errors: ' + err);
        res.redirect('/wishlist');
    });
});


// CREATE
router.post('/', (req, res) => {
    req.body.isPurchased = !! req.body.isPurchased;
    
    Wish.create(req.body, (err, createdWish) => {
        console.log('Errors: ' + err);
        res.redirect('/wishlist');
    });
});

// EDIT
router.get('/:id/edit', (req, res) => {
    Wish.findById(req.params.id, (err, foundWish) => {
        res.render('list/edit.ejs', { wish: foundWish });
    });
});

// SHOW
router.get('/:id', (req, res) => {
	Wish.findById(req.params.id, (err, foundWish) => {
		res.render('list/show.ejs', { wish: foundWish });
	});
});

module.exports = router;

