const koaRouter = require('koa-router')
const combineRouters = require('koa-combine-routers')
const {  getMovieFromOmdbApi, getAllMovies} = require("../controllers/movies")

const routerMovie = new koaRouter()

routerMovie.get('/getMovieOmdb', getMovieFromOmdbApi);

const router = combineRouters(routerMovie)

routerMovie.get("/getAllMovies", getAllMovies) 

module.exports = router; 
