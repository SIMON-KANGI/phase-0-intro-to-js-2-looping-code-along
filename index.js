// Code your solutions in this file
const writeCards=(arr, name)=>{
    let newArr=[]
for(let i=0; i<arr.length; i++){
    let message=`Thank you, ${arr[i]}, for the wonderful ${name} gift!`
 newArr.push(message);

}
 return newArr;
}
console.log(writeCards(["Guadalupe","Ollie", "Aki"], "suprise"))

const countDown=(int)=>{
let countdown=int
while(countdown>=0){
    console.log(countdown)
   countdown--;
}
return countdown
}
countDown(10)