// commonjs
function greet(greeting) {
    return `Good ${greeting}`
}

function call(phoneNumber) {
    return `Call ${phoneNumber}`
}

// commonjs export
module.export = {
    greet,
    call
}

// commonjs import
const {greet, call } = require("./jsfile.js")


// es6 export
export const PI = 3.14;
export function add(a, b) {
  return a + b;
}

// import in es6
import { PI, add } from './module.js';