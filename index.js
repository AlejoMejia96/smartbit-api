const { conn } = require('./src/db.js');
const server = require('./src/app.js');
//comentario test
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
  console.log("DB connected");
});