function launchBrowser(browser_type)
{
if(browser_type == "Chrome"){
    console.log("Open Chrome Browser")
} else if (browser_type == "Edge"){
    console.log("Open Edge Browser")
} else if  (browser_type == "Firefox")
{
        console.log("Open Firefox Browser")
}
else {
    console.log("Un-Supported Browser")
}




}

function runTests(test_type){
switch (test_type)
{

case "smoke": {
    console.log("Smoke Test Started")
    break
}
case "sanity":
    console.log("Sanity Test Started")
    break
case "regression":
    console.log("Regression Test Started")
    break
default :
    console.log("Please choose Test to run ")
}

}

launchBrowser("Firefox")
runTests("smoke")

launchBrowser("Chrome")
runTests("regression")

console.log(1==true)
console.log(2=='2')
console.log(2=="2")


