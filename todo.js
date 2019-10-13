  /////////////////////page javascript
var input = document.getElementById("input");
var div = document.getElementById("div");
var inbox = document.getElementById("inbox");
var icon_empty = document.getElementById("icon-empty");
var ul_li = document.getElementById("ul-li");
var text = document.getElementById("text");
///////////// variable of data
var n=0;
var  ss , id=0;
var arr=[];
var obj={};
//////////////////////////// add event listener 
  input.addEventListener("click",function(){  input.value=""; });
  input.addEventListener("input",change_input);
    document.getElementById("icon-add").addEventListener("click" ,main);
  input.addEventListener("keydown",function(e){
      if(e.key==="Enter"){
        main();
      }
  });
  ///////////FUNCTION MAIN 
  function main (){
          if(  input.value !== ""){
          obj={
          id : id++ ,
          value :input.value,
          bool:false 
        }
         arr.push(obj);
         drow(arr);
      }
      else {
      console.log("This input is  empty");}
      }
function change_input(){
      this.style="background:rgb(223, 207, 207)";
      inbox.style="background:rgb(223, 207, 207)";
      document.getElementById("icon-add").innerHTML='<img src="icon add.png" alt="icon add.png"  id="icon-add" class="icon-add"/>' ;
};
function creat_div(){
div.innerHTML='<div id="text-up" class="text-up">'+
           '<img  src="icon right.png" id="icon-right"  class="icon-right" alt="icon right.png" />'+
           '<span id="Complete-all" class="Complete-all" onclick="click_complete_all()" > Complete all tasks</span> '+
           '<span id="Clear-Completed" class="Clear-Completed" onclick="click_clear_complete()"> Clear Completed</span>'+
      '</div>'+
       '<p><hr></p> '+ '<ul  id="ul-li" class="ul-li">'+'</ul>'+
       '<p><hr></p>'+
       ' <div id="text-down" class="text-down" > '+
      ' <span id="tasks-left" class="tasks-left" ><span id="counter">0 </span> tasks left</span>'+
       '<span id="Completed" class="Completed" onclick="click_complete()">Completed</span>'+  
       '<span id="Uncomplete" class="Uncomplete" onclick="click_uncomplete()">Uncomplete</span>'+
       '<span id="All"  class="All" onclick="click_all()">All</span>'+  
       '</div> ';
}
function creat_li (obj ){
document.getElementById("ul-li").innerHTML+= '<li class="text" id="text">'+'<img src= "icon empty.png" onclick="click_icon_empty(event)" id="icon-empty"  ss = '+  arr.indexOf(obj) +' class="icon-empty" >'+'</img>'+'<span id="span" class="span">'+obj.value+'</span>'+'<img  src="icon x.png" id="icon-x" onclick="click_x(event)" mm = '+  arr.indexOf(obj) +' class="icon-x">'+'</img>'+'</li>';
}
function click_icon_empty(event) {
const index = event.target.getAttribute('ss');
console.log(index);
this.innerHTML ='<img src="icon1right.png"  alt="icon1right.png"  id="icon1right" class="icon1right"></img>';
arr[index].bool=!arr[index].bool;
if(arr[index].bool){
document.getElementsByClassName("span")[index].style= "text-decoration-line :line-through ";
}else{
document.getElementsByClassName("span")[index].style= "text-decoration-line :none ";
}
console.log(arr);
}
function click_x(event) {
  const index = event.target.getAttribute('mm');
  console.log(index);
document.getElementsByClassName("text")[index].innerHTML="";
arr.splice(index,1);
console.log(arr);
document.getElementById("counter").innerHTML=arr.length ;
}
function click_complete_all(){
arr.forEach((object,i )=> {
document.getElementsByClassName("icon-empty")[i].innerHTML='<img src="icon1right.png" alt="icon1right.png" id="icon1right" class="icon1right">'+'</img>';
document.getElementsByClassName("span")[i].style= "text-decoration-line :line-through ";
object.bool=true;
console.log(object);
});
console.log(arr);
}
function click_clear_complete(){ 
for (let i =0; i< arr.length;i++){
if(arr[i].bool){ document.getElementsByClassName("text")[i].innerHTML="";}
}
const tt = arr.filter(ob =>ob.bool===false );
 console.log(tt);
 arr = tt;
document.getElementById("counter").innerHTML=arr.length ;
console.log(arr);
}
function click_complete (){ 
  var t= arr.filter(ob=>ob.bool ===true);
    drow(t); 
   console.log(t);
  console.log(arr);
}
function click_uncomplete (){
  var t= arr.filter(ob=>ob.bool ===false);
    drow(t); 
   console.log(t);
 console.log(arr);
}
function click_all (){
  drow(arr);
}
function drow (arr){
   div.innerHTML="";
  creat_div();
  arr.forEach((ob , i)=> {
    creat_li(ob);
   if(ob.bool){
    document.getElementsByClassName("icon-empty")[i].innerHTML='<img src="icon1right.png" alt="icon1right.png" id="icon1right" class="icon1right">'+'</img>';
    document.getElementsByClassName("span")[i].style= "text-decoration-line :line-through ";
   } });
  document.getElementById("counter").style = "color:black" ;
  document.getElementById("counter").innerHTML=arr.length ;
}
