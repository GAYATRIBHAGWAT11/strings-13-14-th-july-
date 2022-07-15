let mobile='    9850792184'
console.log(mobile.replace(/8/g,''));

if(mobile.trim().length==10){
    console.log("valid number");
}else{
    console.log("invalid number");
}

// multiple operation=>

console.log(mobile.split('').reverse().join(''));


//  let fname='gayatri'
//  let reversedName=''
// for(let i=0;i<fname.length;i++){
//     reversedName=fname[i]+reversedName
// }
// console.log(reversedName);


// or=>
let fname='gayatri'
let reversedName=''
for(let i=fname.length-1;i>=0;i--){
    reversedName+=fname[i]
}
console.log(reversedName);

