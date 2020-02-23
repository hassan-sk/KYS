const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const root = require('./root/index')
const {PORT, SESSION_SECRET} = require('./config.json')
const passportConfiguration = require('./configurations/passport')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser())

app.listen(PORT, () => {
    console.log(`The server has been started\nThe server is listening on port: ${PORT}`)
    let data = passportConfiguration(app);
    root(data);
})