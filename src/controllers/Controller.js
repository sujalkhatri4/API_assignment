const Movie = require('../models/Movies');
const fs =require('fs');

//function to get all the files

exports.getMovies = async(req,res)=>{
    try{
        const movies = await Movie.find();
         res.status(200).json(movies);
    }
    catch(e){
            console.error(e);
            res.status(500).send('Error retrieving Movies');
    }
};

//Function to create a new movie
exports.createMovie = async(req,res)=>{
    try{
        const newMovie = new Movie(req.body);
        await newMovie.save();
         res.status(201).json(newMovie);
    }
    catch(e){
            console.error(e);
            res.status(500).send('Error creating Movies');
    }
};

