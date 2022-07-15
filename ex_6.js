let headline='Actor-director Pratap Pothen passes away'
let target='Pothen'

let headlineArray=headline.split(' ')

let isPresent=false;
for(let i=0;i<headlineArray.length;i++){
    if(headlineArray[i]==target){
        isPresent=true;
    }
}
console.log(isPresent);