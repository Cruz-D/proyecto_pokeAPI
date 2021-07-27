const passport = require('passport');
//chai es una libreria externa que permite validar la informacion de una variable mediante funciones
const chai = require('chai');

//plugin de chai, que le permite levantar servers y hacer calls http sobre estos servers
const chaiHttp = require('chai-http');

//Para poder hacer los test de endpoint, hay que llamar a donde esta ubicado el backend, que es el archivo app.js
//.app es para llamar al objeto que es el servidor.
const app = require('../app').app;

//para decirle a chai que se quiere usar el plugin http se le indica con la funcionalidad use
chai.use(chaiHttp);

describe('Suite de pruebas Auth', () => {

    it('devuelve 401 cuando el usuario no esta autorizado', (done) => {

        //aqui se le dice a chai que use el servidor que esta definido en el archivo
        chai.request(app)

            //Aqui se esta diciendo que haga la llamada http al servidor usando el protocolo indicado
            .get('/team')

            //recoje una funcion que le permite interactuar con el resultado de la llamada
            .end((err, res) => {

                //se comprueba que la respuesta se igual que el codigo de status http 
                chai.assert.equal(res.status, 401);

                //se finaliza el test
                done();
            });
    });

    it('devuelve 200 cuando el token jwt es valido', (done) => {

        //aqui se le dice a chai que use el servidor que esta definido en el archivo
        chai.request(app)

            //Aqui se esta diciendo que haga la llamada http al servidor usando el protocolo indicado
            .post('/login')

            //recoje una funcion que le permite interactuar con el resultado de la llamada
            .end((err, res) => {

                //una vez en el post que recoje el token, se vuelve a lanzar otra vez chai para hacer otra
                //peticion a un get y comprobar el token
                chai.request(app)

                    .get('/team')

                    //se le envia un header para realizar la comprobacion JWT
                    .set('Authorization', `jwt ${res.body.token}`)

                    .end((err, res) => {

                        //si el token es valido se  recibe un 200
                        chai.assert.equal(res.status, 200);

                        //se finaliza el test
                        done();
                    });
            });
    });
});