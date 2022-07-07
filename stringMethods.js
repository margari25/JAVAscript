const input = document.getElementById('didziosios');
const paragraph = document.getElementById('wiki');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

function paverstiDidziosiomis() {
    console.log(input.value.toUpperCase());
    input.value = input.value.toUpperCase();
}

function arTekstasTuriString() {
    return paragraph.textContent.includes(input.value);
}

function arTekstasTuriStringirpakeisk() {
    if (arTekstasTuriString()) {
        paragraph.innerHTML = paragraph.textContent.replace(input.value, input.value.bold());
    }
}
function sujungti() {
    console.log(input1.value.concat(" ", input2.value));
}