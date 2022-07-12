const mongoose = require('mongoose');

const personagemSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  linkFoto: {
    type: String,
    required: true,
  },
});

const personagem = mongoose.model('personagem', personagemSchema);

module.exports = personagem;
