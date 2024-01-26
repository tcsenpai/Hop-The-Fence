// GUI Stuff
let configButton = document.getElementById('config-button');
let ladderizeButton = document.getElementById('ladderize-button');

// Listeners

configButton.addEventListener('click', function() {
    chrome.tabs.create({url: "options.html"});
})

ladderizeButton.addEventListener('click', function() {
    ladderize()
})

// Main function
async function ui() {
    let currentURL = window.location.href
    console.log("Here we are: " + currentURL)
}


// Ladderize
async function ladderize() {

    const fallbackProvider = "https://12ft.io/"
    var ladderProvider = null

    // Supporting user configurations
    try {
        ladderProvider = window.localStorage.getItem("ladderProvider")
    } catch (error) {
        ladderProvider = null
    }
    // Also managing the "" case so I dont have to test it manually
    if (ladderProvider=="") {
        ladderProvider = null
    }

    console.log("Provisory provider: ")
    console.log(ladderProvider)

    // Fallback management
    if (!ladderProvider) {
        ladderProvider = fallbackProvider
    }

    console.log("Ladder provider: ")
    console.log(ladderProvider)

    // Adding the "/" if not present
    if ( !ladderProvider.endsWith("/") ) {
        ladderProvider = ladderProvider + "/"
        console.log("Fixed ladderProvider for you")
    }
    'use strict';
    let allTabs = await browser.tabs.query({currentWindow: true, active: true})
    console.log(allTabs)
    let currentTab = allTabs[0]
    let currentURL = currentTab.url

    let ladderURL = ladderProvider + currentURL
    window.open(ladderURL, '_blank');
}

ui()