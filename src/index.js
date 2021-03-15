module.exports = function reverse(n){
    let num = String(n)
    return parseInt(num.split("").reverse().join(""));
}


