const Personagem = require('../models/Personagem');

const findAllPersonagensService = async () => {
  const personagens = await Personagem.find();

  return personagens;
};

const findByIdPersonagemService = async (idParam) => {
  const personagem = await Personagem.findById(idParam);
  return personagem;
};

const createPersonagemService = async (newPersonagem) => {
  const createPersonagem = await Personagem.create(newPersonagem);
  return createPersonagem;
};

const updatePersonagemService = async (id, personagemEdited) => {
  const personagemUpdate = await Personagem.findByIdAndUpdate(
    id,
    personagemEdited,
  ).setOptions({ returnOriginal: false });
  return personagemUpdate;
};

const deletePersonagemService = async (id) => {
  return await Personagem.findByIdAndDelete(id);
};

module.exports = {
  findAllPersonagensService,
  findByIdPersonagemService,
  createPersonagemService,
  updatePersonagemService,
  deletePersonagemService,
};
