const allUser =[{
        firstName: "harkirat",
        gender: "male"

},{
    firstName:"rman",
    gender:"male"

},{
    firstName:"ishani",
    gender:"female"
}]

for(let i = 0; i<allUser.length; i++){
    if(allUser[i]["gender"]== "male"){
        console.log(allUser[i]["firstName"]);
    }
}