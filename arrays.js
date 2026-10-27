console.log("Arrays!");

//Arrays

const numArrays = [10, 20, 30, 40];
console.log(numArrays);
console.log(numArrays[2]);

const countries = ["España", "Venezuela", "Mexico"];
console.log(countries);

const products = [
    {
      name: "Ordenador",
      price: 1000,
      isAvailable: true  
    },
    {
      name: "Teclado",
      price: 50,
      isAvailable: true  
    },
    {
      name: "Raton",
      price: 20,
      isAvailable: false  
    },
];
console.log(products);

// forEach POR CADA 

numArrays.forEach((number) => {
console.log(number);
})

countries.forEach((country) => console.log(country));

products.forEach((product) => console.log(product));

// map 

const doubleNumbers = numArrays.map ((number) => {
    return number * 2;
})
console.log(doubleNumbers);

const IVAPrecios = numArrays.map((number) => {
    return number * 1.21;
})
console.log(IVAPrecios);

const upperCountries = countries.map((country) => country.toUpperCase())
console.log(upperCountries);

const IVAPrecioProductos = products.map((product) => product.price * 1.21);
console.log(IVAPrecioProductos);

const productsCopy = structuredClone(products);

const productosConIVA = productsCopy.map((product) =>{
    const updatedPrice = product.price * 1.21;
    product.price = updatedPrice;
    return product;
})
console.log(productosConIVA);
console.log(products);

// filter   

const bigNumbers = numArrays.filter((number) => number >= 25);
console.log(bigNumbers);

const filteredCuntries = countries.filter((country) => country.charAt(0) === "V");
console.log(filteredCuntries);

const availableProducts = products.filter((product) => product.isAvailable);
console.log(availableProducts);

// reduce

const sumResult = numArrays.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sumResult);


 





