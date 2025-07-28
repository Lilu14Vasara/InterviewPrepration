function reverseAndSortArrays(arr1, arr2) {
    let revSorted1 = arr1.reverse().sort((a, b) => a - b);
    let revSorted2 = arr2.reverse().sort((a, b) => a - b);
    
    return [revSorted1, revSorted2];
  }
  
  let result = reverseAndSortArrays([5, 1, 3], [10, 2, 7]);
  console.log("Array 1:", result[0]); // [1, 3, 5]
  console.log("Array 2:", result[1]); // [2, 7, 10]


  function secondLargeElement(arr){
    let first=-Infinity;let second=-Infinity;
    
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
    


    function sumOfSortedArrays(arr1, arr2) {
        let sorted1 = arr1.sort((a, b) => a - b);
        let sorted2 = arr2.sort((a, b) => a - b);
        
        let sum1 = sorted1.reduce((a, b) => a + b, 0);
        let sum2 = sorted2.reduce((a, b) => a + b, 0);
        
        return sum1 + sum2;
      }
      
      console.log(sumOfSortedArrays([3, 1, 4], [5, 2]));
      
      

      function isPrime(n) {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) return false;
        }
        return true;
      }
      
      function generatePrimes(N) {
        let primes = [];
        for (let i = 2; primes.length < N; i++) {
          if (isPrime(i)) {
            primes.push(i);
          }
        }
        return primes;
      }
      
      console.log(generatePrimes(10)); 


      function factorial(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
          result *= i;
        }
        return result;
      }
      
      console.log(factorial(5));

      function factorialRecursive(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorialRecursive(n - 1);
      }
      
      console.log(factorialRecursive(5)); 