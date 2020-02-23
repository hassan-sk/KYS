

const entryRoutes = require('./routes/entryRoutes');

module.exports = ({app, passport}) => {

    entryRoutes(app, passport);

}