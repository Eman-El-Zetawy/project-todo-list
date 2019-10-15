  /////////////////////page javascript
  var input = document.getElementById("input");
  var div = document.getElementById("div");
  var inbox = document.getElementById("inbox");
  var icon_add =document.getElementById("icon-add");
  ///////////////////////////// variable of data
  var arr=[];
  var obj={};
  //////////////////////////// add event listener 
    input.addEventListener("click",function(){  input.value=""; });
    input.addEventListener("input",change_input);
    icon_add.addEventListener("click" ,main); 
  /////////////////////////////function key Enter
    input.addEventListener("keydown",function(e){
        if(e.key==="Enter"){
          main();
          input.value="";
        } });
    ///////////////////////FUNCTION MAIN 
    function main (){
            if(  input.value !== ""){
            obj={
            value :input.value,
            bool:false 
          }
           arr.push(obj);
           draw(arr);
        }
        else {
        alert("This input is empty");}
        }
  function change_input(){
         this.style="background:rgb(223, 207, 207)";
        inbox.style="background:rgb(223, 207, 207)";
        icon_add.innerHTML='<img src="icon add.png" alt="icon add.png"  id="icon-add" class="icon-add"/>' ;
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
   var ul_li = document.getElementById("ul-li");
  ul_li.innerHTML+= '<li class="text" id="text">'+'<p class="p">'+'<img src= "icon empty.png" onclick="click_icon_empty(event)" id="icon-empty"  ss = '+ arr.indexOf(obj) +' class="icon-empty" />'+'</p>'+'<span id="span" class="span">'+obj.value+'</span>'+'<img  src="icon x.png" id="icon-x" onclick="click_x(event)" mm = '+ arr.indexOf(obj) +' class="icon-x">'+'</li>';
}
////////////////////////////////////////functions 
function click_icon_empty(event) {
const index = event.target.getAttribute('ss');
arr[index].bool=!arr[index].bool;
draw(arr);
}
  function click_x(event) 
  {
    const index = event.target.getAttribute('mm');
  arr.splice(index,1);
  draw(arr);  
  }
 function click_complete_all(){
arr.forEach(ob=>ob.bool=true);
draw(arr);
}
function click_clear_complete(){ 
const tt = arr.filter(ob =>ob.bool===false );
   arr = tt;
   draw(arr);
}
  function click_complete (){ 
    var t= arr.filter(ob=>ob.bool ===true);
      draw(t); 
  }
  function click_uncomplete (){
    var t= arr.filter(ob=>ob.bool ===false);
      draw(t); 
  }
  function click_all (){
    draw(arr);
  }
 ///////////////////////function draw
  function draw (arr){
     div.innerHTML="";
    creat_div();
    arr.forEach((ob , i)=> {
      creat_li(ob);
     if(ob.bool){
      document.getElementsByClassName("p")[i].innerHTML ='<img src="icon1right.png"  alt="icon1right.png" onclick="click_icon_empty(event)" id="icon1right"  class="icon1right" ss = '+ i +' />';
      document.getElementsByClassName("span")[i].style= "text-decoration-line :line-through ";
     } else {
      document.getElementsByClassName("p")[i].innerHTML ='<img src= "icon empty.png" onclick="click_icon_empty(event)" id="icon-empty"  ss = '+ i +' class="icon-empty" />';
      document.getElementsByClassName("span")[i].style= "text-decoration-line :none ";
    }
    });
     document.getElementById("counter").style = "color:black" ;
     document.getElementById("counter").innerHTML=arr.length ;
  }

