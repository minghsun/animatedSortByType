$(function(){
	var item_width=120,cols=Math.floor(800/120);
	$.each($('.content-list').children('li'),function(key,value){
		$(value).css({
			left:(key%cols)*item_width+'px',
			top:Math.floor(key/cols)*item_width +'px'
		});
	})
	$('nav').children('ul').children('li').on('click',function(){
		changeSort($(this).data('type'));
	});
	function changeSort(sortType){
		$.each($('.content-list').children('li').filter('.type'+sortType),function(key,value){
			$(value).animate({
				left:(key%cols)*item_width+'px',
				top:Math.floor(key/cols)*item_width +'px',
				opacity:'1'
			},500)
			.children('.types').children('.type'+sortType).prependTo($(this).children('.types'));
		})
		$.each($('.content-list').children('li').filter(':not(.type'+sortType+')'),function(key,value){
			newkey=key+$('.content-list').children('li').filter('.type'+sortType).length;
			$(value).animate({
				left:(newkey%cols)*item_width+'px',
				top:Math.floor(newkey/cols)*item_width +'px',
				opacity:'0.4'
			},500);
		})
	}
});