// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function(string) {
    return string.toLowerCase()
  }
);
}

function nameToAttributes(array) {
  newArray = []
  array.map(function(string) {
    newArray.push(Object.assign({}, {firstName: `${string[0]}`}, {lastName: `${string[1]}`}));
  })
}
