function firstTask(arr, d) {
    let maxSum = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < arr.length / d; i++) {
        let sum = 0;
        for (let j = i; j <= arr.length - 1 + i; j += arr.length / d) {
            sum += arr[j];
        }
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum;
}

console.log(firstTask([9,10,2], 3))