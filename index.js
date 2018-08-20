// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function(string) {
    return string.toLowerCase()
  }
);
}

function nameToAttributes(array) {
  return array.map(function(string) {
    let array = string.split(` `);
    return Object.assign({}, {firstName: `${array[0]}`}, {lastName: `${array[1]}`});
  })
}
