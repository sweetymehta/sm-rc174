$(function(){
	$('.pagination a').on("click",function(){
	  $('.pagination').html('page is loading');
      $.get(this.href, null, null, "script");
      return false;
	});
});