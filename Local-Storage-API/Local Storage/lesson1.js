// Web storage API - allows us to store & read data in browser
// Web storage API - localStorage, sessionStorage

// localStorage - store, read, update and remove data
// no expiry date: data never gets lost even if you close the browser

// localStorage store data as key value pair - string

// console.log(localStorage);

//setItem(key, value)
localStorage.setItem("userName", "jarif");
localStorage.setItem("userPassword", "012345");

//getItem(key)
const userName = localStorage.getItem("userName");
const userPassword = localStorage.getItem("userPassword");
console.log(userName, userPassword);

//removeItem(key)
// localStorage.removeItem("userName");
// localStorage.removeItem("userPassword");

const countries = ["Bangladesh", "India", "Japan"];
localStorage.setItem("countries", JSON.stringify(countries));

const countryList = JSON.parse(localStorage.getItem("countries"));
console.log(countryList);