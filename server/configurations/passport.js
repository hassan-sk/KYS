const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var cookieSession = require('cookie-session')

const {SESSION_SECRET} = require('../config.json')


module.exports = (app) => {

    app.use(cookieSession({ 
        key    : "sessionKey",
        secret : SESSION_SECRET,
        cookie : {
            maxAge: 1000000
        }
        }));
    
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy((username, password, done) => {
        // check user availability here
        // return done(null, false, { message: 'Incorrect username.' });     
        return done(null, username);
      }
    ));
    // hehe
    passport.serializeUser((user, done) => {
        done(null, user);
    });
      
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    
    return {app, passport}

}