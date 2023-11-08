function findNb(m){
    let n = 0;
    while(1 === 1){
        if(m > 0) {
            m -= Math.pow(n+1, 3);
        } else if (m === 0) {
            return n;
        } else {
            return -1;
        }
        n++;
    }
}

console.log(findNb(1071225));
console.log(findNb(91716553919377));