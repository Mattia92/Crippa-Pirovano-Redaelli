$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "/assets/php/getCourses.php", //Relative or absolute path to file.php file
        data: {course:ID},
        success: function(response) {
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            var el="";
            for(var i=0;i<courses.length;i++){
                console.log(courses[i].Title);
                
                el+="<div class='course' id='c"+courses[i].ID+"'><h2>"+courses[i].Title+"</h2><span>"+courses[i].Description+"</span></div>";             
                
            }
            
            $("body").html(el);
        },
        error: function(request,error) 
        {
            console.log("Errore a frankgym");
        }
    });

}