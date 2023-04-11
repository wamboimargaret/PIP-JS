//Write a function to Sort the array below.
// let arr = [5,7,9,2,40,30,10,2,3,1]

function divideArr(arr){
    if(arr.length <= 1){
        return arr;
    }

    const middle = Math.floor(arr.length/2);
    const left = arr.slice(0,middle);
    const right= arr.slice(middle);

    return mergeArr(divideArr(left),divideArr(right))
}

function mergeArr(left,right){
    const emptyArr = []

    while(left.length && right.length){
        if(left[0] < right[0]){
            emptyArr.push(left.shift());
        }
        else{
             emptyArr.push(right.shift());
       }

    }
    return[...emptyArr,...left,...right]

}

let arr = [5,7,9,2,40,30,10,2,3,1]
console.log(divideArr(arr));


 //Given an unsorted array of numbers return the sorted array in descending order
 //let array=[123,89,5,23,9,56]

    function divideArray(array){
        if(array.length <= 1){
            return array;
        }

 let mid = Math.floor(array.length/2);
 let left = array.slice(0,mid);
 let right= array.slice(mid);

 return combineArray(divideArray(left),divideArray(right))
}

 function combineArray(left,right){
    let emptyArray= []

    while(left.length && right.length){
        if(left[0] > right[0]){
            emptyArray.push(left.shift());
        }
        else{
             emptyArray.push(right.shift());
       }

    }
    return[...emptyArray,...left,...right]

}

let array=[123,89,5,23,9,56]
console.log(divideArray(array));

