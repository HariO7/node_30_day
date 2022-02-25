const querystring = require('querystring');

let value_json = querystring.stringify({ id: 1, name: ['abc', 'njera'], tutorial: '30days of node', creator : 'nodejsera' })
console.log(value_json);