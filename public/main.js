////Adding items to to-do list/////
const addForm = document.querySelector('.toDoForm')
const inputItem = document.querySelector('.textBox')
const container = document.querySelector('.itemList')



const createList = array => {
    container.innerHTML = ''
    let newList = document.createElement('ul')
    array.forEach(listObj => {
        let { item, id } = listObj
        let listItem = document.createElement('li')
        let deleteButton = document.createElement('button')
        let listText = document.createElement('span')

        listItem.id = id
        listText.textContent = item
        deleteButton.textContent = 'Delete'
        ///deleteButton below is the right one?  Seems to be.
        deleteButton.addEventListener('click', deleteListItem)
        
        listItem.appendChild(listText)
        listItem.appendChild(deleteButton)
        newList.appendChild(listItem)
    })
    container.appendChild(newList)
}

function addToList(evt) {
    evt.preventDefault();
    container.innerHTML = ''
    let inputObj = {item: inputItem.value}
    axios
        .post('/api/list', inputObj)
        .then(res => {
            console.log(res)
            let { data } = res
            createList (data)             
        })
        .catch(err => console.log(err))
}

const liTags = document.querySelectorAll('li')

const deleteListItem = (evt) =>{
    evt.preventDefault()
    let toDoID = evt.target.id

    axios
        /////added colon in here which seemed to make delete work
        .delete(`/api/list/:${toDoID}`)
        .then(res => {
            let { data } = res
            createList(data)
        })
        .catch(err => console.log(err))
}


addForm.addEventListener('submit', addToList)

///get Zen//


 const getZen = () => {
     axios.get('/api/list')
     .then(res => {
         let { data } = res
         getZen(data)
     }) 
     .catch(err => console.log(err))
 }














