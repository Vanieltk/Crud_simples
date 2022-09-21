const Usuario = require('../models/Usuario')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

module.exports = {

    async index(req, res) {
        try {
            const usuarios = await Usuario.find({})

            return res.status(200).json(usuarios);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async create(req, res) {
        const { nome, senha } = req.body

        try {
            const hash = bcrypt.hashSync(senha, 12);
            const novousuario = User.create({ nome, senha: hash })
            return res.status(200).json(novousuario);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async login(req, res) {
        const { nome, senha } = req.body;

        if (!nome || !senha) {
            res.status(400).json({ erro: "Login ou senha incorretos" });
            return;
        }
        try {

            const dados = await Usuario.findOne({ nome });

            if (!dados) {
                res.status(400).json({ erro: "Login ou senha incorretos" });
                return;
            }

            if (bcrypt.compareSync(senha, dados.senha)) {

                const token = jwt.sign({
                    usuario_id: dados.id,
                    usuario_nome: dados.nome
                }, process.env.JWT_KEY,
                    {
                        expiresIn: "6h"
                    }
                )

                res.status(200).json({ nome: dados.nome, token });
            } else {
                res.status(400).json({ erro: "Login ou senha incorretos" });
            }
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    },
}