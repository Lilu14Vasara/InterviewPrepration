function fibbonacciSeries(n) {
 let a=0,b=1;
    if (n<0) {
        return -1;
    }
    for (let i = 0; i < n; i++) {
        console.log(a);
        [a,b]=[b,a+b]
        
    }
    return n;
}
console.log(fibbonacciSeries(8));



function reverseStringArray(str){

//  const result= str.split('').reverse().join('')
//  return [...result]
return str.split(' ').map(word=>word.split('').reverse().join('')).join(' ')

}
console.log(reverseStringArray("Good Morning"));



function removeSpace(str){
    return str.trim()
}
console.log(removeSpace("   hello from ...  "));


function frequencyOfCharacter(str) {
    let string=str.toLowerCase().split(/\s+/)
        let occurance={}
        for (const i of string) {
         occurance[i]=(occurance[i]||0)+1
        }
        return occurance
    
}
console.log(frequencyOfCharacter("Hard work is the key to success"));


function leapYearChecking(year){
    if(year%4===0 && year%100!==0 || year % 400==0){
        return true;
    }
    return false;
}
console.log(leapYearChecking(2004));

function nonRepeatingElements(arr){

    let freq={}
    for (const i of arr) {
        freq[i]=(freq[i] || 0)+ 1;
    }
    return arr.filter(words=>freq[words]===1)
}
console.log(nonRepeatingElements([5,6,3,4,8,5,2,3,8]));


function sumOfDigit(num){

    return num.toString().split('').reduce((sum,digit)=>sum+Number(digit),0);
}
console.log(sumOfDigit(543));


function zeroMoves(arr){
    let result = arr.filter(x=>x!==0);
    let zeroCount=arr.length-result.length;
    return result.concat(Array(zeroCount).fill(0))
}
console.log(zeroMoves([0,1,2,0,3,4,5,0,7]));


const db =new Date(process.argv[2]);
const today=new Date();

let age=today.getFullYear()-db.getFullYear();
let m=today.getMonth()-db.getMonth();

if( m < 0 || (m===0 && today.getDate()< db.getDate())){
    age--
}
console.log(age);

function isBalanced(str){

    const stack=[]
    const map={'(':')','[':']','{':'}' };

    for (let char of str) {
        if(map[char]){
            stack.push(char);
        }
        else if(Object.values(map).includes(char)){
            if(map[stack.pop()]!==char){
                return false;
            }
        }
        
    }
    return stack.length==0;
}
console.log(isBalanced("([{}])"));