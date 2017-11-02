$(function() {
    var container = $("#container");
    var count = 33;
    var square = 'square';
    for (var i=0; i<count; i++) {
        container.append('<div class="' + square + ' ' + i + '">' + i + '</div>');
       	//$('.square').css({"height":"100px", "width":"100", "border":"1px solid black", "float":"left"});
    }
  $('.square').click(function(){
		alert('jaime');
	});
});