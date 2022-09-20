const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const movieScheme = new mongoose.Schema(
    {
      title: {
        type: String,
        unique: true
      },
      year: {
        type: Number,
      },
      released: {
        type: String, 
      },
      genre: {
        type: String, 
      },
      director: {
        type: String, 
      },
      actors: {
        type: String, 
      },
      plot: {
        type: String, 
      },
      ratings: {
        type: Array, 
      }
    },
    {
      timestamps: true
    }
  );

  movieScheme.plugin(mongoosePaginate);

  module.exports = mongoose.model("movies", movieScheme);