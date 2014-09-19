
var menu = false;
var kkago = false;
var profile = false;
var canScrollMore = true;
var keepTrackOf = 0;
var currProjPage = null;
var rotatePanelDegree = 0;
var currPanelIndex = 0;

$(document).ready(function(){
	$("#load-page").delay(2500).animate({opacity: 0},2000);
	setTimeout(function(){$("#load-page").toggle()
		setTimeout(function(){$("#wrapper-dogem").removeClass("wrapper-removed-bottom")}, 100);
		setTimeout(function(){$("#wrapper-kkago1").removeClass("wrapper-removed-top")}, 200);
		setTimeout(function(){$("#wrapper-kkago2").removeClass("wrapper-removed-bottom")}, 300);
		setTimeout(function(){$("#wrapper-kkago3").removeClass("wrapper-removed-top")}, 400);
		setTimeout(function(){$("#wrapper-frequencyrecord").removeClass("wrapper-removed-bottom")}, 500);
		setTimeout(function(){$("#wrapper-changchogolf").removeClass("wrapper-removed-top")}, 600);

		$("#scroll-to-left-icon").data('bounce', true);
		bounce($("#scroll-to-left-icon"));
		if (canScrollMore){
			$("#scroll-to-left-icon").animate({opacity: 1}, 300);
		}
	}, 4500);
	

	$("#panel-container").mousewheel(function(event, delta) {
		this.scrollLeft -= (delta * 30);
		if(keepTrackOf == this.scrollLeft && keepTrackOf != 0){
			$("#scroll-to-left-icon").animate({opacity: 0}, 100);
			canScrollMore = false;
		} else{
			keepTrackOf = this.scrollLeft;
			if ($("#scroll-to-left-icon").css("opacity") != 1 && !canScrollMore){
				$("#scroll-to-left-icon").animate({opacity: 1}, 100);
				canScrollMore = true;
			}
		}
		event.preventDefault();
	});

	$("#nav-menu").click(function(){
		if(!menu){
			$("#nav-kkago, #nav-profile, #nav-contact, #nav-linkedin").removeClass("icon-hidden", 300, "linear");
			$(this).addClass("icon-selected", 300, "linear");
			menu = true;
		} else{
			$("#nav-kkago, #nav-profile, #nav-contact, #nav-linkedin").addClass("icon-hidden", 300, "linear");
			$(this).removeClass("icon-selected", 300, "linear");
			menu = false;
		}
	});

	$("#nav-kkago").click(function(){
		if (kkago)
			return;
		$(this).addClass("icon-selected", 300, "linear");
		if (currProjPage == null){
			if (!profile){
				removePanels();
				setTimeout(function(){
					$("#kkago-detail-holder").toggle();
					$(".kkago-detail").toggle();
					$(".kkago-detail").removeClass("pd-hidden", 1000, "easeInQuart");
				}, 1000);
			} else {
				$("#nav-profile").removeClass("icon-selected", 300, "linear");
				$(".profile-detail").addClass("pd-hidden", 1000, "easeInQuart");
				setTimeout(function(){
					$("#profile-detail-holder").toggle();
					$(".profile-detail").toggle();
					$("#kkago-detail-holder").toggle();
					$(".kkago-detail").toggle();
					$(".kkago-detail").removeClass("pd-hidden", 1000, "easeInQuart");
				}, 1000);
				profile=false;
			}
		} else{
			currProjPage.addClass("pd-hidden", 1000, "easeOutQuart");
			setTimeout(function(){
				$("#project-detail-holder").toggle();
				currProjPage.toggle();
				$("#kkago-detail-holder").toggle();
				$(".kkago-detail").toggle();
				$(".kkago-detail").removeClass("pd-hidden", 1000, "easeInQuart");
			}, 1000);
		}
		kkago=true;
	});

	$("#nav-profile").click(function(){
		if (profile)
			return;
		$(this).addClass("icon-selected", 300, "linear");
		if (currProjPage == null){
			if (!kkago){
				removePanels();
				setTimeout(function(){
					$("#profile-detail-holder").toggle();
					$(".profile-detail").toggle();
					$(".profile-detail").removeClass("pd-hidden", 1000, "easeInQuart");
				}, 1000);
			} else{
				$("#nav-kkago").removeClass("icon-selected", 300, "linear");
				$(".kkago-detail").addClass("pd-hidden", 1000, "easeInQuart");
				setTimeout(function(){
					$("#kkago-detail-holder").toggle();
					$(".kkago-detail").toggle();
					$("#profile-detail-holder").toggle();
					$(".profile-detail").toggle();
					$(".profile-detail").removeClass("pd-hidden", 1000, "easeInQuart");
				}, 1000);
				kkago=false;
			}
		} else{
			currProjPage.addClass("pd-hidden", 1000, "easeOutQuart");
			setTimeout(function(){
				$("#project-detail-holder").toggle();
				currProjPage.toggle();
				$("#profile-detail-holder").toggle();
				$(".profile-detail").toggle();
				$(".profile-detail").removeClass("pd-hidden", 1000, "easeInQuart");
			}, 1000);
		}
		profile=true;
	});

	$(".show-more-button").click(function(){
		if($(this).hasClass("visit-button")){
			return;
		}
		removePanels();

		$("#project-detail-holder").toggle();
		if ($(this).is("#show-more-dogem")){
			$("#project-detail-dogem").toggle();
			$("#project-detail-dogem").removeClass("pd-hidden", 1500, "easeInQuart");
			currProjPage=$("#project-detail-dogem");
		} else if ($(this).is("#show-more-kkago1")){
			$("#project-detail-kkago1").toggle();
			$("#project-detail-kkago1").removeClass("pd-hidden", 1500, "easeInQuart");
			currProjPage=$("#project-detail-kkago1");
		} else if ($(this).is("#show-more-kkago2")){
			$("#project-detail-kkago2").toggle();
			$("#project-detail-kkago2").removeClass("pd-hidden", 1500, "easeInQuart");
			currProjPage=$("#project-detail-kkago2");
		} else if ($(this).is("#show-more-kkago3")){
			$("#project-detail-kkago3").toggle();
			$("#project-detail-kkago3").removeClass("pd-hidden", 1500, "easeInQuart");
			currProjPage=$("#project-detail-kkago3");
		} else if ($(this).is("#show-more-frequencyrecord")){
			$("#project-detail-frequencyrecord").toggle();
			$("#project-detail-frequencyrecord").removeClass("pd-hidden", 1500, "easeInQuart");
			currProjPage=$("#project-detail-frequencyrecord");
		} else if ($(this).is("#show-more-changchogolf")){
			$("#project-detail-changchogolf").toggle();
			$("#project-detail-changchogolf").removeClass("pd-hidden", 1500, "easeInQuart");
			currProjPage=$("#project-detail-changchogolf");
		}
	});

	$(".close-button").click(function(){
		if ($(this).is("#close-kkagotab")){
			$("#nav-kkago").removeClass("icon-selected", 300, "linear");
			$(".kkago-detail").addClass("pd-hidden", 1000, "easeInQuart");
			setTimeout(function(){
				$("#kkago-detail-holder").toggle();
				$(".kkago-detail").toggle();
				addPanels();
			}, 1000);
			kkago=false;
			player.pauseVideo();
		} else if ($(this).is("#close-profiletab")) {
			$("#nav-profile").removeClass("icon-selected", 300, "linear");
			$(".profile-detail").addClass("pd-hidden", 1000, "easeInQuart");
			setTimeout(function(){
				$("#profile-detail-holder").toggle();
				$(".profile-detail").toggle();
				addPanels();
			}, 1000);
			profile=false;
		}else{
			var curr_proj_page = $(this).parent().parent();
			curr_proj_page.addClass("pd-hidden", 1000, "easeOutQuart");
			setTimeout(function(){
				$("#project-detail-holder").toggle();
				curr_proj_page.toggle();
				addPanels();
			}, 1000);
		}
		currProjPage = null;
	});

	$("#show-more-quickfacts").click(function(){
		var val = $("#profile-detail-wrapper").height()/2 + 50;
		var input = "-" + val.toString() + "px";
		$("#profile-detail-wrapper").animate({marginTop: input}, 600);
	});

	$("#show-more-back").click(function(){
		$("#profile-detail-wrapper").animate({marginTop: "0px"}, 600);
	});

	$("#quickfacts-right").click(function(){
		rotatePanelDegree-= 40;
		var oldClass = "background-tag" + currPanelIndex.toString();
		$(".quickfacts-background").animate({opacity: 0}, 300);
		setTimeout(function(){$(".quickfacts-background").removeClass(oldClass);}, 300);
		currPanelIndex ++;
		if (currPanelIndex == 9)
			currPanelIndex = 0;
		var newClass = "background-tag" + currPanelIndex.toString();
		setTimeout(function(){$(".quickfacts-background").addClass(newClass);}, 600);
		$(".quickfacts-background").delay(300).animate({opacity: 1}, 300);
		$("#quickfacts-rotator").animate({rotate:rotatePanelDegree+"deg"}, 600);
	});

	$("#quickfacts-left").click(function(){
		rotatePanelDegree+= 40;
		var oldClass = "background-tag" + currPanelIndex.toString();
		$(".quickfacts-background").animate({opacity: 0}, 300);
		setTimeout(function(){$(".quickfacts-background").removeClass(oldClass);}, 300);
		currPanelIndex --;
		if (currPanelIndex == -1)
			currPanelIndex = 8;
		var newClass = "background-tag" + currPanelIndex.toString();
		setTimeout(function(){$(".quickfacts-background").addClass(newClass);}, 600);
		$(".quickfacts-background").delay(300).animate({opacity: 1}, 300);
		$("#quickfacts-rotator").animate({rotate:rotatePanelDegree+"deg"}, 600);
	});
});

function bounce($elem) {
	$elem.effect('bounce', { times: 1, distance: 6, direction:"Right" }, 500, function() {
		if ($(this).data('bounce'))
			bounce($elem);
		else
			$elem.stop();
	});
}

function addPanels(){
	$("#scroll-hider").toggle();
	if(canScrollMore){
		$("#scroll-to-left-icon").animate({opacity: 1}, 300);
	}
	setTimeout(function(){$("#wrapper-dogem").removeClass("wrapper-removed-bottom")}, 100);
	setTimeout(function(){$("#wrapper-kkago1").removeClass("wrapper-removed-top")}, 200);
	setTimeout(function(){$("#wrapper-kkago2").removeClass("wrapper-removed-bottom")}, 300);
	setTimeout(function(){$("#wrapper-kkago3").removeClass("wrapper-removed-top")}, 400);
	setTimeout(function(){$("#wrapper-frequencyrecord").removeClass("wrapper-removed-bottom")}, 500);
	setTimeout(function(){$("#wrapper-changchogolf").removeClass("wrapper-removed-top")}, 600);	
}

function removePanels(){
	$(".click-hover-preventer").toggle();
	$("body").toggle();
	$("#scroll-to-left-icon").animate({opacity: 0}, 300);
	$("body").toggle();
	$("#wrapper-dogem").addClass("wrapper-removed-bottom", 500, "swing");
	$("#wrapper-kkago1").addClass("wrapper-removed-top", 500, "swing");
	$("#wrapper-kkago2").addClass("wrapper-removed-bottom", 500, "swing");
	$("#wrapper-kkago3").addClass("wrapper-removed-top", 500, "swing");
	$("#wrapper-frequencyrecord").addClass("wrapper-removed-bottom", 500, "swing");
	$("#wrapper-changchogolf").addClass("wrapper-removed-top", 500, "swing");
	setTimeout(function(){$("#scroll-hider").toggle()}, 1000);
	setTimeout(function(){$(".click-hover-preventer").toggle()}, 1000);
}