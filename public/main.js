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

        //listItem.id = id
        deleteButton.id = id
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

const addToList = (evt) => {
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


const deleteListItem = (evt) =>{
    evt.preventDefault()
    let toDoID = evt.target.id
    console.log(toDoID)
    axios 
        .delete(`/api/list/${toDoID}`)
        .then(res => {
            let { data } = res
            createList(data)
        })
        .catch(err => console.log(err))
}

addForm.addEventListener('submit', addToList)

///get Zen//

const quote = document.querySelector('.quote')

const addZen = (zenObject) => {
    let{h} = zenObject
    let zenBlock = document.createElement('p')
    zenBlock.innerHTML = h
    quote.appendChild(zenBlock)
}


const getZen = () => {
     axios.get('/api/zen')
     .then(res => {
         let { data } = res
         console.log(data)
         addZen(data[0])
     }) 
     .catch(err => console.log(err))
 }

getZen()

///////////////// Get Weather ///////////////////////









