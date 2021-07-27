//chai es una libreria externa que permite validar la informacion de una variable mediante funciones
const chai = require('chai');

//plugin de chai, que le permite levantar servers y hacer calls http sobre estos servers
const chaiHttp = require('chai-http');

//Para poder hacer los test de endpoint, hay que llamar a donde esta ubicado el backend, que es el archivo app.js
//.app es para llamar al objeto que es el servidor.
const app = require('../app').app;

//para decirle a chai que se quiere usar el plugin http se le indica con la funcionalidad use
chai.use(chaiHttp);

//describe tiene la funcion de crear un mini entorno de pruebas en el que se le pueden meter otros entornos y test
describe('suite de prueba e2e', ()=>{

    //"done" es una forma de decirle a mocha que el test se ha acabado. Primero se le pasa como callback, y mas adelante se le indica cuando finalizar
    //sirve paara las cosas de asincronia que tiene JS
    it('devuelve "hola mundo"', (done) =>{

        //aqui se le dice a chai que use el servidor que esta definido en el archivo
        chai.request(app)

            //Aqui se esta diciendo que haga la llamada http al servidor usando el protocolo indicado
            .get('/')

            //recoje una funcion que le permite interactuar con el resultado de la llamada
            .end((err, res) => {
                chai.assert.equal(res.text, 'hola mundo')

                //la funcion done finaliza el test
                done();
            });
    });
        
});