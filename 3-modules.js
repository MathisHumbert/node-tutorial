const names = require('./4-names');
// const {john, peter} = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative');
console.log(data);
console.log(names);

sayHi('lisa');
sayHi(names.john);
sayHi(names.peter);
require('./7-mind-grenade');
