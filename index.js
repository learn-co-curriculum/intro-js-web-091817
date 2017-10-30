assert(2 == 2, 'This should pass');
assert(2 == '2', 'Double equal signs coerce type');
assert(2 !== '2', 'Double equal signs coerce type');
var string = 'some string';
assert(typeof string === 'string', 'JS has strings');
var num = 6;
assert(typeof num === 'number', 'JS has numbers');
var float = 6.006;
assert(typeof float === 'number', 'JS has numbers');
var x;
assert(!x, 'JS has undefined');
var y = null;
assert(y === null, 'JS has null');
var obj = { a: 1 };
assert(typeof obj === 'object', 'JS has objects');
var arr = [1, 2, 3, 4];
assert(Array.isArray(arr), 'JS has arrays');

var katzDeliLine = [];

function takeANumber(line, customer) {
  line.push(customer);
  return `Welcome ${customer}, you are number ${katzDeliLine.length} in line`;
}

takeANumber(katzDeliLine, 'jason');
assert(katzDeliLine.length === 1, 'takeANumber adds a customer to the line');
takeANumber(katzDeliLine, 'esmery');
assert(katzDeliLine.length === 2, 'takeANumber adds a customer to the line');
var message = takeANumber(katzDeliLine, 'alex');
console.log('The value of message is: ', message);
assert(
  message === 'Welcome alex, you are number 3 in line',
  'takeANumber returns a Welcome message'
);

function currentLine(line) {
  var message = 'The line is currently:';
  var customers = [];
  for (let i = 0; i < line.length; i++) {
    var currentCustomer = line[i];
    customers.push(`${i + 1}. ${currentCustomer}`);
  }

  return `${message} ${customers.join(', ')}`;
}

assert(
  currentLine(katzDeliLine) ===
    'The line is currently: 1. jason, 2. esmery, 3. alex',
  'currentLine prints the Line'
);
