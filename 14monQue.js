function isPalindrome(x) {
    if (x < 0) return false; 

    let str = x.toString();
    let reversed = str.split('').reverse().join('');
    
    return str === reversed;
}


function isPalindrome(x) {
    if (x < 0) return false;

    let original = x;
    let reversed = 0;

    while (x > 0) {
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    return original === reversed;
}



function climbStairs(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let a = 1; 
    let b = 2; 

    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}


function romanToInt(s) {
    const roman = {
        I: 1, V: 5, X: 10,
        L: 50, C: 100,
        D: 500, M: 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        let current = roman[s[i]];
        let next = roman[s[i + 1]];

        if (next > current) {
            total += (next - current);
            i++; 
        } else {
            total += current;
        }
    }

    return total;
}

function strStr(haystack, needle) {
    let hLen = haystack.length;
    let nLen = needle.length;

    
    if (nLen === 0) return 0;

    for (let i = 0; i <= hLen - nLen; i++) {
        let sub = haystack.substring(i, i + nLen);
        if (sub === needle) {
            return i;
        }
    }

    return -1; 
}