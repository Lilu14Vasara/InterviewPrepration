function factorial(num) {
    if(num==0||num==1){
        return 1;
    }

    return num*factorial(num-1)
}
console.log(factorial(5))


function fibbonacciSeries(num){
    let num1=0, num2=1;
    for (let i = 0; i < num; i++) {
        console.log(num1);
       [num1,num2]=[num2,num1+num2]
        
    }
    return num

}
console.log(fibbonacciSeries(5));

function palidroneNumber(num) {
    if(num<0) return false

    let reversed=0;
    let original=num
    while(num>0)
    {let digit=num%10
      reversed=reversed*10+digit
      num=Math.floor(num/10)
}
return original==reversed
}
console.log(palidroneNumber(141));

function palidroneNumber(num){
    let number=num.toString()
    let original= number.split('').reverse().join('')

    return number==original //if its string then dirctly compare with str==str.split(').revrse().join('')
}
console.log(palidroneNumber(141));


function isPrime(num){
    if(num<2){
        return false
    }
   for(let i=2;i<=Math.sqrt(num);i++){
    if(num%2==0){
        return false
    }
    }
    return true
}
console.log(isPrime(43));

function armstrong(n){
    let str=n.toString()
    let power=str.length;
    let sum=0;
    for(let digit of str) {
        sum+=Math.pow(Number(digit),power)
    }
   return sum==n
}
console.log(armstrong(143));


function findSumOfDigit(n){
    let sum=0;
    while(n>0)
    sum+=n%10;
    n=Math.floor(n/10)
}


