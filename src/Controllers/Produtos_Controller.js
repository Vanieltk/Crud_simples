module.exports = {
    async list(req, res) {
        res.send('listar Produto!')

    },
    async store(req, res) {
        res.send('Produto salvo!')

    },

    async update(req, res) {
        res.send('Produto alterado!')

    },

    async delete(req, res) {
        res.send('Produto deletado!')

    }
}