const { v4: uuidv4 } = require('uuid')

let products = [{
            'name': 'Товар 1',
            'media': 'img/test.jpg',
            'status': 'Active',
            'price': '8900',
            'description': 'Smth',
        },]

exports.getProducts = (req, res) => {
    res.send(products)
}

exports.createProduct = (req, res) => {
    const product = req.body;
    products.push({...product, id: uuidv4()})
}

exports.getProduct = (req, res) => {
    res.send(req.params.id)
}

exports.deleteProduct = (req, res) => {
    products = products.filter((user) => user.id !== req.params.id)
}

exports.updateProduct = (req, res) => {
    products.find((product) => product.id === req.params.id)
}
