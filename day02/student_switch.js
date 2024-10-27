

function student_grade(mark)
{
    

switch(mark){

case (35):
    {
        console.log("Failed")
        break
    }
case 50:
     {
        return ("Average")

       // break
    }
case 80:
     {
        console.log("Good")
        break
    }
case 90:
        {
           console.log("Excellent")
           break
       }
default:
    {
        console.log("Invalid Mark")
        
    }
}
}


console.log( student_grade(50))
student_grade(80)
student_grade(1)