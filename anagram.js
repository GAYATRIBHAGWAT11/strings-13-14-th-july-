let word1='god'
let word2='dog'

// if(word1.split('').sort(), word2.split('').sort()){
//     console.log('anagram');
// }else{
//     console.log('not an anagram');
// }

if(word1.split('').sort().join('')==word2.split('').sort().join('')){
    console.log('anagram')
}else{
    console.log('not an anagram');
}
