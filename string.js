console.log("Hello")

function reverse(str){
   return str.split('').reverse().join('');
}
console.log(reverse("lilu"))

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


function reverse(str){
     let reversed =''
  for (let i =str.length-1; i >= 0; i--) {
   
     reversed += str[i];
    
  }
  return reversed
}
console.log(reverse("lilu"))


function Palidrome(str){
    return str==str.split('').reverse().join('');
 }
 console.log(Palidrome("madam"))


function countVowels(str){
    return str.match(/['aeiou']/gi||[]).length; //g for all character and i for upper lower both case
 }
 console.log(countVowels("lilu"))

 function countVowelsAndConsonant(str){
  const vowels= str.match(/['aeiou']/gi||[]).length;
  const consonants = str.length - vowels

  return {vowels ,consonants}
}
console.log(countVowels("lilu"))

function anagrams(str1,str2){
    return str1.split('').sort().join('')===str2.split('').sort().join('')
 }
 console.log(anagrams("lilu","kritka"))

function isAnagram(s, t) {
    if (s.length !== t.length) return false;
  
    const count = {};
  
    for (let char of s) {
      count[char] = (count[char] || 0) + 1;
    }
  
    for (let char of t) {
      if (!count[char]) return false;
      count[char]--;
    }
  
    return true;
  }
  


function removeDuplicates(str){
   return [...new Set(str)].join('')
}
console.log(removeDuplicates("lilu"))


function charOccurrance(str){
   let occurance={}
   for (const i of str) {
    occurance[i]=(occurance[i]||0)+1
   }
   return occurance
}
console.log(charOccurrance("lilu"))


function isUnique(str){
    return new Set(str).size===str.length
}
console.log(isUnique("shamji"))


function firstLetterToUppercase(str){
  return str.toLowerCase()
            .split(' ')
            .map(word=>word.charAt(0).toUpperCase()+word.slice(1))
            .join(' ');
}
console.log(firstLetterToUppercase("Hello from kesav..!"))


function longestWordInString(str){
   return str.split(' ').reduce( (a,b)=> a.length > b.length ? a:b);
}

console.log(longestWordInString("don't think too much , whatever happens will be good"))


function isPangram(str) {
    return new Set(str.toLowerCase().replace(/[^a-z]/g,'')).size==26; 
}
console.log(isPangram("abcdefghijklmnopqrstuvwxyz"))


function firstNonRepeatingChar(str){
    for (const char of str) {
        if(str.indexOf(char)==str.lastIndexOf(char)) return char;
    }
    return null;
}
console.log(firstNonRepeatingChar("Namste javascript"))


function reverseEachWordsOfSentance(str){
   return str.split('').map(word=>word.split('').reverse().join('')).reverse().join('');
}
console.log(reverseEachWordsOfSentance("padharo more deshhh"))


function stringRotationIncludes(str1,str2){
    return str1.length==str2.length&&(str1+str1).includes(str2)
}
console.log(stringRotationIncludes("okay ","ayok"))


function findSubstrings(str){
    let substrings=[]
  for (let i = 0; i < str.length; i++) {
   for (let j = i+1; j<=str.length; j++) { 
    substrings.push(str.slice(i,j));  
   }
    return substrings
  }
}
console.log(findSubstrings("hello my name is kritika"))


function countWords(str){
    return str.trim().split(/\s+/).length
}
console.log(countWords("i am from jamnagar "))

function armstrong(n){
       let sum =0,temp=n;
       const digits=n.toString().length;
     while(temp > 0){
      let digit = temp % 10 ;
      sum += digit ** digits;
      temp=Math.floor(temp / 10)
}

return sum === n ;
}
console.log(armstrong(153));


function replaceSpace(str){
    return str.replace(/\s+/g,'-')
}
console.log(replaceSpace("hello from this side"))


function compareTwoString(str1,str2){
  if(str1.length!==str2.length){
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    if(str1[i]!=str2[i]){
        return false;
    }
      return true
  }
}
console.log(compareTwoString("hi","hi"))

function endWithSuffix(str,suffix){
    return str.endsWith(suffix)
}
console.log(endWithSuffix("i am exicited too learn new things","things"));

function isRotation(s1, s2) {
    return s1.length === s2.length && (s1 + s1).includes(s2);
  }

  function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;
  
    const map1 = {}, map2 = {};
  
    for (let i = 0; i < s.length; i++) {
      let c1 = s[i], c2 = t[i];
  
      if ((map1[c1] && map1[c1] !== c2) || (map2[c2] && map2[c2] !== c1)) {
        return false;
      }
  
      map1[c1] = c2;
      map2[c2] = c1;
    }
  
    return true;
  }
  