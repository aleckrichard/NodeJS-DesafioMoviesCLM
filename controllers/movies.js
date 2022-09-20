const Movie = require("../models/movies")
const axios = require("axios");

const getAllMovies = async (ctx) => {
 const { page } = ctx.request.query;
 try {
 const DataAllMovies = await Movie.paginate({}, {limit:5, page: page})
 ctx.body = DataAllMovies
} catch (err) {
  ctx.body = { message: err };
    }
}

const getMovieFromOmdbApi= async (ctx) => {
  try {
    let DataMovie = [];
    const API_KEY = process.env.API_KEY
    const { searchMovie } = ctx.request.query;
    const searchYear = ctx.request.headers.year;

    if (searchMovie !== '') {
      await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${searchMovie}&y=${searchYear}`).then((res) => {
        DataMovie.push(res.data);
      });
      await Movie.findOne({ title: DataMovie[0].Title });

      const newMovie = new Movie({
        title: DataMovie[0].Title,
        year: DataMovie[0].Year,
        released: DataMovie[0].Released,
        plot: DataMovie[0].Plot,
        actors: DataMovie[0].Actors,
        genre: DataMovie[0].Genre,
        director: DataMovie[0].Director,
        ratings: DataMovie[0].Ratings
      });
      await newMovie.save();
      ctx.body = newMovie;
    } else {
      ctx.error = 303;
      ctx.body = {
        message: "Ingrese una pelicula y año",
      };
    }

  }  catch (err) {
    ctx.body = { message: err };
      }
};

module.exports = { getMovieFromOmdbApi , getAllMovies};