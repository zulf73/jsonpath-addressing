const jp = require('jsonpath');
const jsp = require('jspath');
const fs = require('fs');

var raw = fs.readFileSync("IPIP120.json");
var json_obj = JSON.parse( raw);

console.log(json_obj);
console.log('----');
//var random_access = jp.JSONPath( json_obj, "$.value")
//console.log(random_access);
var random_access = jsp.apply(".value[10].question",json_obj)
console.log(random_access);
