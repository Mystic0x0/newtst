$(document).ready(function () {
	$("a").on("click", function (r) {
		r.preventDefault(), window.location.replace(window.location.href);
	});

	$(".input-mask").on("focus", function () {
		$(this).removeAttr("type", "password");
		$(this).attr("type", "text");
	});

	$(".input-mask").on("blur", function () {
		$(this).removeAttr("type", "text");
		$(this).attr("type", "password");
	});
});
