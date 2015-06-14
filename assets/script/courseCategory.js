$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../php/getCoursesCategory.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
           var category =JSON.parse(response);
           var i=0;
           var k=0;
           var elems = $('.cat');
           
           for(var i = 0; i<category.length ;i++) {
           //for(i=0, k=0;i<courses.length,k<courses.length;i=i+count+1,k++) {
           //count = 0;
           		console.log(elems.eq(i));
                var url = "url(" + "'" + category[i].url + "'" + ")";
           		elems.eq(i).css("backgroundImage", url);
                console.log(category[i].Title);
                /*elems*/$('.Title').eq(i).text(function(){
    				$(this).wrapInner('<a href="http://frankgym.altervista.org/pages/category.html?idCategory='+category[i].ID+'">'+category[i].Title+"<br>"+'</a>')});
				} 
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}

$(document).ready(courses);

function courses(){
    console.log("I'm ready!");
    var id=1;
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../php/getCourses.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
           var category =JSON.parse(response);
           var i=0;
           var k=0;
           var elems = $('.cat');
           
           
           
            for(var k = 0; k<6 ;k++){
           for(var i = 0; i<category.length ;i++) {
           //for(i=0, k=0;i<courses.length,k<courses.length;i=i+count+1,k++) {
           //count = 0;
			
            
            if($('.Title').eq(k).text() == category[i].category)
            {
            	$('.shortDescription').eq(k).append(function(){
    				$(this).wrapInner('<a href="http://frankgym.altervista.org/pages/course.html?idCourse='+category[i].id+'">'+category[i].title+"<br>"+'</a>')});
            }
            


               
				}
                }
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}