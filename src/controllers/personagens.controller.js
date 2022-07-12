const mongoose = require('mongoose');
const personagensService = require('../services/personagens.service');

const findAllPersonagensController = async (req, res) => {
  const allPersonagens = await personagensService.findAllPersonagensService();

  if (allPersonagens.length == 0) {
    return res.status(400).send({ message: 'Nenhum personagem cadastrado' });
  }
  res.send(allPersonagens);
};

const findByIdPersonagemController = async (req, res) => {
  const idParam = req.params.id;

  const chosenPersonagem = await personagensService.findByIdPersonagemService(
    idParam,
  );
  if (!idParam) {
    return res.status(404).send({
      message: 'Personagem não encontrado, verifiquei id no allPersonagens',
    });
  }

  res.send(chosenPersonagem);
};

const createPersonagemController = async (req, res) => {
  const personagem = req.body;
  const newPersonagem = await personagensService.createPersonagemService(
    personagem,
  );
  res.status(201).send(newPersonagem);
};

const updatePersonagemController = async (req, res) => {
  const idParam = req.params.id;
  const personagemEdited = req.body;
  const updatePersonagem = await personagensService.updatePersonagemService(
    idParam,
    personagemEdited,
  );
  res.send(updatePersonagem);
};

const deletePersonagemController = async (req, res) => {
  const idParam = req.params.id;
  await personagensService.deletePersonagemService(idParam);
  res.send({ message: 'personagem deletado com sucesso!!!' });
};

module.exports = {
  findAllPersonagensController,
  findByIdPersonagemController,
  createPersonagemController,
  updatePersonagemController,
  deletePersonagemController,
};
