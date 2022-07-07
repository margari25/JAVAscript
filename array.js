const toDoList = document.getElementById('toDoList')
const doneList = document.getElementById('doneList')
const input3 = document.getElementById('input3')

let todoArray = ['learn', 'have a breakfast', 'clean'];
let doneArray = ['rest'];

toDoList.innerHTML = todoArray.join('<br>');

function updateLists() {
    doneList.innerHTML = ' ';
    toDoList.innerHTML = ' ';

    for (let index = 0; index < todoArray.length; index++) {
        const listElement = document.createElement('li');
        listElement.textContent = todoArray[index];
        listElement.onclick = () => {
            doneArray.push(todoArray.splice(index, 1));
            updateLists();
        }
        toDoList.appendChild(listElement);
    }

    for (let index = 0; index < doneArray.length; index++) {
        const listElement = document.createElement('li');
        listElement.textContent = doneArray[index];
        listElement.onclick = () => {
            todoArray.push(doneArray.splice(index, 1));
            updateLists();
        }
        doneList.appendChild(listElement);
    }
}
// for (let index = 0; index < todoArray.length; index++) {
//     toDoList.innerHTML += `<li>${todoArray[index]}<li>`
// }
// for (let index = 0; index < doneArray.length; index++) {
//     doneList.innerHTML += `<li>${doneArray[index]}<li>`
// }

// function transferDone() {
//     doneArray = todoArray.slice(0, 2);
//     todoArray = todoArray.splice(2, 1);
//     updateLists();
// }

function addTodo() {
    const value = input3.value;
    const isValueEmptyOrExisting = value == ' ' || todoArray.includes(value);

    if (!isValueEmptyOrExisting) {
        todoArray.push(input3.value);
        input3.value = ' '
        updateLists();
    }
}

updateLists();