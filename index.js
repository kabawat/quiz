const express = require('express')
const app = express()
const port = 2917
const cors = require('cors')
const quiz = require('./quiz')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.get('/', (req, res) => {
    res.send('welcome')
})
app.get('/quiz', (req, res) => {
    console.log(quiz)
    res.send(quiz)
})
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})