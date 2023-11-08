function firstTask(num) {
    let sum = 0;
    if(num < 0)
        return 0;
    for (let i = 0; i < num; i++){
        if (i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    return sum;
}

let entryNumber = 10;
console.log('The sum off all the multiples of 3 and 5 below the number ' + entryNumber + ' is ' + firstTask(entryNumber));