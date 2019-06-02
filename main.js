





document.getElementById('btn').addEventListener('click', function() {
    var todo = document.getElementById("todo").value
    if (todo != "") {
      var container = document.getElementById('todo-container')
    
    var newTodo = document.createElement('li')
    newTodo.innerText = todo
    
    var RemoveBtn = document.createElement('button')
    RemoveBtn.innerText = 'Remove'
    RemoveBtn.addEventListener ('click', function () {
      
      container.removeChild(newTodo);
    })
    container.appendChild(newTodo)
    newTodo.appendChild(RemoveBtn)
    }
  })