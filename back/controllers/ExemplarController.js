import Exemplar from "../models/Exemplar.js";

//Regras de Negócios
// MVC -> Model, View, Controller

async function listar (req, res) {
  const dados = await Exemplar.findAll();
  return res.json(dados);
}

async function selecionar (req, res) {
  const idexemplar = req.params.id;
  const dados = await Exemplar.findByPk(idexemplar);
  return res.json(dados);
}

async function excluir (req, res) {
  const idexemplar = req.params.id;
  const dados = await Exemplar.destroy({ where: { idexemplar: idexemplar } });
  return res.json(dados);
}

async function inserir (req, res) {
  const idobra = req.body.idobra;
  const status = req.body.status;

  const dados = await Exemplar.create({ 
    idobra: idobra,
    status: status 
  });

  return res.json(dados);
}

async function alterar(req, res) {
    const idexemplar = req.params.id;
    const idobra = req.body.idobra;
    const status = req.body.status;

    const dados = await Exemplar.update({ idobra: idobra, status: status }, {
        where: { idexemplar: idexemplar }
    });
    return res.json(dados);
}

export default { listar, selecionar, excluir, inserir, alterar };
