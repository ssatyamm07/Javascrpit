function square(n) {
    return n * n;
}
function cube(n) {
    return n * n * n;
}
function quad(n) {
    return n * n * n * n;
}

/*function sumOfSquare(a, b) {
    let square1 = square(a);
    let square2 = square(b);
    return square1 + square2;
}*/   

function someThing(a, b , fn) { //this is a generic function and we can pass any function to it
    let square1 = fn(a);
    let square2 = fn(b);
    return square1 + square2;
}


let ans = someThing(1, 2 , quad);
console.log(ans); 