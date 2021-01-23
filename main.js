// console.log("This is for event-listeners")

funcion firstOne (arg) {
  return `Hello ${arg}!`;
}

function firstOneTwo (arg) {
  return `GoodbyeBen ${arg}!`;
}

function createGreeting (arg, cb) {
  return cb(arg);

}

console.log(createGreeting('Ben', firstOne)); 
console.log(createGreeting('Ben', firstOneTwo));
