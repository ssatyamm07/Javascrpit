const personArray =["ishani", "kishan", "harkirat"];
const genderArray =["female", "male", "male"];
numberOfUsers = personArray.length;

for(let i =0; i<numberOfUsers; i++){
    if(genderArray[i]== "female"){
        console.log(personArray[i]);
    }
}