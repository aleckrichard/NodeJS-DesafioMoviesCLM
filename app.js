require("dotenv").config()
const Koa = require('koa');
const koaBody = require('koa-body');
const json = require('koa-json');
const mongoose = require('mongoose');
const router = require('./routes');

const PORT = process.env.PORT
const ENDPOINT = process.env.DB_URI

const app = new Koa();

mongoose.connect(ENDPOINT);

mongoose.connection.on('error', (err) => {
  console.log(err);
});

app.use(koaBody())
app.use(router())
app.use(json())

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  },
  (err, res) => {
      if(!err){
          console.log('Conectado a Mongo')
      }else{
          console.log('Error de conexion')
      }
  });
};

dbConnect()

