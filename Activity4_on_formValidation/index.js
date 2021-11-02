checkpsw();
 function checkpsw(validate){
    var str = document.getElementById("psw").value;
    if(str.lenght<8){
        document.getElementById('message').innerHTML ="Password must be 8 character";
        document.getElementById('meassage').style.color = "Red";
        return("to shorts");
}else if(str.search(/[0-9]/)== -1){
    document.getElementById('meassage').innerHTML ="Atleast 1 numeric value";
    document.getElementById('meassage').style.color = "Red";
    return("no_number");

}else if(str.search(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/)== -1){
    document.getElementById('meassage').innerHTML ="Atleast 1 special chracter";
    document.getElementById('meassage').style.color = "Red";
    return("no_letter");

}
document.getElementById("meassage").innerHTML ="Succesful";
document.getElementById('meassage').style.color = "green";
return("ok");
}