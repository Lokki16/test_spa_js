const express = require('express')
const bodyparser = require('body-parser')

const app = express()

const port = 8000

app.use(bodyparser.urlencoded({ extended : true }))

app.set('view engine', 'ejs')

app.use('/products', require('./server/router'))

app.listen(port, (error) => {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})
