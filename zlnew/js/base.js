(function($) {
	var obj = {
		init: function() {
			this.fixednav();			
		},
		fixednav: function() {
			var  windows=$(window);
			var  zlnavbar=$('.zlnavbar');			
			windows.scroll(function(){
                var tops=$(this).scrollTop();               
                if(tops>40){                	
                	zlnavbar.addClass('zlnavbarfixed')
                }else{
                	zlnavbar.removeClass('zlnavbarfixed')
                }

			});
			
		}
	}
	obj.init();

})(jQuery)