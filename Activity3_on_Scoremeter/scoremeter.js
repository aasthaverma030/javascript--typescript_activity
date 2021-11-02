var totalval ;

var arruserValue =[]
function getTotal(){
    var arruserValue = document.getElementById('score').value;

    for(let i =0 ; i<=arruserValue.length; i++){

     console.log(arruserValue[i]);
    
    var a = arruserValue[0] *1;
    var b = arruserValue[2] *2;
    var c = arruserValue[4] *3;
    var d = arruserValue[6] *4;
    var e = arruserValue[8] *6;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
     totalval = a+b+c+d+e;
     document.getElementById('total').innerHTML =totalval;
    }
}