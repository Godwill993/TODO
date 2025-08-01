
document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const descriptionInput = document.getElementById('description');
    const todoList = document.getElementById('todo-list');
    const countDisplay = document.getElementById('count');
    const counter = document.getElementById('counter');
    const block = document.getElementById('todoo');
    const show = document.getElementById('button')
    let cont = 0;
    const close = document.getElementById('closeButton');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const todoText = todoInput.value.trim();
        const descriptionText = descriptionInput.value.trim();
        const span = document.createElement('span');
        if (todoText) {
            const li = document.createElement('li');
            li.innerHTML = `
                     <input type = "checkbox" class = "checkbox">
                     <span class="todo-text">${todoText}</span>
                     <button class="edit-btn"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                     <button class="delete-btn id="decrement"><i class="fa fa-trash" aria-hidden="true"></i></button>
                    `
            cont++;
            counter.textContent = cont;
            ;
            todoList.appendChild(li);
            todoInput.value = '';
        }
    });

    todoList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
            cont--;
            counter.textContent = cont;
        } else if (e.target.classList.contains('edit-btn')) {
            const todoText = e.target.parentElement.querySelector('.todo-text');
            const newText = prompt('edit your todo', todoText.textContent);
            if (newText !== null) {
                todoText.textContent = newText;
            }
        } else if (e.target.classList.contains('checkbox')) {
            
            const todoText = e.target.nextElementSibling;
            li.style.backgroundColor = 'rgba(144, 238, 144, 0.68)';

        }
    });

    let overLay = document.createElement('div');
    show.addEventListener('click', () => {
        block.style.display = 'block'
     
     document.body.append(overLay);
     overLay.style.display = 'flex'
     overLay.style.position ='fixed'
     overLay.style.top ='0'
     overLay.style.bottom ='0'
     overLay.style.left = '0'
     overLay.style.right ='0'
     overLay.style.backgroundColor = 'rgba(45, 44, 44, 0.63)'
     overLay.style.backdropFilter = 'blur(10px)'
     overLay.style.zIndex ='12'

    });
    close.addEventListener('click', ()=>{
      block.style.display = 'none' 
     overLay.style.display = 'none'

    })
    console.log(show)
});
