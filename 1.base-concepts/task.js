"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (b**2) - (4*a*c);
  if (discriminant === 0) {
    let rootSingle = -b/(2*a);
    arr.push(rootSingle);
  } else if (discriminant > 0 ) {
    let rootOne = (-b + Math.sqrt(discriminant) )/(2*a);
    let rootSecond = (-b - Math.sqrt(discriminant) )/(2*a);
    arr.push(rootOne, rootSecond);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}