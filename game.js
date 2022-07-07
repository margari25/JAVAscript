let rock = 1;
let scissors = 2;
let paper = 3;
let computer;

function player1() {
    computer = Math.floor(Math.random() * 3) + 1;
    if (computer == 1) {
        console.log('rock', 'lygiosios');
    } else if (computer == 2) {
        console.log('scissors', 'laimejai');
    } else if (computer == 3) {
        console.log('paper', 'pralaimejai');
    }
}

function player2() {
    computer = Math.floor(Math.random() * 3) + 1;
    if (computer == 1) {
        console.log('rock', 'pralaimejai');
    } else if (computer == 2) {
        console.log('scissors', 'lygiosios');
    } else if (computer == 3) {
        console.log('paper', 'laimejai');
    }
}

function player3() {
    computer = Math.floor(Math.random() * 3) + 1;
    if (computer == 1) {
        console.log('rock', 'laimejai');
    } else if (computer == 2) {
        console.log('scissors', 'pralaimejai');
    } else if (computer == 3) {
        console.log('paper', 'lygiosios');
    }
}