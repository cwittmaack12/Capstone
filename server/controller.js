const path = require('path')
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
        res.status(200).send(newLists)
    },
    deleteListItem: (req, res) => {
        let { id } = req.params
        let position = newLists.findIndex(obj => obj.id === +id)
        /////could i bring in req.body and use newLists.splice(newLists.indexOf(item),1) instead?
        //or///////////////////////
        //let colors = ['red', 'blue', 'green'];
        //let index_element_to_be_delete = colors.indexOf('green');
        //colors.splice(index_element_to_be_delete); 
        newLists.splice(position - 1 , 1)
        res.status(200).send(newLists)
        ////would it work to increment the nextID back???//
    },
    getZen: (req,res) => {

    },
    getWeather: (req, res) => {

    }
    
}






