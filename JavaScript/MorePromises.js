//define the function

function promisifiedMyOwnSetTimeout(duration) {
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("");
        }, duration);
    });   
    return p;
}

//async await syntax, promise chaning => callbackn hell

const ans = promisifiedMyOwnSetTimeout(1000);
ans.then(function(){
    console.log("timeout done");
})