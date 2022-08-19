const express = require('express')
const routes = express.Router()

const Produtos_controller = require('./Controllers/Produtos_Controller')

routes.get('/produtolist', Produtos_controller.list)
      .post('/produtocreate', Produtos_controller.store)
      .put('/produtoupdate', Produtos_controller.update)
      .delete('/produtodel',Produtos_controller.delete)

module.exports = routes