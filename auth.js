//libreria importada para usar passport. Strategy se usa para crear una estrategia de autenticacion (eso creo)
const jwtStrategy = require('passport-jwt').Strategy;

const extractJwt = require('passport-jwt').ExtractJwt;

//Se exporta esta funcion a la que se le pasa passport por parametro
module.exports = passport => {

    //esto crearia un objeto JSON que seria la estrategia a utilizar
    const opts = {
        //esta linea especifica de donde se sacara el jwt en el momento de hacer la peticion
        jwtFromRequest: extractJwt.fromAuthHeaderWithScheme("JWT"),
        secretOrKey: 'secretPassword'
    }
    //aqui se indica a passport que use la estrategia creada anteriormente, y dentro se le mete una funcion
    //de resultado, para hacer comprobaciones
    passport.use(new jwtStrategy(opts,(decoded, done) =>{
        console.log('decoded jwt', decoded);
        return done(null, false);
    }));
}

