const express = require('express')
const app = express()
const cors = require('cors')

const {
    getHTML,
    getCSS,
    getJS,
    addListItem,
    deleteListItem,
    getZen,
    getWeather

} = require('./controller')

app.use(express.json())
app.use(cors())
app.use(express.static ('public'))

app.get('/', getHTML)
app.get('/styles', getCSS)
app.get('/js', getJS)
app.post('/api/list', addListItem)
app.get('/api/zen', getZen)
app.get('/api/weather/:zip', getWeather)
app.delete('/api/list/:id', deleteListItem)



const port = process.env.PORT || 5050

app.listen(port, () => {console.log(`Listening on port ${port}`)

})












