$(document).ready(evan);

function evan(){
    console.log("I'm ready!");
    var id=1;
    
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
            $('.title').html(el);
            var url = "url(" + "'" + instructor[myParam-1].Picture + "'" + ")";
            $('.face').css("backgroundImage", url);
            var skills = instructor[myParam-1].Skills;
            $('.skills').html(skills);
            var awards = instructor[myParam-1].Awards;
            $('.awards').html(awards);
            var desc = instructor[myParam-1].Description;
            $('.description').html(desc);
            var duties = instructor[myParam-1].Duties;
            $('.duties').html(duties);
             $(".face").delay(850).animate({"opacity": "1"}, 700);
             $(".titleskills").delay(1000).animate({"opacity": "1"}, 700);
              $(".titleawards").delay(1200).animate({"opacity": "1"}, 700);
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
        data: {instructor:id},
        success: function(response) {
            var teach=JSON.parse(response);
           	var instructor=$('.title').text();
           for(var i =0;i<teach.length;i++)
           {
           
           if(teach[i].Instructor == instructor)
           {
            var tit= teach[i].Course;
            console.log(tit);
            $('.taught').each(function(){
    $(this).wrapInner('<a href="http://frankgym.altervista.org/pages/course.html?idCourse='+teach[i].idCourse+'">'+tit+'<br>'+'</a>');
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