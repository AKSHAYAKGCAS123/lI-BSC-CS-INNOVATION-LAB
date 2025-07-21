//call back function in js:
//A callback function in javascript is a function that is passed as an argument to another function,
//and it is executed after the completion of that function
//It is commonly used for:
//handling asynchronous operation(like API calls,timeouts,or event handling)
//customizing behavouir inside function
function SendMessage(){
    let x=10;
    console.log("Hai js");
    console.log(x);//inside
}
SendMessage();
function check(){
    if(true){
        let name="webdevelopement";
        var iscloudy=true;
        console.log(name);
        

    }
    console.log(iscloudy);
}
check() 

function First(){
    console.log("This is my first function")
}
First()
function Second(callback){
    console.log("This my second function");
    setInterval
    
}
Second(First);

let count=0;
let Input=()=>{
    count++;
    console.log(count);
    if(count<5){

    }
}
Input();

