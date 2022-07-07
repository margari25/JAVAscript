let data = JSON.parse(localStorage.getItem('Array')) || [];
const setItem = () => localStorage.setItem('Array', JSON.stringify(data));
const allTheExpences = document.getElementById('allTheExpences');
let today = new Date();
today = today.toISOString().slice(0, 10);


let currentPage = 1;
let rowsInPage = 5;

function addToTable(array) {

    const tableData = array.map(function (item) {
        return (
            `<tr>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.date}</td>
            <button onclick="deleteBtn('${item.id}')">delete</button> 
            <button onclick="editBtn('${item.id}')">edit</button> 
        </tr>`

        );
    }).join('');

    allTheExpences.innerHTML = tableData;
}


function editBtn(param) {
    let item = data.filter(item => item.id === param)[0];
    const popup = document.createElement('dialog')
    popup.open = true;

    const input1 = document.createElement('input')
    input1.value = item.name;

    const input2 = document.createElement('input')
    input2.value = item.quantity;

    const save = document.createElement('button')
    save.textContent = 'SAVE';

    const cancel = document.createElement('button')
    cancel.textContent = 'CANCEL';


    save.onclick = () => {
        item.name = input1.value;
        item.quantity = input2.value;
        item.date = today

        change();
        allTheExpences.removeChild(popup);
    }

    cancel.onclick = () => {
        allTheExpences.removeChild(popup);
    }

    popup.appendChild(input1);
    popup.appendChild(input2);
    popup.appendChild(save);
    popup.appendChild(cancel);

    allTheExpences.appendChild(popup);

    setItem();
}

function deleteBtn(param) {
    data = data.filter(item => item.id !== param);
    setItem();
    change();
}


function putInData() {
    const nameInput = document.getElementsByClassName('name')[0];
    const quantityInput = document.getElementsByClassName('quantity')[0];

    const newInput = {
        id: nameInput.value + quantityInput.value,
        name: nameInput.value,
        quantity: quantityInput.value,
        date: today
    }
    data.push(newInput);

    setItem();

    change();

    nameInput.value = '';
    quantityInput.value = '';

}

// SORTING=======================
let order = false;

function sortByAbc() {
    order = !order
    data.sort((a, b) => {
        if (order) {
            return a.name.localeCompare(b.name)
        } else {
            return b.name.localeCompare(a.name)

        }
    })
    change();
};

function sortByNumber() {
    order = !order
    data.sort((a, b) => {
        if (order) {
            return a.quantity - b.quantity
        } else {
            return b.quantity - a.quantity
        }
    })
    change();
};

// PAGINATION====================================


function change() {
    let page = currentPage
    let btnNext = document.getElementById("nextPage");
    let btnPrev = document.getElementById("prevPage");
    let pageSpan = document.getElementById("page");
    if (page < 1) page = 1;
    if (page > pagesInTotal()) page = pagesInTotal();

    let min = currentPage * rowsInPage;
    let max = currentPage * rowsInPage - rowsInPage;

    const paginatedData = data.filter((_, index) => index <= min & index > max);
    allTheExpences.innerHTML += data.index;

    pageSpan.innerHTML = page + '/' + (pagesInTotal());
    if (page == 1) {
        btnPrev.style.visibility = "hidden";
    } else {
        btnPrev.style.visibility = "visible";
    }
    if (page == pagesInTotal()) {
        btnNext.style.visibility = "hidden";
    } else {
        btnNext.style.visibility = "visible";
    }

    addToTable(paginatedData);
}

function pagesInTotal() {
    return Math.ceil(data.length / rowsInPage);
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        change();
    }
}

function nextPage() {
    if (currentPage < pagesInTotal()) {
        currentPage++;
        change();
    }
}

change();

function buildTotalRow() {
    const rowElement = document.createElement('tr');

    for (let item of items) {
        const dataCellElement = document.createElement('td');
        dataCellElement.classList.add('fw-bold');

        // if (item === 'name') {
        //     dataCellElement.textContent = `Simboliu suma ${getCharacterNamesLengthSum()}`
        // }

        // if (item === 'height' || item === 'mass') {
        //     dataCellElement.textContent = getCharacterPropertySum(item);
        // }

        rowElement.appendChild(dataCellElement);
    }

    allTheExpences.appendChild(rowElement);
}