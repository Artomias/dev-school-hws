function insertionSort(array) {
    if(array.length < 2)
        return array;
    let key, i;
    for(let k = 1; k < array.length; k++) {
        key = array[k];
        i = k - 1;
        while(i >= 0 && array[i] < key) {
            array[i+1] = array[i];
            i--;
        }
        array[i + 1] = key;
    }
    return array;
}
function sixthTask(input) {
    if(input < 0)
        return -1;
    let arr = [];
    while(input > 0){
        arr.push(input % 10);
        input = Math.floor(input / 10);
    }
    let sortedArr = insertionSort(arr);
    for(let i = 0; i < sortedArr.length; i++) {
        input += sortedArr[i];
        input *= 10;
    }
    input /= 10;
    return input;
}

console.log(sixthTask(12345678213213));
console.log((sixthTask(12312424)));
console.log(0);