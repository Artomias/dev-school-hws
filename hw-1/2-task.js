console.log('The minimum amount of moves required to win the game `Towers of Hanoi` can be calculated with this formula:\n2^n - 1, \nwhere n is the number of discs.')
function secondTask(discs) {
    return 2**discs - 1;
}

let discs = 4;
console.log(`The minimal number of moves required to win the game with ${discs} discs is ${secondTask(discs)}`);