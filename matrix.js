let matrix=[[1,2,3],
            [4,5,6],
            [7,8,9]
           ];

    let result=[];

    let top=0;
    let bottom=2;
    let left=0;
    let right=2;

while (top<=bottom && left<=right) {

    for (let i = left; i <=right; i++) {
        result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <=bottom; i++) {
        result.push(matrix[i][right]);
    }
    right--;

    for (let i = right; i>=left; i--) {
        result.push(matrix[bottom][i])
    }
    bottom--;

    for (let i = bottom; i >=top ; i--) {
        result.push(matrix[i][left])
    }
    left++;
    
}
console.log(result.join(","))