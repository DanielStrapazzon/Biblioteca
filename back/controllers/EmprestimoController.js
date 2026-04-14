import Emprestimo from "../models/Emprestimo.js";

//Regras de Negócios
// MVC -> Model, View, Controller

async function listar (req, res) {
  const dados = await Emprestimo.findAll();
  return res.json(dados);
}

async function selecionar (req, res) {
  const idemprestimo = req.params.id;
  const dados = await Emprestimo.findByPk(idemprestimo);
  return res.json(dados);
}

async function excluir (req, res) {
  const idemprestimo = req.params.id;
  const dados = await Emprestimo.destroy({ where: { idemprestimo: idemprestimo } });
  return res.json(dados);
}

async function inserir(req,res) {
    try {
        const idexemplar = req.body.idexemplar;
        const idusuario = req.body.idusuario;
        const emprestimo = req.body.emprestimo;
        const vencimento = req.body.vencimento;
        const devolucao = req.body.devolucao;

        await Emprestimo.create({
            idexemplar,
            idusuario,
            emprestimo,
            vencimento,
            devolucao
        });

        res.json("Empréstimo criado com sucesso.");

    } catch (erro) {
        res.status(500).json({ erro: "Erro ao criar empréstimo " + erro});
    }
};

async function alterar(req, res) {
    const idemprestimo = req.params.id;
    const idexemplar = req.body.idexemplar;
    const idusuario = req.body.idusuario;
    const emprestimo = req.body.emprestimo;
    const vencimento = req.body.vencimento;
    const devolucao = req.body.devolucao;

    const dados = await Emprestimo.update({ idexemplar: idexemplar, idusuario: idusuario, 
      emprestimo: emprestimo, vencimento: vencimento, devolucao: devolucao }, { 
        where: { idemprestimo: idemprestimo }
    });
    return res.json(dados);
}

export default { listar, selecionar, excluir, inserir, alterar };
