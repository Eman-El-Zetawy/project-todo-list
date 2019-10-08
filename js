 /////////////////////page javascript

        var input = document.getElementById("input");
        var div = document.getElementById("div");
       var imgg1 = document.getElementById(" imgg1");
       var imgg2 = document.getElementById(" imgg2");
       var counter = document.getElementById("counter");
        var inbox = document.getElementById("inbox");
        var icon_add = document.getElementById("icon-add");
        var icon_empty = document.getElementById("icon-empty");
        var ul_li = document.getElementById("ul-li");
        var n=0;
        var s=false;

        ///////////// variable of data

        var i=1;
        var arr=[];
        var obj={};

        //////////////////////////// add event listener 

          input.addEventListener("click",function(){  input.value=""; });

          
          input.addEventListener("input",change_input);
          
          
          icon_add.addEventListener("click" ,main);

         
          
          function main (){
                  if(  input.value !== ""){
                 
                 
                  obj={
                  id : i++ ,
                  value :input.value,
                  bool:false 
                }
                 arr.push(obj);
                console.log(obj);console.log(arr);
                if(n++===0){
                creat_div();}
                document.getElementById("counter").innerHTML=arr.length ;
                
                 creat_li (); 
          
                      document.getElementById("icon-empty").addEventListener("click",click_icon_empty);
                      document.getElementById("icon-x").addEventListener("click",click_x); 
                      document.getElementById( "Complete-all").addEventListener("click",click_complete_all); 
                      document.getElementById("Clear-Completed").addEventListener("click",click_clear_complete);
                      document.getElementById("Completed").addEventListener("click",click_complete);
                      document.getElementById("Uncomplete").addEventListener("click",click_uncomplete);
                      document.getElementById("All").addEventListener("click",click_all);

                   s=true;  
              }
              else {
              console.log("This input is  empty");}
        };
        function change_input(){
              this.style="background:rgb(223, 207, 207)";
              inbox.style="background:rgb(223, 207, 207)";
              document.getElementById("icon-add").innerHTML='<img src="icon add.png" alt="icon add.png"  id="icon-add" class="icon-add"/>' ;
             

            
 };
 function creat_div(){

 div.innerHTML='<div id="text-up" class="text-up">'+
                   '<img  src="icon right.png" id="icon-right"  class="icon-right" alt="icon right.png" />'+
                   '<span id="Complete-all" class="Complete-all" > Complete all tasks</span> '+
                   '<span id="Clear-Completed" class="Clear-Completed"> Clear Completed</span>'+
              '</div>'+
               '<p><hr></p> '+ '<ul  id="ul-li" class="ul-li">'+'</ul>'+
               '<p><hr></p>'+
               ' <div id="text-down" class="text-down" > '+
              ' <span id="tasks-left" class="tasks-left" ><span id="counter">0 </span> tasks left</span>'+
               '<span id="Completed" class="Completed" >Completed</span>'+  
               '<span id="Uncomplete" class="Uncomplete">Uncomplete</span>'+
               '<span id="All"  class="All" >All</span>'+  
               '</div> ';

 }

      function creat_li (){
     document.getElementById("ul-li").innerHTML+='<li class="text" id="text"><img src= "icon empty.png" id="icon-empty" class="icon-empty"></img><span id="span"class="span">'+document.getElementById("input").value+'</span><img  src="icon x.png" id="icon-x" class="icon-x"></img></li>';
      }


        function click_icon_empty() { 
                  document.getElementById("icon-empty").innerHTML='<img src="icon 1 right.png" alt="icon 1 right.png" id="icon1right" class="icon1right">'+'</img>';
                document.getElementById("span").style= "text-decoration-line :line-through ";
                obj.bool=true;
                console.log(obj);
        }
       
        function click_x(obj) {
        arr.pop(obj);
        document.getElementById("text").innerHTML="";
       console.log(arr);
        document.getElementById("counter").innerHTML=arr.length ;
        }
       function click_complete_all(){
    arr.forEach(object => {
      document.getElementById("icon-empty").innerHTML='<img src="icon 1 right.png" alt="icon 1 right.png" id="icon1right" class="icon1right">'+'</img>';
      document.getElementById("span").style= "text-decoration-line :line-through ";
      object.bool=true;
      console.log(object);
      });
      console.log(arr);
    }

    function click_clear_complete(){
      arr.forEach(object=>{
        if(object.bool){
          arr.pop(object);
        document.getElementById("text").innerHTML="";
       document.getElementById("counter").innerHTML=arr.length ;
        }}); console.log(arr); }

        function click_complete (){
          var count=arr.length;
          arr.forEach(object=>{
            if(!object.bool){
            document.getElementById("text").innerHTML="";
           document.getElementById("counter").innerHTML=--count ;
           console.log(arr);
           } });
        }
        function click_uncomplete (){
         var count =arr.length ;
         arr.forEach(object=>{
          if(object.bool){
          document.getElementById("text").innerHTML="";
         document.getElementById("counter").innerHTML=--count ;
         console.log(arr);
        }});
        }
        function click_all (){
         
          arr.forEach(object=>{
            // document.getElementById("text").innerHTML=object.value;
 console.log(arr);
          });document.getElementById("counter").innerHTML=arr.length;
        }
      
