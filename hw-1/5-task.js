function fifthTask(input) {
    let numbers = input.split(' ');
    let minValue = parseInt(numbers[0]), maxValue = parseInt(numbers[0]);
    for (let i = 0; i < numbers.length; i++){
        if(parseInt(numbers[i]) < minValue)
            minValue = parseInt(numbers[i]);
        else if(parseInt(numbers[i]) > maxValue)
            maxValue = parseInt(numbers[i]);
    }
    return `${maxValue} ${minValue}`
}
console.log(fifthTask('1 2 3 4 5 6'));
console.log(fifthTask('-1 5 -2 -10 11 9 0'));
console.log(fifthTask('1'));