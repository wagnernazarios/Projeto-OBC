const Address = require("./Address");
const Person = require("./Person");

const address = new Address('Feliciano Sodré', '1191', 'Varzea', 'Teresópolis', 'RJ' );
const wagner = new Person("Wagner", address)

console.log(wagner)

console.log(wagner.address.fullAddress())