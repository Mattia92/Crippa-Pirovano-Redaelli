$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "getCourses.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            console.log($('.queryDB li'));
            var arrLi = $('.queryDB li');
            for(var i=0;i<courses.length;i++){
               
               var el= "<p>"+ courses[0].description +"</p>";
               console.log(el);
               console.log(arrLi.eq(i));
               arrLi.eq(i).html(el);
                
            }
           
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}