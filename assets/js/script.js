$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度

	//----------------捲動控制-----------------
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) { //若目前的位置距離網頁頂端
			$(".gotop").addClass("show");
			$(".js-navbar-collapse").removeClass("show");
			$(".js-nav-toggler").addClass("collapsed");
		} else {
			$(".gotop").removeClass("show");
		}
	});

	//字級大小
	$(".js-top-function button").click(function () {
		if ($(this).hasClass("js-font-sm")) {
			$("html").addClass("sm");
		} else if ($(this).hasClass("js-font-md")) {
			$("html").removeClass("sm").removeClass("lg");
		} else if ($(this).hasClass("js-font-lg")) {
			$("html").addClass("lg");
		}
		$(this).addClass("active");
		return false;
	})
	//---------------------側邊選單設定------------------------
	$(".js-side-menu-toggler").click(function () {//側邊選單收合
		$(".js-side-menu").toggleClass("close");
	});
	RESIZE();

	$('.js-accordion-button').click(function () {
		let acc = $('.js-accordion-button');
		if ($(this).hasClass("collapsed")){
			$(this).find("i").addClass("bi-plus-square");
			$(this).find("i").removeClass("bi-dash-square-fill");
		}else{
			acc.find("i").addClass("bi-plus-square");
			acc.find("i").removeClass("bi-dash-square-fill");
			$(this).find("i").removeClass("bi-plus-square");
			$(this).find("i").addClass("bi-dash-square-fill");
		}
	})
	$('.js-accordion-sub').click(function () {
		if ($(this).hasClass("collapsed")) {
			$(this).find("i").addClass("bi-plus");
			$(this).find("i").removeClass("bi-dash");
		} else {
			$(this).siblings('.js-accordion-sub').find("i").addClass("bi-plus");
			$(this).siblings('.js-accordion-sub').find("i").removeClass("bi-dash");
			$(this).find("i").removeClass("bi-plus");
			$(this).find("i").addClass("bi-dash");
		}
	})

	function RESIZE() {
		var WINDOW = $(window).width();
		var WINDOWH = $(window).height();
		if (WINDOW < 768) {
			$('.js-side-menu').addClass("close");
			$(".js-side-content").addClass("close");
		}
		var containerHeight = $('.js-container').height();
		$('.js-side-menu').height(containerHeight + 64);
	}
	$(window).resize(function () {
		RESIZE();
	})

	//messenger樣式
	$(function () {
		$('.fb_dialog_content iframe').load(function () {
			var $iframe = $(this),
				$contents = $iframe.contents();
			// 取得 iframe 中的元素
			$('#btn1').click(function () {
				alert($contents.find('#t1').val());
			});
			// 執行各種動作時可以再判斷 $contents 是否為 null
		});
	});


})//JS尾端	

