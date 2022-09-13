const axios = require('axios')

exports.home = (req, res) => {
    axios.get('http://localhost:8000/api/products')
        .then(function (response) {
            res.render('index', { products: response.data })
        })
        .catch(err => res.send(err))
}

exports.products_create = (req, res) => res.render('create')

exports.products_edit = (req, res) =>{
    axios.get('http://localhost:3000/api/products/edit', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err => res.send(err))
}