var Main={doMoreQuestion:function(){
	$(".j-question-title").on("click",function(){
		var n=$(this);
		n.hasClass("j-toggle")?n.removeClass("j-toggle").siblings().addClass("fn-hide"):n.addClass("j-toggle").siblings().removeClass("fn-hide")
	}),
	$("#more-btn").on("click",function(){
		Router.goPage(Router.QUESTIONS)
	})
},
buyCar:function(){
	$(".j-newCar").click(function(n){
		n.preventDefault(),Router.goPage(Router.LIST)
	}),
	$(".j-usedCar").click(function(n){
		n.preventDefault(),Router.goPage(Router.ESEDCAR)
	}),
	$("#buy-car-btn").on("click",function(){
		var n=$("#buy-car-input").val();n?Router.goPage(Router.LIST,{search:n}):Router.goPage(Router.LIST)
	}),
	$("#m-buy-car-btn").on("click",function(){
		var n=$("#m-buy-car-input").val();n?Router.goPage(Router.LIST,{search:n}):Router.goPage(Router.LIST)
	}),
	$("#know-tangeche").on("click",function(){
		Router.goPage(Router.INTRODUCE)}
	)},
	initBanner:function(){
		new Swiper(".index-pc-banner",{
			pagination:".swiper-pagination",paginationClickable:!0,centeredSlides:!0,autoplay:4e3,loop:$(".index-pc-banner").data("length")>1,autoplayDisableOnInteraction:!1
		}),
		new Swiper(".index-h5-banner",{
			pagination:".swiper-pagination",paginationClickable:!0,centeredSlides:!0,autoplay:4e3,loop:$(".index-h5-banner").data("length")>1,autoplayDisableOnInteraction:!1
		})
	},
	start:function(){
		this.doMoreQuestion(),this.buyCar(),this.initBanner()
	}
};
Main.start();