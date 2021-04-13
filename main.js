function check(){
    var mam=document.getElementById("password").value;
    if(mam=="Me@123"){
        document.getElementById("nan").style.color="black";
        document.getElementById("nan").innerHTML="Access Granted"; 
        setTimeout(move(),7000);
    }
    else{
        document.getElementById("nan").style.color="red";
        document.getElementById("nan").innerHTML="Access denied"; 
    }
}
function move(){
window.location="second.html";
}