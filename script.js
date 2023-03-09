
let button=document.querySelector(".button");

button.onclick = function() {
let q1=document.querySelector(".question1").value;
let q2=document.querySelector(".question2").value;
    console.log(q1);
    console.log(q2);
 if (q1 <= 50 && q2 === "hot"||"Hot") {
    document.querySelector(".result").innerHTML="You are " + q1 + " years old and you prefer " + q2 + " weather. This means you are a black cat.";
    }    
    else if (q1 <= 50 && q2 === "cold"||"Cold") {
    document.querySelector(".result").innerHTML="You are " + q1 + " years old and you like " + q2 + " weather. This means you are a grey cat!";
    }  
    else if (q1 > 50 && q2 === "cold"||"Cold") {
    document.querySelector(".result").innerHTML="You are " + q1 + " years old and you like " + q2 + " weather. This means you are a tabby cat!";
    }  
     else if (q1 > 50 && q2 === "hot"||"Hot") {
    document.querySelector(".result").innerHTML="You are " + q1 + " years old and you like " + q2 + " weather. This means you are a Siamese cat!";
    }  
};
