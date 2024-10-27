var palindrom, lname="malaxalam" ,len=lname.length-1

for (i=0;i<len;i++)
{
    if (lname[i]==lname[len--])
       {  palindrom = true}
    else 
        {  palindrom = false}
    
}

if (palindrom)
    { console.log("Its a Palindrom")}
 else 
     { console.log("Its Not a Palindrom")}


     
