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

console.log(userAge >= 18);

console.log("El codigo sigue ejecutandose");
