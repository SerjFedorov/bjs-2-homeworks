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
                    //процентная ставка, первый взнос, сумма кредита, срок кредита //
  if (isNaN(percent)){
      return false;
  }
  if (isNaN(contribution)){
    return false;
  }
  if (isNaN(amount)){
    return false;
  }
  let percentM = percent/12/100;
  let bodyCredit = amount - contribution;
  let payMounth = bodyCredit * (percentM + (percentM/(((1+percentM)** countMonths)-1)));
  let totalPay = payMounth * countMonths;
  return Number (totalPay.toFixed(2));
  
}