const express = require('express')
const app = express()

const PORT = process.env.PORT ||  5051

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to my Express</h1>`)
})

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})