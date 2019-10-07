 // page javascript 
      ////////////////////////// var name of id 
      var input = document.getElementById("input");
      var iconx = document.getElementById("iconX");
      //var ulli = document.getElementById("ulli");
      var init = document.getElementById("init0");
    //   var aul = document.getElementById("au1"); 
      var au2 = document.getElementById("au2");
      var a2 = document.getElementById("a2");
      var a3 = document.getElementById("a3");
      var a4 = document.getElementById("a4");  
      var arr=[];
      var obj={};
     
        //////////////////////////// add event listener  & functin 
      input.addEventListener("click" , function  () {
        input.value=""; 
      });
      input.addEventListener("input" , function  () {
        iconx.innerHTML='<img src="o+.png" alt="kk"/>' ;
        });
      ///////////////////// enterلازم اغيرها ل
        var i=0;
        iconx.addEventListener("click" ,function  (){
                if(input.value!==""){
          arr.push(input.value);
          obj={
              id : i++ ,
              array :[arr],
              bool:false 
          } ;
          init.innerHTML=arr.length ;

        var createSpan =document.createElement('SPAN');   createSpan.setAttribute("id", "span");    
        var li = document.createElement('LI');          li.setAttribute("id", "test");
        // var test =document.getElementById("test");
        var img =document.createElement('IMG');    img.setAttribute("id", "s0"); img.setAttribute("src", "oo.png");
    //    var so =document.getElementById("s0");
        var img1 =document.createElement('IMG');  img1.setAttribute("id", "sx");  img1.setAttribute("src","xx.png");
        // var sx = document.getElementById("sx");
        li.appendChild(img);
             var w1=document.createTextNode(input.value);
              createSpan.appendChild(w1);
            li.appendChild(createSpan);

             li.appendChild(img1); 
            ulli.appendChild(li);
            console.log(input.value);
            console.log(arr.length);
            console.log(obj);
            console.log(arr);
        //  var span = document.getElementById("span");
           
                  
    }  })
///////////////////////////////////////////THE END 


            document.getElementById("s0").addEventListener("click" ,function (){
            document.getElementById("s0").innerHTML='<img src="ot.png" alt="kk"/>';
            document.getElementById("span").style= "text-decoration-line :line-through ";
                    });

            document.getElementById("sx").addEventListener("click" , function () {
            arr.pop(input.value);
            document.getElementById("init0").innerHTML=arr.length; 
            document.getElementById("test").innerHTML="";
                });
                   
             document.getElementById("au1").addEventListener("click" , function (){
            document.getElementById("s0").innerHTML= '<img src="ot.png" alt="kk"/>' ;
            document.getElementById("span").style = "text-decoration-line:line-through" ; 
                });