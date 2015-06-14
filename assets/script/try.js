$(document).ready(evan);

function evan(){
    console.log("I'm ready!");
    var id=1;
     $("#whatwedo").css("display", "none");
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../php/getInstructor.php", //Relative or absolute path to file.php file
        data: {instructor:id},
        success: function(response) {
            var instructor=JSON.parse(response);
            var myParam = location.search.split('idInstructor=')[1]
            console.log(myParam-1);
            var el = instructor[myParam-1].FirstName+" "+instructor[myParam-1].LastName; 
            $('h1').html(el);
            var url = "url(" + "'" + instructor[myParam-1].Picture + "'" + ")";
            $('#theteam ul li img').css("backgroundImage", url);
            var skills = instructor[myParam-1].Skills;
           $('#whatwedo ul li p.description').eq(0).text(instructor[myParam-1].Description);
           $('#whatwedo ul li p.description').eq(1).html(instructor[myParam-1].Awards);
     
           
           
   
   

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
    $("#whatwedo").css("display", "none");
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../php/getTeach.php", //Relative or absolute path to file.php file
        data: {instructor:id},
        success: function(response) {
        console.log("VAI");
            var teach=JSON.parse(response);
            console.log(teach[0].Course);
           	var instructor=$('h1').text();
            $('#whatwedo ul li p.description').eq(2).empty();
           for(var i =0;i<teach.length;i++)
           {
           
           if(teach[i].Instructor == instructor)
           {
            var tit= teach[i].Course;
            console.log(tit);
             
            $('#whatwedo ul li p.description').eq(2).each(function(){
    $(this).wrapInner('<a href="http://frankgym.altervista.org/pages/course.html?idCourse='+teach[i].idCourse+'">'+tit+'<br><br>'+'</a>');
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

//gestisce il click sul pulsante in modo tale da fare apparire il div contentente le informazioni
$(document).ready(function() {
 $("#whatwedo").css("display", "none");
    $('button').click(function() {
    		$('body').toggleClass("clicked");
            $('#whatwedo').slideToggle("slow");
            $('html, body').stop(true, false).animate({
		scrollTop: $("#whatwedo").offset().top
	}, 1500);
    });
});