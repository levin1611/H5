
require('./jquery-1.9.1.min.js')
require('./jquery.lazyload.js')
require('./jquery.fullPage.js')
require('./imgscroll.js')
require('./slide.js')
require('./json.js')
require('../css/jquery.fullPage.css')
require('../css/common.css')
$(function() {
	//alert($('.text small').css('fontSize'));
	$('.box').css('height',(document.body.clientWidth * 0.475357222)+ 'px');
	$('#dowebok').fullpage({
		sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff','#fff'],
		'navigation': true,
		resize:true,
		scrollOverflow:false,
		anchors: ['page1','page2', 'page3', 'page4', 'page5','page6','page7'],
		menu: '#menu',
		moveSectionDown:function(anchorLink,index){
			alert(index)
			if(index == 7){
				$('.page7').css('top','-2.79rem');
			}
		},
		afterLoad:function(anchorLink, index){
			/*if(index != 1){
				$('.header').fadeIn('slow');
			}else {
				$('.header').hide();
			}*/
			$("img.pag"+index+"I").lazyload();
			
			
			if(index == 4) {
				$('.pages4').addClass('active');
				
			 }
				
				
			}
		});
		var tabTitle = ".service_menu li a";
		var tabInput = ".service_menu li a input";
		var tabContent = ".common .list";
		$(tabTitle + ":first").addClass("active");
		$(tabContent).not(":first").hide();
		
		$(tabTitle).hover(function() {
			$(this).trigger('mouseOut');
			$("img.pag4I").lazyload();
			$(this).parent('li').siblings().removeClass("active").end().addClass("active");
			var index = $(tabTitle).index( $(this) );
			$(tabContent).eq(index).siblings(tabContent).hide().end().fadeIn();
		});
		
			//$("#scroll").poposlides();
			$('.ck-slide').ckSlide();
			$('.pag5').ckSlide();
			
		   $("#roll").parallelRoll( {
				amount: 2
			});	
			$('.close').click(function() {
				$('.fwxmBox').hide();
			});
			$('.closeBtn').click(function() {
				$("img").lazyload(); 
				$('.model').fadeOut(1000);
					$('#dowebok').fullpage.setAllowScrolling(true);
					$('#dowebok').fullpage.setKeyboardScrolling(true);
			});
			$('.case_close').click(function() {
				$("img").lazyload(); 
				$('.case_show').css('z-index',-100);
					showNo = -100;
					$('#dowebok').fullpage.setAllowScrolling(true);
					$('#dowebok').fullpage.setKeyboardScrolling(true);
			});
			$('.project_close').click(function() {
				$("img").lazyload(); 
				$('.project_show').fadeOut(500);
				
					$('#dowebok').fullpage.setAllowScrolling(true);
					$('#dowebok').fullpage.setKeyboardScrolling(true);
			});
			$('.member_close').click(function() {
				
				$('.member_show').fadeOut(500);
				
					$('#dowebok').fullpage.setAllowScrolling(true);
					$('#dowebok').fullpage.setKeyboardScrolling(true);
			});
			$('.next1').click(function() {
				$('.box1').fadeOut(1000);
					$('.box2').fadeIn(500);
			});
			$('.next2').click(function() {
				$('.box2').fadeOut(1000);
					$('.box3').fadeIn(500);
			});
			$('.next3').click(function() {
				$('.box3').fadeOut(1000);
					$('.box4').fadeIn(500);
			});
			$('.prve4').click(function() {
				$('.box4').fadeOut(1000);
					$('.box3').fadeIn(500);
			});
			$('.prve3').click(function() {
				$('.box3').fadeOut(1000);
					$('.box2').fadeIn(500);
			});
			$('.prve2').click(function() {
				$('.box2').fadeOut(1000);
					$('.box1').fadeIn(500);
			});
		
		
		
		
});
		
		var picWith = $('.play').css('width');
		picWith = picWith.substring(0,picWith.indexOf('p'));
		$('.play').css('height',picWith);
		
		var cfg= {
			"scroll":1000,//滚动时间
			"stop": 3000,//停留时间
			"num":5//图片数
		};
		
		function run() {
			if(parseInt($("#pnl_scroll").css("left"))>-(picWith*(cfg.num-1)))
			{
				run.index++;
				$("#pnl_scroll").animate({left: '-='+picWith+'px'
		},cfg.scroll,function() {
			$("#pnl_btn li.on").removeClass("on");
					$("#pnl_btn li").eq(run.index).addClass("on");
					start_auto();
		});
			}
		
		else {
			run.index=0;
				$("#pnl_scroll").animate({left: '0px'
		},cfg.scroll,function() {
			$("#pnl_btn li.on").removeClass("on");
					$("#pnl_btn li").eq(run.index).addClass("on");
					start_auto();
		});
			}
		}
		
		run.index=0;
		run.time=0;
		function go_to(index) {
			run.index=index;
			var left=picWith*index;
			$("#pnl_scroll").animate({left: '-'+left+'px'
		},cfg.scroll,function() {
			$("#pnl_btn li.on").removeClass("on");
				$("#pnl_btn li").eq(run.index).addClass("on");
		});
		}
		
		function start_auto() {
		
			stop_auto();
			run.time=setTimeout(run,cfg.stop);
		}
		
		function stop_auto() {
			clearTimeout(run.time);
		}
		
		var showNo = -100;
		/*function showCase() {
			if(showNo == 200){
				return;
			}else {
			showNo = showNo+10;
				$('.case_show').css({'z-index': showNo,'opacity':1});
			$('#dowebok').fullpage.setAllowScrolling(false);
			$('#dowebok').fullpage.setKeyboardScrolling(false);
		}
		
		setInterval(showCase(),2000);
		}*/
		
		function addUs() {
			
		$('.box').css('height',(document.body.clientWidth * 0.475357222)+ 'px');
			
			$('#dowebok').fullpage.setAllowScrolling(false);
			$('#dowebok').fullpage.setKeyboardScrolling(false);
			
			$('.model').fadeIn(1000);
		}
		function showCase(id){
			
			$('#caseTit,#caseName,#caseCom').html('');
			$('#pnl_btn,#pnl_scroll').empty();
			if(id == 1){
				$('.toleft').attr('onclick','showCase(3)');
				$('.toright').attr('onclick','showCase(2)');
				$('#caseTit').html(caseDate.case1.title);
				$('#caseTit').css('margin','2.34rem 0 0.64rem');
				$('#caseName').html(caseDate.case1.name);
				$('#caseCom').html(caseDate.case1.com);
				$('#casePic').attr('src','images/'+caseDate.case1.pic);
				var imgS = caseDate.case1.imgSmall;
				var imgB = caseDate.case1.imgBig;
			    for(var i=0;i<imgS.length;i++){
					var liS = ' <li><a href="javascript:void(0)"> <img src="images/small/1/'+imgS[i]+'"></a> </li>';
					$('#pnl_btn').append(liS);
				}
				for(var i=0;i<imgB.length;i++){
					var liB = ' <li><a href="javascript:void(0)"> <img src="images/small/1/'+imgB[i]+'"></a> </li>';
					$('#pnl_scroll').append(liB);
				}
			}else if(id == 2){
				$('.toleft').attr('onclick','showCase(1)');
				$('.toright').attr('onclick','showCase(3)');
				$('#caseTit').html(caseDate.case2.title);
				$('#caseTit').css('margin','0.9rem 0 0.64rem');
				$('#caseName').html(caseDate.case2.name);
				$('#caseCom').html(caseDate.case2.com);
				$('#casePic').attr('src','images/'+caseDate.case2.pic);
				var imgS = caseDate.case2.imgSmall;
				var imgB = caseDate.case2.imgBig;
			    for(var i=0;i<imgS.length;i++){
					var liS = ' <li><a href="javascript:void(0)"> <img src="images/small/2/'+imgS[i]+'"></a> </li>';
					$('#pnl_btn').append(liS);
				}
				for(var i=0;i<imgB.length;i++){
					var liB = ' <li><a href="javascript:void(0)"> <img src="images/small/2/'+imgB[i]+'"></a> </li>';
					$('#pnl_scroll').append(liB);
				}
			}else if(id == 3){
				$('.toleft').attr('onclick','showCase(2)');
				$('.toright').attr('onclick','showCase(1)');
				$('#caseTit').html(caseDate.case3.title);
				$('#caseTit').css('margin','1.62rem 0 0.64rem');
				$('#caseName').html(caseDate.case3.name);
				$('#caseCom').html(caseDate.case3.com);
				$('#casePic').attr('src','images/'+caseDate.case3.pic);
				var imgS = caseDate.case3.imgSmall;
				var imgB = caseDate.case3.imgBig;
			    for(var i=0;i<imgS.length;i++){
					var liS = ' <li><a href="javascript:void(0)"> <img src="images/small/3/'+imgS[i]+'"></a> </li>';
					$('#pnl_btn').append(liS);
				}
				for(var i=0;i<imgB.length;i++){
					var liB = ' <li><a href="javascript:void(0)"> <img src="images/small/3/'+imgB[i]+'"></a> </li>';
					$('#pnl_scroll').append(liB);
				}
			}
			start_auto();
			$("#pnl_btn,#pnl_scroll").hover(function() {
				stop_auto();
			},function() {
				start_auto();
			});
			$("#pnl_btn li").each(function(i,j) {
				$(this).click(function(){
					go_to(i);
				});
			});
			   /* setInterval(function(){
					$("li",$("#pnl_ey")).first().appendTo($("#pnl_ey"));
				},4000);*/
			$("#pnl_speak_b").mouseenter(function() {
				$("#pnl_speak").height(130);
			}).mouseleave(function() {
				$("#pnl_speak").height(55);
			});
			$("#pnl_together_b").mouseenter(function() {
				$("#pnl_together").show();
			}).mouseleave(function() {
				$("#pnl_together").hide();
			});
			
			showNo = 200
			$('.case_show').css({'z-index': showNo,'opacity':1});
		}
		function projectShow(id){
			$("img.pI").lazyload(); 
			$('.project_show').fadeIn(500);
			var showN = id -1;
			var next = id+ 1;
			if(id == 1){
				
				$('.leftBtn').attr('onclick','projectShow(8)');
				$('.rightBtn').attr('onclick','projectShow('+next+')')
				$('#list > li').eq(showN).show();
				$('#list > li').eq(showN).show().siblings().hide();
			}else if(id == 8){	
				$('.leftBtn').attr('onclick','projectShow('+showN+')');
				$('.rightBtn').attr('onclick','projectShow(1)');
				$('#list > li').eq(showN).show();
				$('#list > li').eq(showN).show().siblings().hide();
			}else {
				$('.leftBtn').attr('onclick','projectShow('+showN+')');
				$('.rightBtn').attr('onclick','projectShow('+next+')');
				$('#list > li').eq(showN).show();
				$('#list > li').eq(showN).show().siblings().hide();
			}
			$('#dowebok').fullpage.setAllowScrolling(false);
			$('#dowebok').fullpage.setKeyboardScrolling(false);
			
		}
		function memberShow(id){
			$("img.mI").lazyload(); 
			$('.member_show').fadeIn(500);
			var showN = id -1;
			var next = id+ 1;
			if(id == 1){	
				$('.MleftBtn').attr('onclick','memberShow(4)');
				$('.MrightBtn').attr('onclick','memberShow('+next+')')
				$('#member > li').eq(showN).show();
				$('#member > li').eq(showN).show().siblings().hide();
			}else if(id == 4){	
				$('.MleftBtn').attr('onclick','memberShow('+showN+')');
				$('.MrightBtn').attr('onclick','memberShow(1)');
				$('#member > li').eq(showN).show();
				$('#member > li').eq(showN).show().siblings().hide();
			}else {
				$('.MleftBtn').attr('onclick','memberShow('+showN+')');
				$('.MrightBtn').attr('onclick','memberShow('+next+')');
				$('#member > li').eq(showN).show();
				$('#member > li').eq(showN).show().siblings().hide();
			}
			$('#dowebok').fullpage.setAllowScrolling(false);
			$('#dowebok').fullpage.setKeyboardScrolling(false);
			
		}