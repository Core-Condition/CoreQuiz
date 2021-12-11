const server = require("./server")
const encyription = require("./encryption")
console.log(encyription.encrypt("hi", "123"))
//console.log(encyription.decrypt(encyription.encrypt("hi", "123"), "123"))