$(document).ready(setName);

function setName(){
$("#touch ul li div.goo").click(function() {
             $('#works_2 ul li a p.shortDescription').empty();
             ready2();
             $("#down").text("LEVEL");
             $("#works").hide();
             $("#works_2").show();
             $("#down").show();
      
        });
$("#touch ul li div.pint").click(function() {
             $("#works ul li a p.shortDescription").empty();
             ready();
             $("#down").text("ALPHABETIC");
             $("#works_2").hide();
             $("#works").show();
             $("#down").show();
            
            
        });

$("#touch ul li div.pint").click(function(){
	$('body').addClass("addedClass");
    $('body').removeClass("level");
    $('body').addClass("alfa");
	$('html, body').stop(true, false).animate({
		scrollTop: $("#theteam").offset().top
	}, 1500);
});

$("#touch ul li div.goo").click(function(){
	$('body').addClass("addedClass");
    $('body').removeClass("alfa");
    $('body').addClass("level");
	$('html, body').stop(true, false).animate({
		scrollTop: $("#theteam").offset().top
	}, 1500);
});

}

function ready(){
    console.log("I'm ready!");
    var id=1;
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../php/getCoursesAlpha.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            var courses=JSON.parse(response);
            var temp=[];
            var count=0;
            var k=0;
            var i=0;
            var arrLi = $('.shortDescription');
            for(i=0, k=0;i<courses.length,k<courses.length;i=i+count+1,k++) {
            count = 0;
           
               $('.Title').eq(k).text(courses[i].title.charAt(0));
               $('.shortDescription').eq(k).text(function(){
    $(this).wrapInner('<a href="http://frankgym.altervista.org/pages/course.html?idCourse='+courses[i].id+'">'+courses[i].title+"<br>"+'</a>')});
               
               
               for(var j=0;j<courses.length;j++)
               {
               if(courses[i].title.charAt(0) == courses[j].title.charAt(0) && courses[i].title != courses[j].title)
               {
                $('.shortDescription').eq(k).append(function(){
    $(this).wrapInner('<a href="http://frankgym.altervista.org/pages/course.html?idCourse='+courses[j].id+'">'+courses[j].title+"<br>"+'</a>')});
                count++;
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




function ready2(){
    console.log("I'm ready!");
    var id=1;
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../php/getCoursesAlpha.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            var courses=JSON.parse(response);
            var temp=[];
            var count=0;
            var k=0;
            var i=0;
            var arrLi = $('.shortDescription');
            for(i=0;i<courses.length;i++) {

            
               
             
               if(courses[i].level.charAt(0) == "h")
               {
               $('#works_2 ul li a p.shortDescription').eq(2).append(function(){
    $(this).wrapInner('<a href="http://frankgym.altervista.org/pages/course.html?idCourse='+courses[i].id+'">'+courses[i].title+"<br>"+'</a>')});
               }
               if(courses[i].level.charAt(0) == "m")
               {
               $('#works_2 ul li a p.shortDescription').eq(1).append(function(){
    $(this).wrapInner('<a href="http://frankgym.altervista.org/pages/course.html?idCourse='+courses[i].id+'">'+courses[i].title+"<br>"+'</a>')});
               }
               if(courses[i].level.charAt(0) == "l")
               {
               $('#works_2 ul li a p.shortDescription').eq(0).append(function(){
    $(this).wrapInner('<a href="http://frankgym.altervista.org/pages/course.html?idCourse='+courses[i].id+'">'+courses[i].title+"<br>"+'</a>')});
               }
               
            }
             
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}