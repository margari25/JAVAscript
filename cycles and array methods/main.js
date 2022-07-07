// Issitrautki visi elementai
const toDoList = document.getElementById('todo');
const doneList = document.getElementById('done');
const inputElement = document.getElementById('input');
const addButton = document.getElementById('addButton');

// Susikuriam array kuriam talpinsim dar nepadarytus tasks
let todoArray = ['Learn HTML', 'Learn CSS', 'Learn Javascript'];
// Susikuriam array kuriam talpsinsim padarytus tasks
let doneArray = ['Rest'];

// Prideti nauja user ivesta task i todo
function addTodo() {
    // Susikuriam kintamaji kuriam prisiskiriam input value vardan patogesnio naudojimo veliau funkcijoj
    const value = inputElement.value;
    // Kintamasis kuris yra musu veliau naudojama salyga, patikrina ar value nera tuscias arba jis jau yra todo array
    const isValueEmptyOrExisting = value == '' || todoArray.includes(value);

    // Panaudojam salygini kintamaji ir ji invertuojam
    if (!isValueEmptyOrExisting) {
        // I todoArray pridedam input value
        todoArray.push(value);
        // Nuresetinam input value
        inputElement.value = '';
        // Kvieciam funkcija kuri updatina musu html
        updateLists();
        // Jei pavyksta uzdedama ant mygtuko zalia spalva ir nuimama raudona
        addButton.classList.remove('btn-danger');
        addButton.classList.add('btn-success');
    } else {
        // Jei nepavyksta uzdedama ant mygtuko raudona spalva ir nuimama zalia
        addButton.classList.remove('btn-success');
        addButton.classList.add('btn-danger');
    }
}

// Atnaujina musu html
function updateLists() {
    // Pries dedant naujus items isvalom senus
    toDoList.innerHTML = '';
    doneList.innerHTML = '';
    // Kvieciam funkcija kuri sudelioja mum html ir onclickus
    transferItems(doneArray, todoArray, doneList);
    transferItems(todoArray, doneArray, toDoList);
}

// kiekvienam listui pridedam ju turima data ir kiekvienam item uzdedam onclick
// from array is kurio on click noresim issimt item
// to array i kuri noresim isimta item ideti
// list html elementas kur turetu isideti musu 'li' elementai
function transferItems(from, to, list) {
    // Sukam cikla per "from" array
    for (let i = 0; i < from.length; i++) {
        // Susikuriam javascript objekta kuris yra li elementas
        const listItem = document.createElement('li');
        // Priskiriam teksta prie li elemento
        listItem.textContent = from[i];

        // Vykdom kazka ant li elemento paspaudimo
        listItem.onclick = () => {
            // I norima array i idedam item kuri iskerpam is kito array, [0] 
            to.push(from.splice(i, 1)[0]);
            // atnaujina html su nauja data
            updateLists();
        }

        // I musu saraso elementa prideda 'li' vaikus
        list.appendChild(listItem);
    }
}

// Pirmam html piesimui kvieciam funkcija kad atsirastu musu items;
updateLists();

