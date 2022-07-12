const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Digite um ID válido para busca!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const personagem = req.body;
  if (!personagem || !personagem.nome || !personagem.linkFoto) {
    return res.status(404).send({
      message: 'Esta Faltando dados! Por favor Preecha TUDO corretamente',
    });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
