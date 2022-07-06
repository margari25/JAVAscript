//Assign

const me = {
    name: 'Marg',
    age: 77,
    greetMe: () => console.log('Labas, Margarita')
}
const backendData = me;

me.gender = 'female';
console.log(me)  //{name: 'Marg', age: 77, gender: 'female'}

const moreOfMe = {
    height: 171,
    weight: 61
}

const newMe = Object.assign(me, moreOfMe)
console.log(newMe) //{name: 'Marg', age: 77, gender: 'female', height: 171, weight: 61}

me.greetMe(); //Labas, Margarita

//keys method

console.log(Object.keys(newMe))// brings key list

//values method

const finance = {
    q1: 150,
    q2: 200,
    q3: 120,
    q4: 230,
}
const financeSum = Object.values(finance).reduce((a,b) => a + b);
console.log(financeSum) // 700

//entries

const entries = Object.entries(newMe)
console.log('entries', entries)
// (6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// 0: (2) ['name', 'Marg']
// 1: (2) ['age', 77]
// 2: (2) ['greetMe', ƒ]
// 3: (2) ['gender', 'female']
// 4: (2) ['height', 171]
// 5: (2) ['weight', 61]

//from entries

console.log('fromEntries', Object.fromEntries(entries))

// switch - the same as "if" statement
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }