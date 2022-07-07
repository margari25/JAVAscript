const infoArray = [
    {
        name: 'Kazkas',
        description: 'informacija apie kazka',
    },
    {
        name: 'Kazkas1',
        description: 'informacija apie kazka1',
    },
    {
        name: 'Kazkas2',
        description: 'informacija apie kazka2',
    },
    {
        name: 'Kazkas3',
        description: 'informacija apie kazka3',
    },
    {
        name: 'Kazkas4',
        description: 'informacija apie kazka4',
    },
    {
        name: 'Kazkas5',
        description: 'informacija apie kazka5',
    },
    {
        name: 'Kazkas6',
        description: 'informacija apie kazka6',
    },
]

const listElement = document.getElementById('list');

function renderList() {
    infoArray.map((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;

        const tooltip = document.createElement('div');
        tooltip.textContent = item.description;
        tooltip.style.display = 'none';
        listItem.appendChild(tooltip)

        listItem.addEventListener('mouseenter', () => {
            tooltip.style.display = 'block';
        })

        listItem.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        })

        listElement.appendChild(listItem);
    })
}

renderList();

// ____________________________________________________

const input = document.getElementById('input');
const validationElement = document.getElementById('validation');

input.addEventListener('keyup', (event) => {
    if (event.target.value !== 'Labas') {
        validationElement.textContent = "Text should be 'Labas'"
    } else {
        validationElement.textContent = "Done";
    }
})


// ____________________________________________________


const loginElement = document.getElementById('login');

function login() {
    document.cookie = 'asdtrue';
}

if (document.cookie) {
    loginElement.style.display = 'none';
}