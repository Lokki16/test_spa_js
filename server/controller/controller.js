var Database = require('../database/db')

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Content cannot be empty!' })
        return
    }

    Database.products.push({
        'name': req.body.name,
        'media': req.body.media,
        'status': req.body.status,
        'price': req.body.price,
        'description': req.body.description
    })
}

exports.find = (req, res) => {

}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {

}
