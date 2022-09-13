const express = require('express')
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller')

route.get("/products", services.home)
route.get("/products/create", services.products_create)
route.get("/products/edit", services.products_edit)

route.post('/api/products', controller.create)
route.get('/api/products', controller.find)
route.put('/api/products/:id', controller.update)
route.delete('/api/products/:id', controller.delete)

module.exports = route
