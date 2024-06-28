function getperc() {

    let name = prompt("enter your name");
    let balance=document.getElementById("bal1").value;
    let zakat= balance/100*2.5
    
 document.getElementById("change").innerHTML=(`Dear ${name} your zakat is ${zakat}`)






}