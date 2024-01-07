function square(n) {
    return n * n;
}
function cube(n) {
    return n * n * n;
}

function sumOfSomthing(a,b, callback) {
    console.log(a);
    console.log(callback);
    const val1 = callback(a);
    const val2 = callback(b);
    return val1 + val2;
}

const ans = sumOfSomthing(2,4, square);
console.log(ans);