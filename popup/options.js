// GUI elements

let actualProvider = document.getElementById('actual-provider');

let inputProvider = document.getElementById('provider');
let inputProviderButton = document.getElementById('provider-button');

// Listeners
inputProviderButton.addEventListener('click', () => {
    let provider = inputProvider.value;
    if (provider) {
        actualProvider.innerText = provider;
        window.localStorage.setItem('ladderProvider', provider);
    }
});

// Main function
async function ui() {
    let provider = window.localStorage.getItem('ladderProvider');
    if (provider) {
        actualProvider.innerText = provider;
    } else {
        actualProvider.innerText = 'Fallback (https://12ft.io/)';
    }
}

ui()