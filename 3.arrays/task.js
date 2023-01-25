function compareArrays(arr1, arr2) {
    let resultArray = (arr1.length === arr2.length && arr1.every(( number, index ) => number === arr2[index]));    
    return resultArray;
}

function getUsersNamesInAgeRange(users, gender) {
    let resultRange = users.filter(users => users.gender === gender).reduce((acc, ageAvg, index, arrayLength) => acc + ageAvg.age /arrayLength.length, 0);
    return resultRange;
}

//users => users.gender === gender в данном случае users новая переменная не равная в функции users
//users => users.gender === gender равно el=>el.gender===gender фильтрация по полу
//без index не работает
//acc + ageAvg.age /arrayLength.length вычисление среднего возраста путем reduce 
// acc - начальное значение ,ageAvg.age -значение возраста в массиве ,arrayLength.length колво человек
