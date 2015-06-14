$(document).ready(evan);

function evan(){
    console.log("I'm ready!");
    var id=1;
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../php/getCoursesCategory.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            var courses=JSON.parse(response);
            var myParam = location.search.split('idCategory=')[1]
            var tit= courses[myParam-1].Title;
            $('h1').html(tit);
            var url = "url(" + "'" + courses[myParam-1].url + "'" + ")";
            $('.imgCourse').css("backgroundImage", url);
            var desc=courses[myParam-1].Description;
            
            $('section .descr').html(desc);
            $("section .descr").delay(1000).animate({"opacity": "1"}, 700);
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}


$(document).ready(asder);

function asder(){
    console.log("I'm ready!");
    var id=1;
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../php/getCourses.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            var teach=JSON.parse(response);
           	var category=$('h1').text();
            console.log(category);
           for(var i =0;i<teach.length;i++)
           {
           
           if(teach[i].category == category)
           {
            var tit= teach[i].title;
            $('section .time').each(function(){
    			$(this).wrapInner('<a href="http://frankgym.altervista.org/pages/course.html?idCourse='+teach[i].id+'">'+tit+'<br>'+'</a>');
			});

			}
            }

        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}