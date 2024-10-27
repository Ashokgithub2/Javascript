const nums = [2, 4, 7, 8, 11, 14] ,target = 18; 

for ( i = 0 ; i < nums.length ; i++ ) 
{
    for ( j= i+1 ; j <=nums.length ; j++){
     if ( (nums[i] + nums[j])  === target ){
        console.log("Sumed pair is: "+ nums[i] +", "+ nums[j] )
     }

    }
}
