//Given an array num of numbers with the lenght of n find the target 6 in the array.
//Return the index if the target is found else null.  
function binarysearch(arr,target){
    left =  0;
    right = arr.length -1;

    while(left<=right){
        let middle = Math.floor([left+right]/2);

        if(arr[middle]=== target){
          return middle
        }
        else if (arr[middle]> target){
        right = middle - 1;
        }
         else{
            left = middle + 1;
         }
    }
     return null;

}
let arr = [-5,2,4,6,10]
let target = 6;
console.log(binarysearch(arr,target));













