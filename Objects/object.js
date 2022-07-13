//Assign

const me = {
  name: 'Marg',
  age: 77,
  greetMe: () => console.log('Labas, Margarita'),
  hobby: ['programuoja', 'moko programuot']
}
const backendData = me;

console.log(me.hobby[0]);

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
const financeSum = Object.values(finance).reduce((a, b) => a + b);
console.log(financeSum) // 700

//entries

const entries = Object.entries(newMe)
console.log('entries', entries)
// (6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// 0: (2) ['name', 'Marg']
// 1: (2) ['age', 77]
// 2: (2) ['greetMe', ƒ]
// 3: (2) ['gender', 'female'
// 4: (2) ['height', 171]
// 5: (2) ['weight', 61]

//from entries

console.log('fromEntries', Object.fromEntries(entries))

// map cycle example
const mapExample = [1, 2, 3, 4, 5];

mapExample.map((item) => {
  console.log(item);
})

const arr = ['a', 'b', 'c', 'd', 'e'];
const iterator = arr.values();
for (const letter of iterator) {
  console.log(letter);
}

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

function calculateTip(amount, rating) {
  switch (rating.toLowerCase()) {
    case "terrible": return 0;
    case "poor": return Math.ceil(amount * 0.05);
    case "good": return Math.ceil(amount * 0.1);
    case "great": return Math.ceil(amount * 0.15);
    case "excellent": return Math.ceil(amount * 0.2);
    default: return "Rating not recognised";
  }
}

function bmi(weight, height) {
  var formula = (weight / height **2);
  switch (true) {
    case formula <=18.5:
    return 'Underweight';
    case formula <=25.0:
    return 'Normal';
    case formula <=30:
    return 'Overweight';
    default:
    return 'Obese';
    
  }
}

const rps = (player1, player2) => {
  if (player1 == player2)
    return 'Draw!';
    
   if (player1 == 'rock' && player2 == 'scissors') 
     return 'Player 1 won!'
   else if (player1 == 'scissors' && player2 == 'paper') 
     return 'Player 1 won!'
   else if (player1 == 'paper' && player2 == 'rock') 
     return 'Player 1 won!'
   else
     return 'Player 2 won!';
};
// to Alternate Case

String.prototype.toAlternatingCase = function () {
  return this.split('').map(function (x) {
    if (x >= 'A' && x <= 'Z') return x.toLowerCase();
    if (x >= 'a' && x <= 'z') return x.toUpperCase();
    return x;
  }).join('');
}
//  arba
String.prototype.toAlternatingCase = function () {
  new_str = "";
  for (var i = 0; i < this.length; i++) {
    if (this[i] === this[i].toUpperCase()) {
      new_str += this[i].toLowerCase();
    }
    else {
      new_str += this[i].toUpperCase();
    }
  }
  return new_str;
}
// return every second element
function removeEveryOther(arr) {
  return arr.filter(function (_, i) {
    return i % 2 === 0;
  });
}

const grow = x => {
  let res = 1;
  for (let i = 0; i < x.length; i++) {
    res *= x[i];
  }
  return res;
};

//reduce
function sum (numbers) {
  if(numbers.length === 0){
    return 0;
  }else {
    return numbers.reduce((a,b)=> a+b);
  }    
};
//arba
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0); //else = 0
}

function sumArray(array) {
  if(!array || array.length <= 2){
      return 0;   
  }else{
  
return array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array);
}
}