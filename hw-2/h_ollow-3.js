function groupAnagrams(arr) {
    let hash = {};
    arr.forEach(str => {
        let letters = str.split('').sort();
        hash[letters] ? hash[letters].push(str) : hash[letters] = [str];
    })
    const keys = Object.keys(hash);
    return keys.map(function(v) { return hash[v]; });
}
//ледве розібрав цей шмурдяк грьобаний
console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]));
console.log(groupAnagrams(["letter", "meat", "team", "mate", "tterel", "abc"]));