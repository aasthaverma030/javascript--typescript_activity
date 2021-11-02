
var wickets = 0;
var runs = 0;

function display(){
if(document.getElementById("teamA").value==document.getElementById("teamB").value){
   return alert("Team name can't be same");
   
 }if((document.getElementById("teamA").value=="") && (document.getElementById("teamB").value=="")){
   return alert("Fill the fields required");
 }
 if((document.getElementById("scoreA").value) >(document.getElementById("scoreB").value)) {
        document.getElementById("win").innerHTML = document.getElementById("teamA").value +"  "+ "won by"+"  "+(document.getElementById("scoreA").value)+"  "+"runs";
        
      }else{
        document.getElementById("win").innerHTML = document.getElementById("teamB").value +"  "+ "won by"+"  "+(document.getElementById("scoreB").value)+"  "+"runs";
        
      }

}