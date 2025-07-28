console.log("hello")

function largestElements(arr){
  let max=arr[0];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]>max){
         max=arr[i]
    }
  }
  return max;
}
console.log(largestElements([1,2,3,4,5]))


function largestElementUsingFun(arr){
   return Math.max(...arr)
}
console.log(largestElementUsingFun([1,2,3,4,5]))


function secondLargeElement(arr){
let first=-Infinity ; 
let second=-Infinity;

for (const num of arr) {
    if(num>first){
        second=first;
        first=num
    }
    else if(num>second && num<first){
        second=num
    }
}
return second;
}
console.log(secondLargeElement([1,2,3,4,5]))

function isSortedArray(arr){
  for (let i = 1; i < arr.length; i++) {
    if(arr[i]<arr[i-1]){
        return false
    }
    return true
  }

}
console.log(isSortedArray([1,2,3]))


function reversedArray(arr){
    return arr.reverse()
}
console.log(reversedArray([6,7,8,9]))

function sumOfElements(arr){
  return arr.reduce((a,b)=>a+b,0)
}
console.log(sumOfElements([5,6,7,3]))


function minElements(arr){
    return arr.reduce((a,b)=>a < b ? a : b)
}
 console.log(minElements([5,6,7,3]))


function maxElements(arr){
    return arr.reduce((a,b)=>a > b ? a : b)
}
 console.log(maxElements([5,6,7,3]))


function findDuplicatesElements(arr){
    let seen=new Set(),dup=new Set();
   for (const num of arr) {
    if(seen.has(num)) dup.add(num);
    seen.add(num)
   }
   return [...dup]
}
 console.log(findDuplicatesElements([5,6,7,5,3,5]))

function removeDuplicates(arr){
 return [...new Set(arr)]
}
console.log(removeDuplicates([5,6,3,7,8,3]));

function charOccurrance(arr){
   let occurance={}
   for (const i of arr) {
    occurance[i]=(occurance[i]||0)+1
   }
   return occurance
}
console.log(charOccurrance([3,4,5,6,5,4,3,7,8,9]))


function rotateArr(arr,k){
    k %= arr.length;
    return arr.slice(k).concat(arr.slice(0,k));
}
console.log(rotateArr([1,2,3,4,5,6],2))


function findMissingNumber(arr,n){
    let expectedResult=(n*(n+1))/2;
    let actualSum=arr.reduce((a,b)=>a+b,0)
     
    return expectedResult-actualSum;
}
console.log(findMissingNumber([1,2,4,5,6,7],7));


function findPairOfSum(arr,target){
 let set=new Set();
 for (const num of arr) {
    if(set.has(target-num))return true;
    set.add(num);
 }
  return false;
}
console.log(findPairOfSum([2,3,4,5,6,7],10));

var twoSum = function(array, target) {
  let map = {};

 for (let i = 0; i < array.length; i++) {
     let remaining = target - array[i];
     if (map.hasOwnProperty(remaining)) {
         return [map[remaining], i];
     }
     map[array[i]] = i;
 }

 return [];
}


function leftRotateArr(arr){
  arr.push(arr.shift())
  return arr
}
console.log(leftRotateArr([1,2,3,4,5]));

function zeroMoves(arr){
    let result = arr.filter(x=>x!==0);
    let zeroCount=arr.length-result.length;
    return result.concat(Array(zeroCount).fill(0))
}
console.log(zeroMoves([0,1,2,0,3,4,5,0,7]));


function countEvenAndOdd(arr){
    let even=0,odd=0;
   for (const num of arr) {
    if(num%2==0) even++;
    odd++
   }
  return {even,odd}
}
console.log(countEvenAndOdd([3,4,5,1,2,6,7,8,9]));


function isArrayEqual(arr1,arr2){
   if(arr1.length!==arr2.length) return false
   let a1=arr1.sort();
  let  a2=arr2.sort();
   return arr1.every((v,i)=>v===arr2[i]);
}
console.log(isArrayEqual([2,3,4,1,5],[5,4,3,2,1]));

function comanElements(a1,a2){
    let setA=new Set(a1)
    return a2.filter(x=>setA.has(x))
}
console.log(comanElements([2,3,4,1,5],[5,4,3,6,1]));



var maxProfit = function(prices) {

    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1 ; i < prices.length ; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];  
        } else {
            let profit = prices[i] - minPrice;  
            if (profit > maxProfit) {
                maxProfit = profit;  
            }
        }
    }

    return maxProfit;
};
  let prices = [7, 1, 5, 3, 6, 4];
  console.log(maxProfit(prices));


