import { label, br } from "./function.js";  
import input from "./function.js"
  console.log(label({ for: 'fullname', textContent: 'Nome Completo'}))
  console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...'}))
  console.log(br())