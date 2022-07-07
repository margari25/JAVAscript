class person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;

    }

}
const person1 = new person('Jonas', 'Jonaitis')
console.log(person1)

// ====================================


class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calcArea() {
        return this.width * this.height
    }
}
const rectangle1 = new Rectangle(15, 5);
console.log(rectangle1);
console.log(rectangle1.calcArea())

// ==========================================


class Animal {
    constructor({ age, name }) {
        this.age = age;
        this.name = name;
    }
    speak() {
        console.log('Generic animal sound');
    }

}

class dog extends Animal {
    constructor({ age, name, sound }) {
        super({ age, name })
        this.type = 'dog';
        this.sound = sound;
    }
    speak() {
        console.log(this.sound)
    }
}

class terrier extends dog {
    constructor({ age, name, sound }) {
        super({ age, name, sound })
        this.breed = 'terrier';
    }
}

const animal1 = new Animal({ age: 3, name: 'Lilis' })
const dog1 = new dog({ age: 3, name: 'Lilis', sound: 'barks' })
const terrier1 = new terrier({ age: 3, name: 'Lilis', sound: 'barks' })

console.log(animal1);
console.log(dog1);

animal1.speak();
dog1.speak();


// ===========================


class ToDoList {
    constructor() {
        this.list = document.getElementById('list');
        this.toDo = [];
        this.update();
    }
    add(text) {
        this.toDo.push(text);
        this.update();
    }
    update() {
        this.list.innerHTML = '';

        for (let text of this.toDo) {
            const listItem = document.createElement('li');
            listItem.textContent = text;
            this.list.appendChild(listItem);
        }
    }
    delete(value) {
        if (this.toDo.indexOf(value) > -1)
            this.toDo.splice(this.toDo.indexOf(value), 1);
        this.update();
    }
}

const input = document.getElementById('input');
const addButton = document.getElementById('add');
const deleteButton = document.getElementById('delete');

const newList = new ToDoList({ array: [] });

addButton.onclick = () => newList.add(input.value);
deleteButton.onclick = () => newList.delete(input.value)