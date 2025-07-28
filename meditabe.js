function lengthOfLastWord(s) {
    
    const words = s.trim().split(" ");
    
    return words[words.length - 1].length;
}

// DELETE FROM Person
// WHERE id NOT IN (
//     SELECT MIN(id)
//     FROM Person
//     GROUP BY email
// );

let n = 4;


for (let i = 1; i <= n; i++) {
    let line = "";
    
    for (let j = 1; j <= n - i; j++) {
        line += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        if (k <= i) {
            line += (i - k + 1);  
        } else {
            line += (k - i + 1);  
        }
    }
    console.log(line);
}

for (let i = n - 1; i >= 1; i--) {
    let line = "";

    for (let j = 1; j <= n - i; j++) {
        line += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        if (k <= i) {
            line += (i - k + 1);  
        } else {
            line += (k - i + 1);  
        }
    }

    console.log(line);
}

function isValid(s) {
    let stack = [];
    let map = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    for (let char of s) {
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else {
        if (stack.length === 0 || stack.pop() !== map[char]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }

  //transpose of a matrix
 let matrix = [
    [1, 2, 3],
    [4, 5, 6]
   ];
   let rows = matrix.length, cols = matrix[0].length;
  let transposed = [];
  for (let i = 0; i < cols; i++) {
    transposed[i] = [];
    for (let j = 0; j < rows; j++) {
      transposed[i][j] = matrix[j][i]
    }
  }
  console.log(transposed);