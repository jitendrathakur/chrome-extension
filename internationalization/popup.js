var lang = window.navigator.language;
alert(lang);
$(function() {	
	$("#site-url").attr("href", "http://www.example.com/"+lang)
})