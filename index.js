// Follow along with the examples here
function doNothing() {}
function sayHello() {
    console.log("Hello!");
  }
sayHello();
function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}
sayHelloToGuadalupe();
function sayHelloToLiz() {
    console.log("Hello, Liz");
}
sayHelloToLiz();
function sayHelloToSamip() {
    console.log("Hello, Samip");
}
sayHelloToSamip()
function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anything");
function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1); // "Hello, 1!"
function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
    console.log(say("Hello", "Liz"));
}
  say("Goodbye", "Julio");
  say("Julio", "hello");
function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }
function add(x, y) {
    return x + y;
  }
  console.log(add(1, 2));
  const sum = add(x, y);    
  const message = `The sum of your numbers is: ${sum}.`;
  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }
