/////////////////////page javascript
var input = document.getElementById("input");
var inbox = document.getElementById("inbox");
var icon_add = document.getElementById("icon-add");
var icon_empty = document.getElementById("icon-empty");
var ul_li = document.getElementById("ul-li");
var counter = document.getElementById("counter");
///////////// variable of data
var i=1;
var arr=[];
var obj={}; 
////////////////functions
function change_input(){
this.style="background:rgb(223, 207, 207)";
inbox.style="background:rgb(223, 207, 207)";
document.getElementById("icon-add").innerHTML='<img src="icon add.png" alt="icon add.png"  id="icon-add" class="icon-add"/>' ;
};
function creat_li (obj , arr){
var createSpan =document.createElement('SPAN');   createSpan.setAttribute("id", "span"); 
createSpan.setAttribute("class", "span");
var li = document.createElement('LI');     li.setAttribute("id", "test");
var img =document.createElement('IMG');    img.setAttribute("src", "icon empty.png");   
img.setAttribute("class", "icon-empty");  img.setAttribute("id", "icon-empty"); 
var img1 =document.createElement('IMG');    img1.setAttribute("id", "icon-x");
img1.setAttribute("src","icon x.png"); img1.setAttribute("class", "icon-x");img.setAttribute("alt" ,"icon-x");
li.appendChild(img);
var input_value=document.createTextNode(input.value);
createSpan.appendChild(input_value);
li.appendChild(createSpan);
li.appendChild(img1); 
var ul_li=document.getElementById("ul-li");
ul_li.appendChild(li);
// console.log(arr);
// console.log(img1.id); 
var obj=obj , arr=arr ;
​img.addEventListener("click",change_icon);
}
//////////////////////////// add event listener 
input.addEventListener("click",function(){  input.value=""; });
input.addEventListener("input",change_input);
icon_add.addEventListener("click" ,main);
//////////////function main 
function main (){
if(  input.value !== ""){


obj={
id : i++ ,
value :input.value,
bool:false 
}
arr.push(obj);
console.log(arr);

counter.innerHTML=arr.length ;
counter.style="color:black";
creat_li (obj,arr);
console.log(obj);
}
else {
console.log("This input is  empty");}
};
function click_icon_empty(){
var img2= document.createElement("IMG");
img2.src="icon 1 right.png";
img2.alt="icon 1 right.png";
img2.id="icon1right";
// console.log(img2);
// this.innerHTML=img2;
document.getElementById("span").style= "text-decoration-line :line-through ";
}
function change_icon (obj , arr){
    console.log(obj , arr);
    console.log(obj.value);
click_icon_empty();
}