const cookieDisplay = document.getElementById('cookieDisplay')
// Count
let cookieCount = getCookie('cookieCount') || 0;
let grandmaCount = getCookie('grandmaCount') || 0;

// Intervals
let grandmaInterval;

// Display
cookieDisplay.textContent = cookieCount;

function increaseCookieCount() {
    cookieCount++
    setCookieValues();
}

function setCookie(name, value) {
    document.cookie = `${name}=${value};`
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const buyGrandma = () => {
    if (cookieCount >= 50) {
        cookieCount = Number(cookieCount) - 50
        setCookieValues();

        grandmaCount++
        setCookie('grandmaCount', grandmaCount)
        workingGrandmas();
    }
}

function workingGrandmas() {
    if (grandmaCount) {
        if (grandmaInterval) {
            clearInterval(grandmaInterval);
        }

        grandmaInterval = setInterval(() => grandmaHorsepower(), 1000);
    }
}

function grandmaHorsepower() {
    cookieCount = Number(cookieCount) + 0.5 * grandmaCount
    setCookieValues();
}

function setCookieValues() {
    setCookie('cookieCount', cookieCount)
    cookieDisplay.textContent = cookieCount
}

workingGrandmas();
