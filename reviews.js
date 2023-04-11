const reviews = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');



reviews.get('/reviews', (req, res) => {
    const reviews = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json(reviews);
});

reviews.post('/reviews', (req, res) => {
    const reviews = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    const id = uuidv4();
    const newReview = req.body;
    newReview.id = id;
    reviews.push(newReview);
    fs.writeFileSync('./db/db.json', JSON.stringify(reviews));
    res.json(newReview);
});

// potential delete function
reviews.delete('/reviews/:id', (req, res) => {
    const id = req.params.id;
    let reviews = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    reviews = notes.filter(review => review.id !== id);
    fs.writeFileSync('./db/db.json', JSON.stringify(reviews));
    res.json(reviews);
});

module.exports = reviews;