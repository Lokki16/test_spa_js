const axios = require('axios')

exports.home = (req, res) => {
    axios.get('http://localhost:8000/products')
        .then((response) => {
            res.render('index', { products: response.data })
        })
        .catch(err => res.send(err))
}

exports.productsCreate = (req, res) => res.render('create')

exports.productsEdit = (req, res) => {
    axios.get('http://localhost:3000/products/edit', { params : { id : req.query.id }})
        .then((productdata) => {
            res.render('edit', { product : productdata.data})
        })
        .catch(err => res.send(err))
}
