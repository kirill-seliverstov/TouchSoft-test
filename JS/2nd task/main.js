function sayHello(name) {
    if (name === 'Mark' || name === 'mark') return 'Hi, ' + name + '!'
    else return 'Hello, ' + name + '!';
}

console.log(sayHello('Mark'));
console.log(sayHello('Oleg'));