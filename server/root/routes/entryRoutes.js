/* Routes here
- login
- register
- logout

*** also includes authorization middleware

*/

module.exports = (app, passport) => {

    app.post('/login', passport.authenticate('local'), (req, res) => {
        // accepts only two parameters, username and password
        res.send('done')
    })

    app.post('/register', (req, res) => {
        //put here the registeration
    })

    app.post('/logout', (req, res) => {
        req.logout()
        res.send('logged out')
    })

    app.use((req, res, next) => {
        if (req.user === undefined){
            res.send("error");
        } else {
            next();
        }
    })

}