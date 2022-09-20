# RetoPeliculasNode
**Desafio MovieNode Challenge!**

**Iniciar la Aplicacion**

Mediante Docker:<br />
<ul>
<li>docker build -t node-restapi . <br />
<li>docker run -it -p 3000:3000 node-restapi<br /></li>
</ul>

 Mediante NPM:<br />
  <ul>
<li>npm run dev<br /></li>
</ul>
  Se ejecutara en http://localhost:3000<br /><br />

  **Metodos GET**<br />
<ul>
<li>Buscar Peliculas en la Base de datos de MongoDB<br />
  /getAllMovies?page={NumeroPagina}</li><br />

<li>Buscar Peliculas en la API de OMDb y almacenarla en la Base de datos de MongoDB<br />
/getMovieOmdb?searchMovie={NombrePelicula}&searchYear={AñoPelicula}</li>
</ul>
