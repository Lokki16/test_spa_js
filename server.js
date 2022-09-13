const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')

const app = express()

const port = 8000

app.use(bodyparser.urlencoded({ extended : true }))

app.set('view engine', 'ejs')

app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))

app.use('/products', require('./server/routes/router'))

app.listen(port, (error) => {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})

