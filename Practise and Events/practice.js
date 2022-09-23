// 1 Zinom 3 data types, sukurti kintamuosius su tu data type reiksmem (string, number, boolean); 
let string = 'Asasdasdasd';
let number = 3;
let boolean = true
// 2 Veliau ismokome dar du (array ir object), susikurti kintamuosius siu tipu,
// abu tipai viduj turetu tureti bent 3 kazkokius duomenis
let array = [23, 23, 36, 46, 46]
let kazkas = {
    firstName: 'asd',
    lastName: 'kjmhn',
    age: 15
}
// 3 Atsidarius practice.html narsykleje, consoleje parasyti "Hello world"
// console.log('Hello world');
// 4 Atsidarius practice.html narsykleje, consoleje parasyti savo nurodyto string kintamojo reiksme
// console.log(string);
// 5 Susikurti funkcija kuri consoleje parasys jusu number tipo kintamaji puslapiui besikraunant
// 6 funkcijoje prideti salyga su jusu boolean kintamuoju jei true, paliekam number kintamojo console.log,
// else printinam string tipo kintamaji
function printNumber() {
    if (boolean) {
        console.log(number);
    } else {
        console.log(string);
    }
}
printNumber();

// 7 Sukurti nauja funkcija, kuri grazins 3cia reiksme is jusu array tipo kintamojo
function get3rdArrayValue() {
    return array[2];
}

// 8 consoleje atvaizduoti naujos funkcijos grazinta rezultata
console.log(get3rdArrayValue());

// 9 ideti nauja reiksme (nesvarbu kokia) i array tipo kintamaji naudodami array pridejimo metoda
array.push(100);
console.log(array)

// 10 Iskirpti pirma reiksme is array tipo kintamojo naudojant array isiemimo metoda
array.splice(0, 1);
console.log(array)

// 11 Parasyti cikla kuris consoleje parasys nuo skaicius 1 iki 10
for (let i = 1; i < 11; i++) {
    // console.log(i);
}

// 12 Naudojant map metoda pakeisti visas array tipo kintamojo reiksmes nuo 0, iki array.length
array = array.map((item, index) => item = index)
console.log(array);

// 13 Naudojant filter metoda grazinti tik skaicius kurie yra nelyginiai 
let filteredOdd = array.filter((number) => number % 2 == 1);
console.log(filteredOdd);

// 14 Pasirasyti nauja funkcija, kuri consoleje parasys jusu paduota parametra
function passParameter(param) {
    console.log(param);
}
passParameter('asfnlf naslasnk daklsdn alsd');

// 15 Suskurti nauja array su nersvarbu kokiais 5 skaiciais
const array2 = [12, 12, 12, 12, 12];

// 16 Pasirasyti nauja funkcija kuri naudojant viena is array metodu (reduce) consoleje parasys 
// naujai sukurto array suma
function getSum(param) {
    let sum = param.reduce((previous, current) => previous + current)
    console.log(sum);
}

// 17 Praplesti funkcija kad ji priimtu parametra ir iskviesti su array (is 12 uzduoties)
//  ir su naujuoju array, consoleje turetu matytis tiek vieno,
// tiek kito array sumos

getSum(array);
getSum(array2);

// 18 Consoleje parasyti objekto kintamojo savybiu (property/keys) reiksmes (values) atsikruose eilutese,
// (kiekveina savybe vis naujam console log)
Object.keys(kazkas).map((keys) => console.log(kazkas[keys]));

// // 19 Naudojant object metoda (Keleta kartu naudojom star wars table) grazinti nauja array su visom objekto savybem (keys/properties) ir atvaizduoti
// // consoleje

console.log(Object.keys(kazkas));

// // 20 Prie pradzioje nurodyto object tipo kintamojo prideti dvi naujas savybes viena is ju bus lygi jusu number tipo kintamajam,
// // o kita boolean tipo kintamajam

const darVienas = {
    metai: 65,
    arTikrai: boolean
}
const sulietiDuObjektai = Object.assign(kazkas, darVienas);

console.log(sulietiDuObjektai);
console.log(kazkas);
console.log(darVienas);

//  21 Suskurti nauja array ir i ji, naudojant for cikla,
//  ideti 5 jusu objekto tipo kintamuosius (turetu tureti is 20 uzduoties savybes ir reiksmes)
let array3 = [];

for (let i = 0; i < 5; i++) {
    array3.push(kazkas);
}
console.log(array3)

//  22 I html isideti mygtuka ant kurio paspaudus vykdytu nauja funkcija
//  ir consoleje atvaizduotu 21 uzduoties rezultata
function displayResults() {
    console.log(array3);
}
// // // 23 I html isideti input ir mygtuka ant kurio paspaudus consoleje parasys jusu ivesta input reiksme
// const input = document.getElementById('input');
// const array4 = [];
// function displayInputValue() {
//     if (!array4.includes(input.value) && input.value !== '') {
//         array4.push(input.value);
//         const newEntry = document.createElement('div');
//         newEntry.textContent = input.value;
//         displayElement.appendChild(newEntry);
//     }
//     console.log(array4);
// }
// // 24 I html prisideti papildoma elementa, kuriame paspaudus 23 uzduoties mygtuka dabar atvaizduos input reiskmes teksta (vietoj console.log)
const displayElement = document.getElementById('display');
// // 25 Praplesti mygtuko papsaudimo funkcija ir kiekviena ne vienoda reiskme prideti i nauja visu input reiksmiu array

// // 26 Atvaizduoti visas naujai pridetas input reiksmes vis naujam elemente viduj 24 uzduoties elemento

// // 27 Prideti prie salygos kad reiksme butu nauja, kad reiksme nebutu ir tuscia
