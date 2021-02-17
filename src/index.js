module.exports = function reverse(n) {
    let a = n > 0 ? n : -n;
    let i = a.toString().split('').reverse().join('');
    return +i;
}
