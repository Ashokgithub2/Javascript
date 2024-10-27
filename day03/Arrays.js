function search_key(key){
    let i = 0 , count = 0
for (i = 0 ; i<arr.length;i++){

    if(arr[i]==key){
        count++;
    }
}
return count
}

const key = process.argv[2];
const arr= [13,4,5,6,2,13,4]
console.log(key + " Occured " + search_key(key) + " Times in " + arr)


