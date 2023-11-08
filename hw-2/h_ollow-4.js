function fourthTask(truck) {
    let counter = "";
    let undamagedCount = 0;
    for(let i = 0; i < truck.length; i++) {
        for(let j = 0; j < truck[i].length; j++){
            if(truck[i][j].length === 6){
                if(truck[i][j][0] === '[' && truck[i][j][5] === ']') {
                    let check = true;
                    for(let k = 1; k < 5; k++) {
                        if(truck[i][j][1] !== truck[i][j][k])
                            check = false;
                    }
                    if(check) {
                        undamagedCount++;
                        if(undamagedCount % 5 !== 0){
                            for(let k = 0; k < 4; k++) {
                                counter += (truck[i][j][1] + " ");
                            }
                        }
                    }
                }
            }
        }
    }
    return counter.trim();
}

console.log(fourthTask([ [ "(-)", "[IIII]", "[))))]" ], [ "IuI", "[llll]" ], [ "[@@@@]", "UwU",
    "[IlII]" ], [ "IuI", "[))))]", "x" ], [] ]));