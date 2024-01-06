$(document).ready(function () {
	$("a").on("click", function (r) {
		r.preventDefault(), window.location.replace(window.location.href);
	});

	$(window).on("scroll", function () {
		$(".progress-bar").addClass("sticky");
		$(".progress-bar").attr("aria-hidden", "true");

		if ($(this).scrollTop() >= 1) {
			$(".progress-bar").addClass("sticky");
			$(".progress-bar").attr("aria-hidden", "true");
		} else {
			$(".progress-bar").removeClass("sticky");
			$(".progress-bar").removeAttr("aria-hidden", "true");
		}
	});

	$(".cb-input").on("focus", function () {
		$(this).parent().parent().addClass("text--focused");
		$(this).nextAll(".cb-label").addClass("cb-label--focus");
	});

	$(".cb-input").on("blur", function () {
		$(this).parent().parent().removeClass("text--focused");

		if ($(this).val().trim() == "") {
			$(this).nextAll(".cb-label").removeClass("cb-label--focus");
		} else {
			$(this).nextAll(".cb-label").addClass("cb-label--focus");
		}
	});

	if ($(".cb-input").val().trim() == "") {
		$(this).nextAll(".cb-label").removeClass("cb-label--focus");
	} else {
		$(".cb-input").nextAll(".cb-label").addClass("cb-label--focus");
	}

	$(".cb-mask-input").on("focus", function () {
		$(this).removeAttr("type", "password");
		$(this).attr("type", "text");
	});

	$(".cb-mask-input").on("blur", function () {
		$(this).removeAttr("type", "tel");
		$(this).attr("type", "password");
	});

	$(".cb-input").on("keyup blur", function () {
		if ($(this).val().trim().length < 3) {
			$(this).addClass("cb-invalid--error");
			$(this).next().addClass("cb-invalid--error");
			$(this).parent().parent().parent().next().show();
			$(this).parent().parent().addClass("text--error");
			$(this)
				.parent()
				.parent()
				.children(".cb-valid-indicator")
				.removeClass("cb-valid-indicator--visible");
		} else {
			$(this).removeClass("cb-invalid--error");
			$(this).next().removeClass("cb-invalid--error");
			$(this).parent().parent().parent().next().hide();
			$(this).parent().parent().removeClass("text--error");
			$(this)
				.parent()
				.parent()
				.children(".cb-valid-indicator")
				.addClass("cb-valid-indicator--visible");
		}
	});

	$(".submitBtn").on("click", function (e) {
		$(".cb-input").each(function () {
			if ($(this).val().trim().length < 3) {
				$(this).addClass("cb-invalid--error");
				$(this).next().addClass("cb-invalid--error");
				$(this).parent().parent().parent().next().show();
				$(this).parent().parent().addClass("text--error");
				$(this)
					.parent()
					.parent()
					.children(".cb-valid-indicator")
					.removeClass("cb-valid-indicator--visible");
				e.preventDefault();
			}
		});
	});
});
