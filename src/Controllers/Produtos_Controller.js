const Produto = require('../models/Produto')

module.exports = {
    async list(req, res) {
        try {
            const produto = await Produto.find({})

            return res.status(200).json(produto);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }

    },
    async store(req, res) {
        const { nome } = req.body
        try {
            const produtonovo = Produto.create({ nome })
            return res.status(200).json(produtonovo);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async update(req, res) {
        const id = req.params.id;
        const nome2 = req.body

        Produto.findByIdAndUpdate(id, nome2, (err, ProdutoAtualizado) => {

            if (err) {
                res.status(500).send(err);
            }
            else if (ProdutoAtualizado) {
                return res.json(ProdutoAtualizado);
            }
            else {
                return res.status(404).json(
                    { Erro: "Produto nao encontrado" }
                )
            }
        })
    },

    async delete(req, res) {
        const id = req.params.id;
        Produto.findByIdAndDelete(id, (err, ProdutoDeletado) => {

            if (err) {
                res.status(500).send(err);
            }
            else if (ProdutoDeletado) {
                return res.json(ProdutoDeletado);
            }
            else {
                return res.status(404).json(
                    { Erro: "Produto nao encontrado" }
                )
            }
        })

    }
}