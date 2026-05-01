const initializeApp = () => {
    console.log("App is loaded and available!");
    
    const searchBtn = document.querySelector('button');
    searchBtn?.addEventListener('click', () => {
        alert("Search function is not initialized but the button works!");
    });
};

document.addEventListener("DOMContentLoaded", initializeApp);