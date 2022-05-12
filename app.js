function remove(string) {
    while (string.slice(-1) == "!") {
        string = string.slice(0, -1)
    }
    return string
}

console.log(remove("Hi!")); // "Hi"
console.log(remove("Hi!!!")); // "Hi"
console.log(remove("!Hi")); // "!Hi"
console.log(remove("!Hi!")); // "!Hi"
console.log(remove("Hi! Hi!")); // "Hi! Hi"