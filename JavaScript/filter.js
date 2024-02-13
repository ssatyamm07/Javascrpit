//learn how to apply filter file
//suppose given an array conatining = [1,2,3,4,5] 
//and return the array containing only even numbers I.E [2,4]
//first way

/*const arr = [1, 2, 3, 4, 5];
const newarr= [];
for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2===0){
        newarr.push(arr[i]);
    }
}
console.log(newarr);*/

//second way
/*const arr = [1, 2, 3, 4, 5];
const ans = arr.filter(function (n) {
    if(n%2 == 0){
        return true;
    }
    else{
        return false;
    }

});
console.log(ans);*/

//if we have to filter some array containg names 

const arr = ["Kelvin","sakshi","Akash","Satyam","Ayush"];
const ans = arr.filter(function (i) {
    if (i.startsWith("S")){
        return true;
    }
    else{
        return false;
    }
});
console.log(ans);

   

