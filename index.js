// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function(string) {
    return string.toLowerCase()
  }
);
}

function nameToAttributes(array) {
  array.map(function(string) {
    return Object.assign({}, {firstName: `${string[0]}`}, {lastName: `${string[1]}`});
  })
}
