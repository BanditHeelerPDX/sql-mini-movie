const movies = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');



movies.get('/movies', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json(notes);
});

movies.post('/movies', (req, res) => {
    const movies = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    const id = uuidv4();
    const newMovie = req.body;
    newMovie.id = id;
    movies.push(newMovie);
    fs.writeFileSync('./db/db.json', JSON.stringify(movies));
    res.json(newMovie);
});

// potential delete function
movies.delete('/movies/:id', (req, res) => {
    const id = req.params.id;
    let movies = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    movies = notes.filter(movie => movie.id !== id);
    fs.writeFileSync('./db/db.json', JSON.stringify(movies));
    res.json(movies);
});

module.exports = movies;