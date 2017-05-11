		function showResearch() {
	 		  $('#research_tip').fadeIn("slow");
		 	  $("#reaLi").addClass('curr');
		 	  setTimeout(showB, 1000); 
	 	}
	 	function showB(){
	 		$("#re_tip_png").show();
		    $("#re_tip_png").animate({left:'35%'}, "slow") 
	 	}
	 	function hideResearch() {
 		  $("#re_tip_png").animate({left:'200%'}, "slow");
 	 	  setTimeout(hideB, 1000); 
	 	}
	 	function hideB() {
	 		$('#research_tip').fadeOut("slow");
		 	$("#reaLi").removeClass('curr');
	 	}
	 	
	 	/* 指标体系显示 */
	 	function showIndicatorsys() {
	 	  $('#indicatorsys_tip').fadeIn("slow");
	 	  $("#indLi").addClass('curr');
	 	  $('.tip2').hide();   //网络营销页面先隐藏
	 	  setTimeout(showA, 1000); 
	 	}
	 	function showA(){
	 		$("#in_tip_png").show();
		    $("#in_tip_png").animate({left:'35%'}, "slow") 
	 	}
	 	/* 指标体系隐藏 */
	 	function hideIndicatorsys() {
	 	  $("#in_tip_png").animate({left:'200%'}, "slow");
	 	 setTimeout(hideA, 1000); 
	 	}
	 	function hideA() {
	 		$('#indicatorsys_tip').fadeOut("slow");
		 	$("#indLi").removeClass('curr');
	 	}