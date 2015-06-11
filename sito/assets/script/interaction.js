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
			dotBarAndButton.ready();
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

var dotBarAndButton = {

	ready: function() {
		dotBarAndButton.clickAction();
	},

	clickAction: function() {

		var x;

		if($(window).width()<767) x=0;
		else x=90;

		$('.dotbar li a, .button').click(function () {
			$('.dotbar li a, .button').removeClass('active');
			$(this).addClass('active');
		});   

		$(".dotbar li a, .button").click(function(){
			$('html, body').stop(true, false).animate({
				scrollTop: $($(this).attr("data-sezione")).offset().top-x
			}, 1500, 'easeInOutQuad');
		});
	}
};

var page = {

	anchorPosition : [],

	initAnchorPosition: function() {
		$('.anchor').each(function() {
			page.anchorPosition.push($(this).offset().top);
		});
		console.log(page.anchorPosition);
	},

	ready: function() {
		page.events();
		page.initAnchorPosition();
	},

	events: function() {
		page.resizeAction();
		page.scrollAction();
	},

	resizeAction: function() {
		$(window).on("resize", function(){
			if($(this).width()>991){
				$('body').removeClass("menuTendina");
			}	
			$(".wrapper").css('left', 0);
			slider.limiteDX = slider.larghezzaLi - slider.larghezzaWrapper;
			slider.limiteSX = 0;
		});
	},

	scrollAction: function() {
		$(window).on("scroll", function(){

			var position = $(window).scrollTop(),
               index;
			for(var i=0; i<page.anchorPosition.length; i++) {
				if (position <= page.anchorPosition[i]) {
					index = i;
					break;
				}
			}

			$(".button").removeClass('focused').eq(index).addClass('focused');
			$('.dotbar li a').removeClass('active').eq(index).addClass('active');
			$('body').removeClass('menuTendina');
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
				console.log($("#socialBar a").eq(i-7));
				$("#socialBar a").eq(i-7).addClass('scendi');
				$("#socialBar a").eq(i-7).css("transition-delay", delay+"ms");
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
		$(".dotbar").addClass("visibile");
		console.log(delay);
		$(".dotbar").css("transition-delay", delay+"ms");

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
				console.log("hola");
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