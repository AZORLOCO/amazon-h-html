console.log("Manipulacion del DOM");

//Seleccionar elementos del DOM

const title = document.getElementById("main-title");
console.log(title);

const items = document.getElementsByClassName("list-item");
console.log(items);
console.log(items[0]);
console.log(items[0].textContent);

const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
console.log(paragraphs.length);
console.log(paragraphs[1]);

const h1 = document.querySelector("h1");
console.log(h1);

const pageTitle = document.querySelector("#main-title");
console.log(pageTitle);

const listItems= document.querySelectorAll(".list-item");
console.log(listItems);

// Manipulacion de elementos del DOM

title.textContent = "Nuevo titulo!";

const container = document.querySelector(".container");
console.log(container);
container.innerHTML = "<p><strong>Esto es un parrafo insertado dinamicamente</strong><p></p>";

const input = document.querySelector("#input");
console.log(input);
input.value = "Value cambiado";

const link = document.querySelector("#link");
console.log(link);
link.textContent = "Ir a Google";
link.setAttribute("href", "https://www.google.com");

title.style.backgroundColor = "yellow";

items[0].classList.remove("blue");

paragraphs[0].classList.add("blue");

//Crear y destruir elementos del DOM

const h2 = document.createElement("h2");
h2.textContent = "h2 creado dinamicamente";
container.appendChild(h2);

const subtitle = document.querySelector("#subtitle");
console.log(subtitle);
subtitle.remove();

const ul = document.querySelector("ul");
ul.innerHTML = "";

// Eventos

const btn = document.querySelector("#btn");
console.log(btn);

const clickHandler = () => {
    alert("Se ha Hecho click en el boton");
    console.log("se ha clicado el boton");
}

btn.addEventListener("click", clickHandler);

let inputValue = "";

input.addEventListener("input", () => {
    inputValue = input.value;
    console.log(inputValue);
    
})

const form = document.querySelector("#form");
console.log(form);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(form);
})

const darkBtn = document.querySelector("#btn-dark");
console.log(darkBtn);

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})











