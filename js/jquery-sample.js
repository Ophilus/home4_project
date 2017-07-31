$(function() {
    let mark = 1;
   $("#bt_prev").click(function(e) {
    e.preventDefault();
   mark--;
   alert('--' + mark)
   if(mark<=0){
       mark=4;
   }
    slider(mark);   
   });
   $("#bt_next").click(function(e) {
    e.preventDefault();
   mark++;
   alert("++" + mark)
   if(mark>=5){
       mark=1;
   }
    slider(mark);    
   });
    
function slider(mark){
  if(mark==1){
            $('#first-container').attr("src","img/NY_EmpireStateBuilding.jpg");
            $('#second-container').attr("src","img/NY_StatueOfLiberty.jpg");
            $('#third-container').attr("src","img/NY_FlatironBuilding.jpg");
            $('#fourth-container').attr("src","img/NY_Manh.Bridge.jpg");
    }else if(mark==2){
            document.getElementById('first-container').src='img/5.jpg';
            $('#second-container').attr("src","img/6.jpg");
            $('#third-container').attr("src","img/7.jpg");
            $('#fourth-container').attr("src","img/8.jpg"); 
    }else if(mark==3){
            $('#first-container').attr("src","img/9.jpg");
            $('#second-container').attr("src","img/10.jpg");
            $('#third-container').attr("src","img/NY_FlatironBuilding.jpg");
            $('#fourth-container').attr("src","img/NY_Manh.Bridge.jpg");
    }else{
            $('#first-container').attr("src","img/13.jpg");
            $('#second-container').attr("src","img/NY_StatueOfLiberty.jpg");
            $('#third-container').attr("src","img/NY_FlatironBuilding.jpg");
            $('#fourth-container').attr("src","img/NY_Manh.Bridge.jpg");
    }

}
    
   


});