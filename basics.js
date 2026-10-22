//operadores numericos

let num1 = 10;
let num2 = 5;

const sumResult = num1 + num2;
const subResult = num1 - num2;
const mulResult = num1 * num2;
const divResult = num1 / num2;

console.log(sumResult, subResult, mulResult, divResult);

num1 = 100;
console.log(num1);

num1 = num1 + 5;
console.log(num1);

//num1 = num1 + 1;
num1++;
console.log(num1);

num1--;
console.log(num1);

//strings

let str1 = "Hola";
let str2 = `



         Mundo ${num1}
         
         `;
console.log(str1, str2);

const allFood = str1 + " " + str2;
console.log(allFood);

console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.at(2));

//Otros tipos de datos primitivos

let myVariable;
console.log(myVariable);

let myNull = null;
console.log(myNull);

//Condicionales

let userAge = 20;

if (userAge >= 18) {
  console.log("Eres mayor de edad");
} else if (userAge === 17) {
  console.log("Tienes 17 años");
} else {
  console.log("Eres menor de edad");
}

let userCountry = "España";

if (userCountry === "España") {
  console.log("Eres español");
}

if (!true) {
  console.log("La condicion es verdadera");
}

/*
TRUTHY || FALSY

true || false
1234 || 0
"Hola" || ""
[] || null
{} || undefined 
*/

let isTruthy = true;

if (isTruthy) {
  console.log("La condicion es truthy");
} else {
  console.log("La condicion es falsy");
}

console.log("El codigo sigue ejecutandose");

//Objetos

const product1 = {
  name: "Laptop",
  price: 1000,
  inStock: true,
};

console.log(product1);
console.log(product1.name);

product1.delivery = "Free";
console.log(product1);

//Arrays

const myArray = [1, 2, 3, 4, 5];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray.length);

let lastIndex = myArray.length - 1;
console.log(myArray[lastIndex]);

const countryArray = ["España", "Venezuela", "Mexico"];
console.log(countryArray);
console.log(countryArray[1]);

const productsArray = [product1];
console.log(productsArray);

// Bucles 

for (let i = 1; i <= 10; i++){
  console.log(i);
}

for (let i = 0; i <myArray.length; i++){
  console.log(myArray[i]);
}

for (let i =0; i <countryArray.length; i++){
  console.log(countryArray[i]);
}

let counter = 1;

while (counter <=10) {
  console.log(counter);
  counter++;
}

// Funciones

function sayHello() {
  console.log("Hola!");
}

sayHello();

function toUpper (text) {
  console.log(text.toUpperCase());
}

toUpper("esto es un string");

function sum(n1, n2) {
  console.log(n1 + n2);
}

sum(10, 20);
sum(7, 20);

function multiply(n1, n2) {
  return n1 * n2;
}

const multiplyResult = multiply(20, 5);
console.log(multiplyResult);

//arrow functions (funciones flecha)

const subtract = (n1, n2) => {
  return n1 - n2;
}

const subtractResult = subtract (30, 15);
console.log(subtractResult);

const divide = (n1, n2) => n1 / n2;

const divideResult = divide (100, 50);
console.log(divideResult);



