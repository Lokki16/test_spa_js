const express = require('express')

const services = require('./render')
const controller = require('./controller')

const route = express.Router()

route.get('/products', services.home)
route.get('/products/create', services.productsCreate)
route.get('/products/edit', services.productsEdit)

route.get('/products', controller.getProducts)
route.post('/products/create', controller.createProduct)
route.get('/products/:id', controller.getProduct)
route.delete('/products/:id', controller.deleteProduct)
route.patch('/products/edit/:id', controller.updateProduct)

module.exports = route
