//chai es una libreria externa que permite validar la informacion de una variable mediante funciones, en este caso se importa la funcion assert
const assert = require('chai').assert;

//es una variable proporcionada por la libreria externa de mocha, que sirve para hacer tests de la app.
//describe tiene la funcion de crear un mini entorno de pruebas en el que se le pueden meter otros entornos y test

describe('Suite de prueba para el proyecto', () => {

    //la forma de definir estos entornos es usando el parametro 'it' que proporciona mocha
    it('Debe devolver 2', () => {

        //en este bloque se definiria las comprobaciones para realizar el test
        let va = comprobarTest(3, 2);
        assert.equal(va, 5);

    });
    //se pueden ir concatenando its unos debajo de otros dentro de describe
});

//esto es una funcion de prueba para el test
function comprobarTest (a, b){

    return a+b;
}


//para ejecutar el test se puede escribir ".\node_modules\.bin\mocha" lo que viene a ser la ruta de la libreria
//o bien el "package.json" poner esa ruta en la parte de "test", pero cambiando las barra laterales inversas por normales
//----//
//https://mochajs.org/
//https://www.chaijs.com/
