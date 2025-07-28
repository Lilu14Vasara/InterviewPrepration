function bubblesort(arr){
    for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < arr.length; j++) {
        if (arr[j]>arr[j+1]) {
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
        }
       }
    }
    return arr
}

console.log(bubblesort([2,5,6,7,8,1]));

function insertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
       let key=arr[i];
       let j=i-1;
       while (j>=0 && arr[j]>key) {
        arr[j+1]=arr[j];
        j--
       }
       arr[j+1]=key
        
    }
    return arr
}
console.log(insertionSort([5,3,5,6,7,1]));

function selectionSort(arr){
    for (let i = 0; i < arr.length; i++) {
       let min=i
       for (let j = i+1; j < arr.length; j++) {
        if(arr[j]<arr[min]){
            min=j
        }
       }
    }
    if(min!=arr){
        [arr[i],arr[min]]=[arr[min],arr[i]]
    }
    return arr
}
console.log(selectionSort([5,3,67,99,55,5]));

function mergeSort(arr){
    if (arr.length<=1) {
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let left=mergeSort(arr.slice(0,mid));
    let right=mergeSort(arr.slice(mid));

    return merge(left,right);
}
function merge(left,right){
    const result=[];
    while(left.length&& right.length){
        result.push(left[0]<right[0]?left.shift():right.shift());
    }
    return result.concat(left,right)
}
console.log(mergeSort([3,4,5,6,8,7,9,2,]));


function binarySearch(arr,target){
    
    let start=0,end=arr.length-1;

    while(start<=end){
        let mid=Math.floor((start+end)/2)
        if (arr[mid]==target) {
            return mid;
        }
        else if(arr[mid]<target){
            start=mid+1
        }
        else {
            end=mid-1
        }
    }
    return -1
}
console.log(binarySearch([5,6,7,8,9,1,2],7));


function linearSerch(arr,target){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===target){
            return i
        }
        
    }
    return -1
}
console.log(linearSerch([4,3,6,8,7,5,3],7));
