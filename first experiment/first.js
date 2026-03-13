function calculateResult(){
    const n =document.getElementById("subject").value; 
    let total=0;

for(let i=0;i<n;i++){
    let x = parseFloat(prompt("enter the subject number" +(i+1)));
    total+=x;

}

let avg=total/n;
let grade;
if(avg>90){
    grade="A+";
}
else if(avg>=75){
    grade="B";
}
else if(avg>=60){
    grade="C"
}
else if(avg>=40){
    grade="D"
}
else(avg<40);{
    grade="F"
}

if(avg>=40){
    result="pass"
}
else{
    result="fail"
}



document.getElementById("result").innerHTML="Total Marks"+total +"<br/>"+"äverage marks" + avg.toFixed(2)+ "<br/>" + "grade:" + grade + "<br/>"
}