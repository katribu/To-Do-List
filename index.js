const mainContainer = document.getElementById('main')
let myToDos = []

function renderToDo(){
    let listItems = myToDos.map((todo,todoIndex) => {
        let itemClass = todo.completed ? 'done' : "";
        return `<li id = '${todoIndex}' class = '${itemClass}'>${todo.text}</li>` 
    })
    
    mainContainer.innerHTML = `
    <h1>To Do</h1>
    <input name = "task" type = "text" placeholder = "Write task" id = "taskInput" class = "input">
    <button id = "addTask">Add Task</button>
    <button id = "clearList"> Clear List</button>
    <div id = "container" class = "postStyle">
    <ul id = "taskList">
    ${listItems.join('')}
    </ul> 
    </div>`
    
    
    const completeListItem = document.getElementById('taskList')
    completeListItem.addEventListener('click', function(event){
        const todoIndex = event.target.id
        myToDos[todoIndex].completed = !myToDos[todoIndex].completed
        renderToDo()
    })
    
    const addTaskBtn = document.getElementById('addTask')
    const taskInput = document.getElementById('taskInput')
    addTaskBtn.addEventListener("click", addTask)
    
    function addTask(){
        let newTodo = taskInput.value
        if(!newTodo){
            return;
        }
        else if(newTodo){
            newTodo.value = ""
            myToDos.push({
                text: newTodo,
                completed: false,
            })           
        }               
        renderToDo() 
        
    }
    
    const taskContainer = document.getElementById('container')
    const clearList = document.getElementById('clearList')
    clearList.addEventListener('click', function() {
        taskContainer.innerHTML = "";
        taskInput.value = "";
        myToDos = [];
    })
    
    
}

renderToDo()


        
        








