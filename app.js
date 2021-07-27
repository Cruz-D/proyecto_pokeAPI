//se importa la libreria de express con un require
const express = require('express');

//se importa la libreria de passport con un require
const passport = require('passport');

//se define la variable que va a tener las capacidades de usar las funcionalidades de express
const app = express();

//se define el puerto de conexion que va usar express
const port = 3000;

//se llama a la funcion que comprueba las autenticaciones
require('./auth')(passport);

//se llama al objeto listen de la const app para empezar escuchar conexiones, sino se ejecutaria
//y acabaria cerrandose, despues se abren llaves a metodo de funcion callback para que realice acciones
//iniciar el server.
app.listen(port, () => {
    console.log('El servidor ha empezado en el puerto ' + port);
})

//esta funcion es una peticion get que se puede lanzar desde la constante que almacena 
//las funcionalidades de express. "req" => request y "res" => response
app.get('/', (req, res) => {

    //con la funcionalidad ".send" se le devuelve al cliente una respuesta a la peticion
    res.status(200).send('hola mundo');
});

app.post('/login', (req, res) => {
    res.status(200).json(
        { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o' }
    )
});


app.get('/team',
    //al usar esta ruta se verificara quien la use posea un JWT, es un middleware
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        res.status(200).send('hola mundo');

    });

app.post('/team/pokemons', (req, res) => {
    res.status(200).send('hola mundo');
});

app.delete('/team/pokemons/:pokeid', (req, res) => {
    res.status(200).send('hola mundo');
});

app.put('/team', (req, res) => {
    res.status(200).send('hola mundo');
});


module.exports.app = app;