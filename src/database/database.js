const mongoose = require('mongoose');
const connectDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/personagens', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb conectado!!!'))
    .catch((error) => console.log('Erro ao conectar o MongoDb conectado!!!'));
};

module.exports = connectDatabase;
