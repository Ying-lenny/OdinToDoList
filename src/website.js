import loadForm from "./form";

//Generates a navbar for the website
function createNavbar() {
    const navbar = document.createElement('div')
    navbar.classList.add('navbar')
    navbar.setAttribute("id", "navbar");

    return navbar;
}

//Generates the main section of the webpage
function createMain() {
    const main = document.createElement("div");
    main.classList.add("main");
    main.setAttribute("id", "main");

    return main;
}

function intitialize() {
    const content = document.getElementById("content");

    content.appendChild(createNavbar());
    content.appendChild(createMain())

    loadForm()
}

export default intitialize;