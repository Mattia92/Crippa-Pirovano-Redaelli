var myCenter=new google.maps.LatLng(32.690828, -96.823736);
var marker;

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:17,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("mappina"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  animation:google.maps.Animation.BOUNCE
  });

marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);


var uniqueWebSite = {

	begin: function() {
		$(document).ready(function() {
        	clickable.ready();
			navBar.ready();
			menu.ready();
			page.ready();
			unique.ready();
			fade.ready();
		});
	}
};

var clickable = {
	
    ready: function() {
    	$('#unique').click(function(e) {  
     		window.location.href='../';
    	});
        $('#aboutUs').click(function(e) {  
     		window.location.href='../pages/aboutUs.html';
    	});
        $('#instructor').click(function(e) {  
     		window.location.href='../pages/instructors.html';
    	});
        $('#rooms').click(function(e) {  
     		window.location.href='../pages/rooms.html';
    	});
        $('#courses').click(function(e) {  
     		window.location.href='../pages/courses.html';
    	});
        $('#courseCategory').click(function(e) {  
     		window.location.href='../pages/courseCategory.html';
    	});
        $('#overallSchedule').click(function(e) {  
     		window.location.href='../pages/overallSchedule.html';
    	});
        $('#feesAndReg').click(function(e) {  
     		window.location.href='../pages/feesAndReg.html';
    	});
        $('#contact').click(function(e) {  
     		window.location.href='../pages/contact.html';
   		});
    } 
}

var page = {

	ready: function() {
		page.events();
	},

	events: function() {
		page.resizeAction();
	},

	resizeAction: function() {
		$(window).on("resize", function(){
			if($(this).width()>991){
				$('body').removeClass("menuTendina");
			}	
			
		});
	},
};

var navBar = {

	ready: function() {
		navBar.entryAction();
	},

	entryAction: function() {

		var i;
		var delay;
		for(i=0;i<10;i++){
			$("#navBar li").eq(i).addClass('scendi');
			delay = 200*(i+1);
			$("#navBar li").eq(i+1).css("transition-delay", delay+"ms");
			if(i > 6) {
				
			}
		}
		i++;
		delay = 200*(i+1);
		$("#entry h6").addClass("compari");
		$("#entry h6").css("transition-delay", delay+"ms");
		$("#entry .dotLine").addClass("compari");
		$("#entry .dotLine").css("transition-delay", delay+"ms");
		i++;
		delay = 200*(i+1);
		$("#entry #cover.mission").addClass("visibile");
		$("#entry #cover.mission").css("transition-delay", delay+"ms");
		i++
		delay = 200*(i+1);
		setTimeout(function(){
			$("#navBar li").css("transition-delay", 0);
			$("#socialBar a").css("transition-delay", 0);
			$("#entry h6").css("transition-delay", 0);
			$("#entry .dotLine").css("transition-delay", 0);
			$("#entry .mission").css("transition-delay", 0);
			$(".dotBar.visibile").css("transition-delay", 0);
		}, delay);
	},
};

var unique = {

	immLogo : '#unique',

	ready: function() {
		unique.events();
	},

	events: function() {
		unique.clickAction();
	},

	clickAction: function() {
		$('#unique').click(function(){
			$('html, body').stop(true, false).animate({ scrollTop: 0}, 1000);
		});
	},
};

var menu = {

	icona : "#menu",

	ready: function() {
		menu.events();
	},

	events: function() {
		menu.clickAction();
	},

	clickAction: function() {
		$(menu.icona).click(function(){
			$('body').toggleClass("menuTendina");
		});
	}
};

var fade = {

	ready: function() {
		fade.events();
	},

	events: function() {
		fade.timingAction();
	},

	timingAction: function() {

		var i = 0;

		var promise = setInterval(function(){

			$(".over").each(function(){
				$(this).toggleClass("invisibile");
			});
			$(".mission").css("opacity", 0);
			$(".mission").eq(i).css("opacity", 0.8);
			i++;
			if(i==3) { i=0;}

		}, 2500, i);

		$(window).on("scroll", function(){

			if(this.pageYOffset >= 500 && this.pageYOffset < 5000) {
				clearInterval(promise);
			}
			else {
				clearInterval(promise);
				promise = setInterval(function(){

					$(".over").each(function(){
						$(this).toggleClass("invisibile");
					});
					$(".mission").css("opacity", 0);
					$(".mission").eq(i).css("opacity", 0.8);
					i++;
					if(i==3) { i=0;}

				}, 2500, i);
			}

		});

	},
};

uniqueWebSite.begin();