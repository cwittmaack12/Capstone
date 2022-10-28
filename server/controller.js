const { response } = require('express')
const path = require('path')
const axios = require('axios')
let newLists = []
let nextID = 1

module.exports = {

    getHTML: (req,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    }, 

    getCSS:  (req, res) => {
        res.sendFile(path.join(__dirname, '../public/styles.css'))
    },   

    getJS:  (req, res) => {
        res.sendFile(path.join(__dirname, '../public/main.js'))
    },

    addListItem: (req,res) => {
        const {item} = req.body
        let newList = {
            id: nextID,
            item
        }
        nextID++
        newLists.push(newList)
        console.log(newLists)
        res.status(200).send(newLists)
    },
    deleteListItem: (req, res) => {
        let { id } = req.params
        let position = newLists.findIndex(obj => +obj.id === +id)
        console.log(id)
    
        newLists.splice(position, 1)
        res.status(200).send(newLists)
    },
    getZen: (req,res) => {
        let url = "https://zenquotes.io/api/random" ;
        axios.get(url)
            .then(response => {
            res.status(200).send(response.data)
                    })
            .catch(err => {
                console.log(err)
            })
        
    },
    getWeather: (req, res) => {

    }
    
}






