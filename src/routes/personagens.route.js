const route = require('express').Router();
const controllerPersonagens = require('../controllers/personagens.controller');
const {
  validId,
  validObjectBody,
} = require('../middlewares/personagens.middlewares');

route.get(
  '/all-personagens',
  controllerPersonagens.findAllPersonagensController,
);
route.get(
  '/personagem/:id',
  validId,
  controllerPersonagens.findByIdPersonagemController,
);
route.post(
  '/create',
  validObjectBody,
  controllerPersonagens.createPersonagemController,
);
route.put(
  '/update/:id',
  validId,
  validObjectBody,
  controllerPersonagens.updatePersonagemController,
);
route.delete(
  '/delete/:id',
  validId,
  controllerPersonagens.deletePersonagemController,
);

module.exports = route;
