

var arrival_click = false;
  var popular_click = true ;
  var special_click = false ;
  
   function arrival(){
    
    $("#arrival_box").css("display", "inline-block") ;
    $("#popular_box").css("display", "none");
    $("#special_box").css("display", "none");

   if(arrival_click == false)
   {
     $("#arrival").css("color", "blue");
     $("#arrival").css("text-decoration", "underline");
   }

     $("#special").css("color", "black");
     $("#special").css("text-decoration", "none");

     $("#popular").css("color", "black");
     $("#popular").css("text-decoration", "none");

   

   arrival_click = true ;
   popular_click= false;
   special_click= false;

 }

  function popular(){
    
    $("#arrival_box").css("display", "none") ;
    $("#popular_box").css("display", "inline-block");
    $("#special_box").css("display", "none");

     if(popular_click == false)
   {
     $("#popular").css("color", "blue");
     $("#popular").css("text-decoration", "underline");
   }

     $("#special").css("color", "black");
     $("#special").css("text-decoration", "none");

     $("#arrival").css("color", "black");
     $("#arrival").css("text-decoration", "none");

   

   arrival_click = false ;
   popular_click= true;
   special_click= false;
   
 }


   function special(){
    
    $("#arrival_box").css("display", "none") ;
    $("#popular_box").css("display", "none");
    $("#special_box").css("display", "inline-block");


    if(special_click == false)
   {
     $("#special").css("color", "blue");
     $("#special").css("text-decoration", "underline");
   }

     $("#arrival").css("color", "black");
     $("#arrival").css("text-decoration", "none");

     $("#popular").css("color", "black");
     $("#popular").css("text-decoration", "none");

   

   arrival_click = false ;
   popular_click= false;
   special_click= true;
  
 }
