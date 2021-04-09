const express = require('express');
const app = express();

// metodo de la aplicacion
//app.listen(numero de puerto);

// es comun manejar el puerto del servidor desde una constante
const PORT = 3000;

//request contiene la informacion de peticio de un cliente
//response contiene todo lo necesario para constestarle a un cliente
app.get('/', (request, response) => {
    response.send('¡Hola Mundo!');
  });

// para que nuestro servidor empiese a escuchar peticiones debemos ejecutar el metodo listen.
app.listen(PORT, () => console.log(`listening on port ${PORT}`));