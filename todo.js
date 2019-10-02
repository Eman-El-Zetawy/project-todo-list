var input = document.getElementById("input");
var outbox = document.getElementById("outbox");
var inbox = document.getElementById("inbox");
var iconx = document.getElementById("iconX");
var li = document.createElement("li");
var test =document.getElementById("test");
var radio = document.getElementById("radio");
var inra =document.getElementById("inra");
   input.addEventListener("click" , function  () {
   iconx.innerHTML= "X" ;                        });
   iconx.addEventListener("click" ,function  (){
       // test.innerHTML=" ";
   test.innerHTML+='<li><input type="radio" id="inra" ><span id="radio"></span> </li>'  ;               });
   inra.addEventListener("click" , function (){
       var inputValue =input.value;
       console.log(inputValue) ;
        radio.innerHTML= input.value ;
   });
