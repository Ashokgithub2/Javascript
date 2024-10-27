const { join } = require("path")

const arr1=[2,3,4,5,6,2]
const arr2=[2,3,6,8,9,1]


function merge_array(arr){
for ( i = 0 ; i < arr.length;i++)
{
    if(arr[i]!=-1){
    for (j=i+1;j<=arr.length;j++)
    {
        if ( arr[i]===arr[j] ){
        arr[j] = -1 ;
    }
}
    }
}
return arr;
}

function display(array){
let i=0
    for ( i = 0 ; i < array.length;i++)
        if(array[i] != -1){
        console.log(array[i])
        }
        console.log(array)
}


display(merge_array(arr1.concat(arr2)))

