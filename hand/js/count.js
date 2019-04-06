const fs = require('fs')
words = fs.readFileSync('/mnt/c/projects/perm/hand/docs/handword.txt', 'utf-8')
var sortAlphabets = function (text) {
    return text.split('').sort().join('');
};

function makeUnique(str) {
    return String.prototype.concat(...new Set(str))
}
debugger
console.log(words)