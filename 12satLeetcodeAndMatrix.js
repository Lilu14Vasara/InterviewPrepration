function countNotes(number) {
    let arr=[2000,500,200,100,50,20,10,5,2,1];

    let result={};
    for (const num of arr) {
        let count=Math.floor(number/num);

        if(count>0){
            result[num]=count;
            number=number%num
        }
    }
    return result
}
console.log(countNotes(2530))


// //matrix print
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(' '));
  }


//transpose of a matrix
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6]
//   ];
  let rows = matrix.length, cols = matrix[0].length;
  let transposed = [];
  for (let i = 0; i < cols; i++) {
    transposed[i] = [];
    for (let j = 0; j < rows; j++) {
      transposed[i][j] = matrix[j][i]
    }
  }
  console.log(transposed);

// //print diagonal
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  console.log("Primary Diagonal:");
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][i]);
  }
  
  console.log("Secondary Diagonal:");
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][matrix.length - 1 - i]);
  }

//   console.log(matrix.length);


// //Spiral matrix
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  let top = 0, bottom = 2, left = 0, right = 2;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) console.log(matrix[top][i]);
    top++;
    for (let i = top; i <= bottom; i++) console.log(matrix[i][right]);
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) console.log(matrix[bottom][i]);
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) console.log(matrix[i][left]);
      left++;
    }
  }


// //serch in row-wise and column wise
// let matrix = [
//     [10, 20, 30],
//     [15, 25, 35],
//     [27, 29, 37]
//   ];
  let target = 29;
  let row = 0, col = matrix[0].length - 1;
  let found = false;
  
  console.log(matrix[0].length - 1);
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      found = true;
      break;
    } else if (matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }
  console.log(found ? "Found" : "Not Found");


// //lower tringle
// let mat = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
//   for (let i = 0; i < mat.length; i++) {
//     let line = '';
//     for (let j = 0; j <= i; j++) {
//       line += mat[i][j] + ' ';
//     }
//     console.log(line);
//   }

// //upper tringlr
// for (let i = 0; i < mat.length; i++) {
//     let line = '';
//     for (let j = 0; j < mat[0].length; j++) {
//       if (j >= i) line += mat[i][j] + ' ';
//       else line += '  ';
//     }
//     console.log(line);
//   }


//rotation 90
// let mat = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
//   // Transpose
//   for (let i = 0; i < mat.length; i++) {
//     for (let j = i; j < mat[0].length; j++) {
//       [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
//     }
//   }
  
//   // Reverse rows
//   for (let i = 0; i < mat.length; i++) {
//     mat[i].reverse();
//   }
  
//   console.log(mat);


// //sum of row & column
// let matrix = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
//   ];
  
//   console.log("Row sums:");
//   for (let row of matrix) {
//     console.log(row.reduce((a, b) => a + b, 0));
//   }
  
//   console.log("Column sums:");
//   for (let j = 0; j < matrix[0].length; j++) {
//     let sum = 0;
//     for (let i = 0; i < matrix.length; i++) {
//       sum += matrix[i][j];
//     }
//     console.log(sum);
//   }


//snake patten print
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      console.log(...matrix[i]);
    } else {
      console.log(...matrix[i].reverse());
      matrix[i].reverse(); // reset
    }
  }






