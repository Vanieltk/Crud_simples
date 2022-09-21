const express = require('express')
const routes = express.Router()

const Produtos_controller = require('./Controllers/Produtos_Controller')
const Usuario_Controller = require('./Controllers/Usuario_Controller')
const login = require("./middleware/Login")

routes.get('/produtolist', Produtos_controller.list)
      .post('/produtocreate', Produtos_controller.store)
      .put('/produtoupdate', Produtos_controller.update)
      .delete('/produtodel',Produtos_controller.delete)
      .get('/usuarios', Usuario_Controller.index)
      .post('/login', Usuario_Controller.login)
      .post('/usuarios', Usuario_Controller.create)

module.exports = routes