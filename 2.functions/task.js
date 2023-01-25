function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let avg = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > max) {
      max = arr[i];
    } if (arr[i] < min) {
      min = arr[i];
    }
  }
  avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  const arrSum = arr.reduce(function(a, b) {
  return a+b;
  }, 0);  
  return arrSum;
}

//function summElementsWorker(...arr) {
//  let sum = 0;
//  for (let i = 0; i < arr.length; i++) {
//    sum = sum + arr[i];}
//    return sum;
//}


function differenceMaxMinWorker(...arr) {
  if (arr.length === 0){
    return 0;
  } 
  return Math.max(...arr) - Math.min(...arr);
}

// function differenceMaxMinWorker(...arr) {
//   let min = Infinity;
//   let max = -Infinity;
//   let diff;
//   if (arr.length === 0){
//     return 0;
//   } 
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     } if (arr[i] < min) {
//       min = arr[i];
//     }
//   } diff = max - min;
//   return diff;
// }




function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0){
    return 0;
  } 

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) === 0) {
    sumEvenElement = sumEvenElement + arr[i] ;
    } else {
    sumOddElement = sumOddElement + arr[i] ;
    }
  }
    return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
  let sumEvenWorker = 0;
  let countEvenElement = 0;
  if (arr.length === 0){
    return 0;
  } 

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) === 0) {
    sumEvenWorker = sumEvenWorker + arr[i] ;
    countEvenElement = countEvenElement +1;
    }
  }
    return (sumEvenWorker / countEvenElement);
}


function makeWork (arrOfArr, func) {

}
