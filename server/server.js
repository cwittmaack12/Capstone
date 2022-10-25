const express = require('express')
const app = express()
const cors = require('cors')


app.use(express.json())
app.use(cors())









app.listen(5050, console.log(`Server up on port ${5050}`))














