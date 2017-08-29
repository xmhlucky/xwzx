(function($) {
	var obj = {
		init: function() {
			this.indexbanner();			
		},
		indexbanner: function() {
			var xbanner=$('.xbanner');
			var swiper = $('.xbanner .swiper-container');
			var xarrow=$('.xbanner .xarrow');
			var mySwiper = new Swiper(swiper, {
				autoplay: 5000, //可选选项，自动滑动
				autoplayDisableOnInteraction: false,
				prevButton: '.swiper-button-prev',
				nextButton: '.swiper-button-next',
				loop: true
			});
			xbanner.hover(function(){
				xarrow.show();
			},function(){
				xarrow.hide();
			})
			
		}
	}
	obj.init();

})(jQuery)