function caesarCipher(string, factor) {
    let oldCode;
    let newCode;
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        oldCode = string.charCodeAt(i);
        newCode = oldCode + factor % 26;
        if (newCode > 122 || (newCode > 90 && oldCode < 91)) {
            newCode = newCode - 26;
        }        
        if (oldCode < 65 || (oldCode < 97 && oldCode > 90) || oldCode > 122) {
            newString += String.fromCharCode(oldCode);
        } else {
            newString += String.fromCharCode(newCode);
        }        
    }
    return newString;
}

export default caesarCipher