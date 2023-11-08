function VigenèreCipher(key, abc) {
    this.encode = function (str) {
        let encodedString = '';
        let actualKey = prolongKey(key, str.length); // подовження ключа за потреби
        for(let i = 0; i < str.length; i++) {
            if(abc.indexOf(str[i]) === -1) { // перевірка, чи є така літера в алфавіті
                encodedString += str[i];
            }
            else {
                let indexEncoded = abc.indexOf(str[i]) + abc.indexOf(actualKey[i]);
                if(indexEncoded > abc.length - 1)
                    indexEncoded -= abc.length;
                encodedString += abc[indexEncoded];
            }
        }
        return encodedString;
    };
    this.decode = function (str) {
        let decodedString = '';
        let actualKey = prolongKey(key, str.length); // подовження ключа за потреби
        for(let i = 0; i < str.length; i++) {
            if(abc.indexOf(str[i]) === -1) { // перевірка, чи є така літера в алфавіті
                decodedString += str[i];
            }
            else {
                let indexDecoded = abc.indexOf(str[i]) - abc.indexOf(actualKey[i]);
                if(indexDecoded < 0)
                    indexDecoded += abc.length;
                decodedString += abc[indexDecoded];
            }
        }
        return decodedString;
    };
}

function prolongKey (key, strLength) { // функція для подовження ключа, якщо він менший за кодоване слово
    if(key.length < strLength) {
        let prolongedKey = key;
        let count = key.length;
        let pos = 0;
        while (count < strLength) {
            prolongedKey += key[pos];
            count++;
            if(pos === key.length - 1)
                pos = 0;
            else
                pos++;
        }
        return prolongedKey;
    }
    else {
        return key;
    }
}