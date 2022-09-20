# Desafío MovieNode Challenge!

_Proyecto MovieNode Challenge que busca resolver un desafío mediante API REST con NodeJS y MongoDB, el cuál fue propuesto por CLM Digital Solutions como parte del proceso técnico de selección de talentos_

### Pre-requisitos 📋

_NPM, NodeJS, Koa Server,MongoDB, Mongoose_

### Deploy 🔧

_Mediante Docker_


```
docker build -t node-restapi .
```
```
docker run -it -p 3000:3000 node-restapi
```

_Mediante NPM_

```
npm run dev
```
_Se ejecutará en el puerto 3000_

_Ir al navegador y abrir la URL: http://localhost:3000_

### Métodos GET 

_Buscar Peliculas en la Base de datos de MongoDB_
  ```
  /getAllMovies?page={NumeroPagina}
  ```
_Buscar Peliculas en la API de OMDb y almacenarla en la Base de datos de MongoDB_

  ```
  /getMovieOmdb?searchMovie={NombrePelicula}&searchYear={AñoPelicula}
  ```

## Construido con 🛠️

* [NodeJS](https://nodejs.org) - Lenguaje de Programación
* [MongoDB](https://www.mongodb.com) - Sistema de base de datos No Relacional
* [Mongoose](https://mongoosejs.com) - ORM para MongoDB
* [Koa JS](https://koajs.com) - Framework para NodeJS

---
⌨️ con ❤️ por [aleckrichard](https://github.com/aleckrichard) 😊