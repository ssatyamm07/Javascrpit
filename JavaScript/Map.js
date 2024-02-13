//map, filter, arrow function

//given an array liker=[1,2,3,4,5] and return it with multiply by 2

//first way

/*const arr = [1, 2, 3, 4, 5];
const newarr= [];
for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[i]*2);
}
console.log(newarr);*/

//second way

const input = [1, 2, 3, 4, 5];

function transform(i){
    return i*2;
}
const ans = input.map(transform);
console.log(ans);
