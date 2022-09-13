class Database {
    products = [
        {
            'name': 'Товар 1',
            'media': 'img/test.jpg',
            'status': 'Active',
            'price': '8900',
            'description': 'Smth',
        },
    ]

    get get_list() {
        return Database.products
    }
}

module.exports = Database
