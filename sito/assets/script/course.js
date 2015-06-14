$(document).ready(evan);

function evan(){
    console.log("I'm ready!");
    var id=1;
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../php/getCourses.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            var courses=JSON.parse(response);
            var myParam = location.search.split('idCourse=')[1]
            var tit= courses[myParam-1].title;
            $('h1').html(tit);
            var el = courses[myParam-1].schedule;
           /* $('section .time').html(el);*/
            var url = "url(" + "'" + courses[myParam-1].url + "'" + ")";
            $('.imgCourse').css("backgroundImage", url);
            var desc=courses[myParam-1].description;
            
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
        url: "../php/getTeach.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            var teach=JSON.parse(response);
           	 var corso=$('h1').text();
             console.log(corso);
           for(var i =0;i<teach.length;i++)
           {
           
           if(teach[i].Course == corso)
           {
            var tit= teach[i].Instructor;
            $('section .time').each(function(){
    $(this).wrapInner('<a href="http://frankgym.altervista.org/pages/instructo.html?idInstructor='+teach[i].idInstructor+'">'+tit+'<br>'+'</a>');
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

