let form = document.forms.notes
let inp = form.querySelector('input')
let list = document.querySelector('.list')
let todos = []

form.onsubmit = (e) => {
  e.preventDefault();
  
  let todo = {
    id: Math.random(),
    title: inp.value,
    time: new Date().getHours() + ":" + new Date().getMinutes(),
    isDone: false,
  }
  todos.push(todo)
  reload(todos)
}

function reload(arr) {
  list.innerHTML = ""

  for (let item of arr) {

    let item = document.createElement('div')
    let topDiv = document.createElement('div')
    let title = document.createElement('span')
    let buttonRemove = document.createElement('button')
    let timeSpan = document.createElement('span')
    
    item.classList.add('item')
    buttonRemove.classList.add('button_remove')
    timeSpan.classList.add('time')
    
    title.innerHTML = item.title
    buttonRemove.innerHTML = 'x'
    timeSpan.innerHTML = item.time
    
    item.append(topDiv, timeSpan)
    topDiv.append(title, buttonRemove)
    list.append(item)

    item.onclick = () => {
      let backBlack = document.createElement('div')
      let modal = document.createElement('div')
      let text = document.createElement('span')
      let inp = document.createElement('input')
      let buttonTrue = document.createElement('button')
      let buttonFalse = document.createElement('button')

      backBlack.classList.add('back_black')
      modal.classList.add('modal')
      inp.classList.add('inp_modal')
      buttonTrue.classList.add('btn_true')
      buttonFalse.classList.add('btn_false')

      text.innerHTML = 'Впишите изменения'
      buttonTrue.innerHTML = 'Save'
      buttonFalse.innerHTML = 'Cancel'
      backBlack.classList.remove('hide')

      body.insertBefore(backBlack)
      backBlack.append(modal)
      modal.append(text, inp, buttonTrue, buttonFalse)
    }
  }  
}  

