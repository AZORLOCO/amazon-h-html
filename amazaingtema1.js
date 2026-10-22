//EJERCICIOS TEMA 1 INTRODUCCION

/* ejercicio 1: Hola Mundo
Crea un programa que muestre el mensaje "¡Hola Mundo!" en la consola.*/

let frase = "¡Hola Mundo!";
console.log(frase);

/*Ejercicio 2: Declaracion de Variables
 Declara dos variables llamadas firstName y lastName, asígnales tus nombres y apellidos, 
y muestra el mensaje "Hola, [firstName] [lastName]!" en la consola.*/

let firstname = "Domingo";
let lastname = "Gomez";
console.log("!Hola, "+ firstname +" " + lastname + "¡");

/*Ejercicio 3: Condiciones
Crea un programa que verifique si una persona es mayor de edad. Pide al usuario su edad
(usa prompt) y muestra un mensaje indicando si es mayor o menor de edad.*/

const edad = prompt("Introduce tu edad:");
if (edad >= 18 ){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}

/*Ejercicio 4: Bucle For
Muestra en la consola los numeros del 1 al 10 utilizando un bucle for.*/

 for(let num = 1;num <=10; num++){
    console.log("numeros" + num);
 }

 //EJERCICIOS DE CONDICIONALES

 /* Ejercicio 1: Verificar numero positivo y negativo 
 Crea un progrma que solicite al usuario un numero mediante prompt y muestre en la consola 
 si es positivo, negativo o cero*/

const num = prompt("Introduce un numero:");
if(num <0 ){
    console.log("Este numero es negativo.");
}
else if(num >0){
    console.log("Este numero es positivo.");
}
else{
    console.log("Este numero es 0.");
}

/* Ejercicio 2: Clasificacion de edades
Solicita al usuario su edad y muestra un mensaje indicando su grupo de edad.*/

const años = prompt ("Introduce tu edad");
if(años <13){
    console.log("eres del grupo niño/a");
}
else if(años >=13 && años <=19){
    console.log("eres del grupo Adolescente");
}
else if(años >=20 && años <=64){
    console.log("eres del grupo Adulto/a");
}
else{
    console.log("eres del grupo Adulto/a Mayor");
}

/*Ejercicio 3: Calculadora simple con switch
Crea un programa que solicite dos numeros y una operacion matematica (+,-,*,/) 
y muestre el resultado usando switch.*/

