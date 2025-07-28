function maximumSubArray(arr) {
    
    let maxSum=arr[0];
    let currentSum=0;

    for (let num of arr) {

     currentSum+=num;
        if (currentSum > maxSum) {
            maxSum=currentSum;
        }
        if(currentSum<0){
            currentSum=0
        }
        
    }
    return maxSum   
}

console.log(maximumSubArray([-1,-2,-3,4,2,-1]));


function firstUniqueElement(str) {

    let freq={};
    for (const num of str) {
        freq[num]=(freq[num]||0)+1
    }
    for (let i = 0; i < str.length; i++) {
        if (freq[str[i]]===1) {
           return i
        }
    }
    return -1
}
console.log(firstUniqueElement("leetcode"));//space 0(1)


function firstUniqueElement(str) {

    for (let i = 0; i < str.length; i++) {
        if(str.indexOf(str[i])===str.lastIndexOf(str[i])){
            return i
        } 
    }
    return -1
}
console.log(firstUniqueElement("leetcode"));//timecompexity n^2


function  majorityElements(nums) {
   const freq={ }
   const n=nums.length;
   for (let num of nums) {
    freq[num]=(freq[num]||0)+1 
   
   if (freq[num]> Math.floor(n/2)) {
      return num
   }
  }
    return -1
}
console.log(majorityElements([2,3,4,2,3,2,2])); //space 0(n),time 0(n)

//moores voting algorithm

function mejorityElemntOptimal(nums) {
    let count=0;
    let candidate=null
    for (const num of nums) {
        
        if (count=== 0) {
            candidate = num ;
        }
        count+=(num === candidate)? 1:-1;
    }
    return candidate;
    
}
console.log(mejorityElemntOptimal([3,4,5,6,7,3,3,2]));//space 0(1),time 0(n)


function missingNumber (arr) {

    let n = arr.length;

    let result = (n * (n+1)) /2

    let actualRes = arr.reduce((a ,b) => a + b , 0)

   return  result - actualRes;

}
console.log(missingNumber([1,2,3,4,5,6,7]));


function findDifference (s , t) {
    
    let freq = {}
    for (const num of s) {
        
        freq[num] = (freq[num] || 0) + 1;
    }

    for (const char of t) {
        
        if (!freq[char]) { 
            return char ;
        }
        freq[char] --;
    }
    return null
}

console.log( findDifference('abcd','abcde'));


//chacking if  8 binary - 7 binary === 0 if yes then 8 is power of 2
function findPowerOfTwo(n) {

    return n > 0 && ( n & n-1) === 0;
}

console.log( findPowerOfTwo(8)) 


function findPowerOfTwo(n) { 

    if ( n < 0) {
        return false
    }

    while(n %2 ==0 ){
        n = n / 2
    }

    return n ==1
}
console.log( findPowerOfTwo(8)) //time complexity 0(log n)




var isValid = function(s) {
    let stack = [ ];
    let map = {
        ")" : "(" ,
        "}" : "{",
        "]" : "["
    }

    for (let char of s){

        if( char === '[' || char === '(' ||char === '{' ){
            stack.push(char) ;
        }
        else{
            if(s.legth === 0 || stack.pop() !==  map[char]){
                return false ;
            }
        }
    }
    return stack.length === 0;
    
};


 
var removeDuplicates = function(sortedArray) {
    
    if (sortedArray.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < sortedArray.length; j++) {
        if (sortedArray[j] !== sortedArray[i]) {
            i++;
            sortedArray[i] = sortedArray[j];
        }
    }

    return i + 1;  
}
    

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function mergeTwoLists(list1, list2) {
  let dummy = new ListNode(-1);
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  
  current.next = list1 !== null ? list1 : list2;

  return dummy.next;
}

var maxSubArray = function(array) {
    let currentSum = 0;
    let maxSum = -Infinity;

    for (let i = 0; i < array.length; i++) {
        currentSum = currentSum + array[i];

        if (currentSum > maxSum) {
            maxSum = currentSum; 
        }

        if (currentSum < 0) {
            currentSum = 0; 
        }
    }

    return maxSum;
}


var reverseString = function(charArray) {
    let left = 0;
    let right = charArray.length - 1;

    while (left < right) {
        let temp = charArray[left];
        charArray[left] = charArray[right];
        charArray[right] = temp;

       
        left++;
        right--;
    }

    return charArray;

    
};


var maxProfit = function(prices) {

    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
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

