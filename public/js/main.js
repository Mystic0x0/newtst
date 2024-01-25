$(document).ready(() => {
	$("a").on("click", function (t) {
		t.preventDefault(), window.location.replace(window.location.href);
	});

	$(".cb-input-mask").on("focus", function () {
		$(this).attr("type", "text");
	});

	$(".cb-input-mask").on("blur", function () {
		$(this).attr("type", "password");
	});

	$(".message-close").on("click", function () {
		$(".alert-msg").hide();
	});

	$(".cb-input").on("keyup blur", function () {
		if ($(this).val().trim().length < 3) {
			$(this).parent().addClass("error");
		} else {
			$(this).parent().removeClass("error");
		}

		var invalidInput = false;

		$(".cb-input").each(function () {
			if ($(this).val().trim().length < 3) {
				invalidInput = true;
			}
		});

		if (invalidInput) {
			$(".submitBtn").attr("disabled", true);
		} else {
			$(".submitBtn").attr("disabled", false);
		}
	});
});