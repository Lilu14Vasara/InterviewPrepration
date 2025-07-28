//Squre
for (let i = 0; i < 3; i++) {
    let line=""
   for (let j = 1; j < 5; j++) {
    line +='*'    
   }
    console.log(line);
}

//hollow squre
for (let i = 0; i <= 3; i++) {
    let line=""
   for (let j = 0; j < 5; j++) {
    if(i==0||i==3||j==0||j==4) {
        line+="*"
    }   
    else{
        line+=" "
    }
   }
    console.log(line);
}

//left tringle
for (let i = 0; i < 5; i++) {
    let line=""
   for (let j = 1; j <=i; j++) {
    line +='*'    
   }
    console.log(line);
}

//inverted tringle
for (let i = 5; i >= 0; i--) {
    let line=""
   for (let j = 1; j <=i; j++) {
    line +='*'    
   }
    console.log(line);
}

//right rectangle
for (let i = 0; i <= 5; i++) {
    let line=""
   for (let j = 1; j <=5-i; j++) {
    line +=' '    
   }
   for (let k = 1; k<=i; k++) {
    line +='*'    
   }
    console.log(line);
}

//pyramid
for (let i = 0; i < 5; i++) {
    let line=""
   for (let j = 1; j <=5-i; j++) {
    line +=' '    
   }
   for (let k = 1; k<=2*i-1; k++) {
    line +='*'    
   }
    console.log(line);
}

//inverted pyramid
for (let i = 5; i >=0; i--) {
    let line=""
   for (let j = 1; j <=5-i; j++) {
    line +=' '    
   }
   for (let k = 1; k<=2*i-1; k++) {
    line +='*'    
   }
    console.log(line);
}

//number left tringle
for (let i = 0; i < 5; i++) {
    let line=""
   for (let j = 1; j <=i; j++) {
    line +=j    
   }
    console.log(line);
}

for (let i = 5; i >=0; i--) {
    let line=""
   for (let j = 1; j <=i; j++) {
    line +=j    
   }
    console.log(line);
}

count=1
for (let i = 0; i <=5; i++) {
    let line=""
   for (let j = 1; j <=i; j++) {
    line +=count+' '
    count++   
   }
    console.log(line);
}


//0-1 
for (let i = 0; i <= 5; i++) {
    let line=""
   for (let j = 1; j <=i; j++) {
    line +=((i+j)%2) +' '   
   }
    console.log(line.trim());
}


for (let i =0; i <=5; i++) {
    let line=""
   for (let j = 0; j<i; j++) {
    line +=String.fromCharCode(65+j) +' '   
   }
    console.log(line.trim());
}

//hollow pyramid
for (let i = 0; i < 5; i++) {
    let line=""
   for (let j = 1; j <=5-i; j++) {
    line +=' '    
   }
   for (let k = 1; k<=2*i-1; k++) {
    if (k==1||k==2*i-1||i==n) {
        line +='*'
    }
    else{
        line+=" "
    }
        
   }
    console.log(line);
}

//diamond=pyramid+inverted pyramid
for (let i = 0; i < 5; i++) {
    let line=""
   for (let j = 1; j <=5-i; j++) {
    line +=' '    
   }
   for (let k = 1; k<=2*i-1; k++) {
        line +='*'    
   }
    console.log(line);
}
for (let i = 5; i >=0; i--) {
    let line=""
   for (let j = 1; j <=5-i; j++) {
    line +=' '    
   }
   for (let k = 1; k<=2*i-1; k++) {
        line +='*'    
   }
    console.log(line);
}





//rightarrow pattern
for (let i = 1; i <=5; i++) {
    let line=""
   for (let j = 1; j <=i; j++) {
    line +='*'    
   }
    console.log(line);
}
for (let i = 4; i >= 0; i--) {
    let line=""
   for (let j = 1; j <=i; j++) {
    line +='*'    
   }
    console.log(line);
}