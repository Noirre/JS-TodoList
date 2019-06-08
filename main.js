document.getElementById('btn').addEventListener('click', function () {
  var todo = document.getElementById("todo").value
  document.getElementById("todo").value = ""
  if (todo != "") {
    var todoList = document.getElementById('todo-list')

    var newTodo = document.createElement('li')
    newTodo.innerHTML = '<label>' + todo + '</lable>'

    var checkBox = document.createElement('input')
    checkBox.type = "checkbox"

    var RemoveBtn = document.createElement('button')
    RemoveBtn.innerText = 'Remove'
    RemoveBtn.addEventListener('click', function () {

      todoList.removeChild(newTodo);
    })
    todoList.prepend(newTodo)
    newTodo.prepend(checkBox)
    
    checkBox.addEventListener('change', function () {
      if (this.checked) {
        newTodo.childNodes[1].style.textDecoration = "line-through";
      } else {
        newTodo.childNodes[1].style.textDecoration = "";
      }
    });
    newTodo.appendChild(RemoveBtn)
    console.log(newTodo.childNodes[1])
  }
  document.getElementById('clear-btn').addEventListener('click', function () {
    var todoList = document.getElementById('todo-list')
    todoList.innerHTML = ''
  })
})



