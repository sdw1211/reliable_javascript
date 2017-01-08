const rj3 = require('./rj3.js');

const arrayData = [[10,130], [100,60], [190, 160], [280,10]]
, lineGenerator = rj3.svg.line()
, path = lineGenerator(arrayData);

console.log(path);
