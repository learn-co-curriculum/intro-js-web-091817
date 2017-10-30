* Outline:
  * History of JavaScript
  * JavaScript programming paradigms
    * [Procedural](https://en.wikipedia.org/wiki/Procedural_programming)
    * [Functional](https://en.wikipedia.org/wiki/Functional_programming)
      * https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0
    * [Object-oriented](https://en.wikipedia.org/wiki/Object-oriented_programming)
      * https://en.wikipedia.org/wiki/Prototype-based_programming
    * Event-driven
  * Data types
    * Primitives
      * [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)
      * [`null`](https://developer.mozilla.org/en-US/docs/Glossary/Null)
      * [`undefined`](https://developer.mozilla.org/en-US/docs/Glossary/Undefined)
      * [Number](https://developer.mozilla.org/en-US/docs/Glossary/Number)
      * [String](https://developer.mozilla.org/en-US/docs/Glossary/String)
      * [Symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)
    * [Objects](https://developer.mozilla.org/en-US/docs/Glossary/Object)
      * [Object literals (key-value pairs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals)
      * [Arrays (ordered key-value pairs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
      * [Functions](https://developer.mozilla.org/en-US/docs/Glossary/Function)
  * Arithmetic
  * Debugging
    * `console.log`
    * `debugger`
    * Dev tools


 * Data Types
  * Constructors versus Literals

    ```js
    let someNum = new Number(1)
    let anotherNum = 1
    someNum === anotherNum // false
    ```
  * Primitives
    * String
      * Single quotes
      `'I'm a string`
      * Double quotes
      `"I'm another string"`
      * Backticks   (see: string templates)
      `` `I'm a string with interpolation ${'Yay!'}` ``
    * Number: one numeral type
      * Negative `-1`
      * Exponent `-1e2`
      * Float `-1.1e2`
      * NaN `'hello' * 3`
      * parseInt / parseFloat

        ```js
        parseInt('123')             // 123
        parseInt('123.456')         // 123
        parseInt('one two three')   // NaN
        parseFloat('123')           // 123
        parseFloat('123.456')       // 123.456
        parseFloat('one two three') // NaN
        ```
    * Boolean
      * Falsy
        * false `Boolean(false)`
        * 0 `Boolean(0)`
        * '' (empty string) `Boolean('')`
        * null `Boolean(null)`
        * undefined `Boolean(undefined)`
        * NaN `Boolean(NaN)`
      * Truthy - everything else
    * Undefined
      * Variable that has been declared but not defined

      ```js
      let someVar
      console.log(someVar) // undefined
      ```
    * Null
      * An assignment value that represents nothing

      ```js
      let someVar = null
      console.log(someVar) // null
      ```
    * Symbol (later)
  * Non-primitives
    * Object `person = {name: 'Tim'}`
      * Accessing properties
        * `person.name`
        * `person["name"]`
      * Adding methods
        * `person.greet = function(name) { return `Hello, ${name}` }`
      * Value of `this`
        * `person.greet = function(name) { return `${this.name} greets ${name}`}`
    * Function
      * Function declaration / definition / statement

      ```js
      function doSomething() {}
      ```
      * Function expression (later)

      ```js
      let doSomething = function() {}
      let doSomethingElse = () => {}
      ```
    * Array

    ```js
    let arr = [1,2,3, "a", "b", "c",,{hello: 'world'}]
    ```
  * Type Checking
    * [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
    * [`instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
    * [`.constructor()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)

* Control Flow
  * `if` statement

  ```js
    let x = 4
    if (x > 3){
      console.log('it is bigger')
    }
    ```
  * `else` statement

  ```js
  if (x > 3) {
    console.log('it is bigger')
  } else {
    console.log('it is smaller or the same')
  }

  ```
  * Chaining `if`s

  ```js
  if (x > 3) {
    console.log('it is bigger')
  } else if (x < 3) {
    console.log('it is smaller')
  } else {
    console.log('it is the same')
  }

  ```
  * Using `switch`

  ```js
  switch (x) {
    case 1:
    case 2:
      console.log('it is smaller')
      break;
    case 3:
      console.log('it is the same')
      break;
    case 4:
    case 5:
      console.log('it is bigger')
      break;
    default:
      console.log('i haven\'t considered that number')
  }
  ```
