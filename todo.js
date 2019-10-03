var input = document.getElementById("input");
var outbox = document.getElementById("outbox");
var inbox = document.getElementById("inbox");
var iconx = document.getElementById("iconX");
var li = document.createElement("li");
var test =document.getElementById("test");
var radio = document.getElementById("radio");
var inra =document.getElementById("inra");

   input.addEventListener("click" , function  () {
   iconx.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>' ;                        });
   iconx.addEventListener("click" ,function  (){
       // test.innerHTML=" ";
   test.innerHTML+='<li><input type="radio" id="inra" ><span id="radio"></span> </li>'  ;               });
//    inra.addEventListener("click" , function (){
//        var inputValue =input.value;
//        console.log(inputValue) ;
//         radio.innerHTML= input.value ;
//    });
   // if(event.which===13){
    //     console.log("ghafbd");
    // }
    // test.appendChild(li);
           // li.value="fjklhk";
    // input.appendChild( document.createTextNode(input));
