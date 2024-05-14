// var promises = new Promise(function(resolve, reject) {
//     let num = Math.floor(Math.random() * 10);
//     if (num > 3){
//         resolve("success");
//     }
//     else {
//         reject("failed");
//     }
// });
// promises.then(function(data){
//     console.log(data);
// }).catch(function(error){
//     console.log(error);
// });


function Savedata() {
 return new Promise(function(resolve, reject) {
    let num = Math.floor(Math.random() * 10)+1;
    console.log(num);
    if (num > 3) {
     resolve("success");
    } else {
     reject("failed");
    }
    });
}
Savedata().then(function(data) {
        console.log("Data1 is: " + data);
        return Savedata();

         })
         .then(function(data) {
        console.log("Data2 is: " + data);
            })  
         
         .catch(function(error) {
        console.log("Data is failed to store: " + error);
// promise chaining
});
     
