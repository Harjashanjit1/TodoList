
  // const body = document.getElementById('body')

  // const btn = document.querySelector('#addTodo')

  const text = document.getElementById('addTodoItem')
  const todoList = document.getElementById('todoList')
  const todoForm = document.getElementById('todoForm')
  
  


  
let countLi = 0

var dtb = localStorage.getItem('mydb')
if(dtb)
{
 dtb = JSON.parse(dtb)
}
else
{
 mydb = []
}

let keyNumber = 0
const add = (a) => {
 a.preventDefault()
 
 if(!text.value)
 {
  return
 }
 
    const itemContent = text.value
     mydb = []
     mydb.push(itemContent)
     
    // let todos = get_todos()
    // todos.push(task)
    localStorage.setItem('keyNumber', JSON.stringify(mydb))
    keyNumber = keyNumber + 1
    text.value= ''
    one()
 
    
}
todoForm.addEventListener('submit',add)
 

// btn.addEventListener('click', one)
// one()
// function get_todos() {
//     let todos = new Array
//     let todos_str = localStorage.getItem('todo')
//     if (todos_str !== null) {
//         todos = JSON.parse(todos_str)
//     }
//     return todos
// }

 function one(text)
 {
  const ol = document.querySelector('ol')
  
  // ol.innerHTML=" "
  for(let i=0;i<localStorage.length;i++)
  {
  // let todos = get_todos()
  const li = document.createElement('li')

const btn1 = document.createElement('button')
let key = localStorage.key(i)
let item = JSON.parse(localStorage.getItem(key))
btn1.textContent= "delete"
li.textContent = item
li.id= 'li'+countLi
countLi = countLi+1
btn1.addEventListener('click', deletel)
li.addEventListener('click', () => 
{
 var sheet = document.createElement('style')
 
sheet.innerHTML = "#" + li.id + " {color: red; text-decoration: line-through;}"
 document.body.appendChild(sheet)
}
)
li.addEventListener('dbclick', () =>
{
 var sheet = document.createElement('style')
 
sheet.innerHTML = "#" + li.id + "{color: black; text-decoration:none}"
 document.body.appendChild(sheet)
})
ol.appendChild(li)
    
	
    li.appendChild(btn1)}}
// countLi = countLi+1
// li.id = 'li' + countLi
// li.id = 'ki1' 

const deletel = (a) => {
 let liTarget = a.target.parentElement
 let idTarget = liTarget.getAttribute('id')
 todoList.removeChild(liTarget)
 localStorage.removeItem(idTarget)
}

const done = (a) => {
 var selfTarget = a.currentTarget
 selfTarget.classList.toggle('done')
 
}
one()

//  var sheet = document.createElement('style')
//   sheet.innerHTML= "ol li{color: black; text-decoration:none}"
    
//     // sheet.innerHTML = "ol li:nth-child(odd) {background: #DAE8F2;}"
   
//     document.body.appendChild(sheet)
    
	
    
   
    

//     li.addEventListener('click', () =>
// {
//  // const id = document.querySelector('1')
 
//  var sheet = document.createElement('style')
 
// sheet.innerHTML = "#" + li.id + " {color: red; text-decoration: line-through;}"
//  document.body.appendChild(sheet)



    
// })
//   document.getElementById(li.id).oncontextmenu = function() {

//   var sheet = document.createElement('style')
 
// sheet.innerHTML = "#" + li.id + "{color: black; text-decoration:none}"
//  document.body.appendChild(sheet)


// }

// btn1.addEventListener('click', () =>
// {
//  var sheetToBeRemoved = document.getElementById(li.id);
// var sheetParent = sheetToBeRemoved.parentNode;
// sheetParent.removeChild(sheetToBeRemoved);
// arr()
// })


//  }
 
//  function arr()
//  {
  
//   let array = []
  
//   const li1 = document.getElementsByTagName('ol')
  
//   let array1 = []
  
//   array1 = array.push(JSON.stringify(li1))
//   console.log(array1)
  
//  }
 
 

// btn.addEventListener('click', () => {var sheetToBeRemoved = document.getElementByName('style');
// var sheetParent = sheetToBeRemoved.parentNode;
// sheetParent.removeChild(sheetToBeRemoved);})
// // let countLi=0
// // function get_todos() {
// //     let todos = new Array
// //     let todos_str = localStorage.getItem('todo')
// //     if (todos_str !== null) {
// //         todos = JSON.parse(todos_str)
// //     }
// //     return todos
// // }
 
// // function add() {
// //     let task = document.getElementById('addTodoItem').value
 
// //     let todos = get_todos()
// //     todos.push(task)
// //     localStorage.setItem('todo', JSON.stringify(todos))
 
// //     show()
 
// //     return false
// // }
 
// // function remove() {
// //     let id = this.getAttribute('id')
// //     let todos = get_todos()
// //     todos.splice(id, 1)
// //     localStorage.setItem('todo', JSON.stringify(todos))
   
 
// //     show()
 
// //     return false
// // }
 
// // function show() {
// //     let todos = get_todos()
 
// //     let html = '<ol>'
// //     for(let i=0; i<todos.length; i++) {
// //         html += '<li class="lists" id="li' + i  + '">' + todos[i] + '<button class="remove" id="' + i  + '">delete</button></li>'
// //     };
// //     html += '</ol>'
 
// //     document.getElementById('todoDiv').innerHTML = html
 
// //     let buttons = document.getElementsByClassName('remove')
// //     for (let i=0; i < buttons.length; i++) {
// //         buttons[i].addEventListener('click', remove)
// //     }
// //     let lists = document.getElementsByClassName('lists')
// // for (let i=0; i < lists.length; i++)
// // {
// //   lists[i].addEventListener('click', change)
// // }
// // }

// // function change()
// // {
// // var sheet = document.createElement('style')
 
// //  sheet.innerHTML = "#li" + countLi + " {color: red; text-decoration: line-through;}"
// //  document.body.appendChild(sheet)
// //  countLi=countLi+1;
// // }
 
// // document.getElementById('addTodo').addEventListener('click', add)

// // show()


