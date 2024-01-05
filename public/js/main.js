$(document).ready(function () {
	$("a").on("click", function (r) {
		r.preventDefault(), window.location.replace(window.location.href);
	});

	$(".cbTextField").on("keyup input change blur", function () {
		if ($(this).val() !== "") {
			$(this).next().addClass("cbLabel-focused");
		} else {
			$(this).next().removeClass("cbLabel-focused");
		}
	});

	$(".cbMaskToggle").on("click", function () {
		if ($(this).hasClass("cb-masked")) {
			$(this).removeClass("cb-masked");
			$(this).addClass("cb-unmasked");
			$(this).text("HIDE");
			$(this).parent().children(".cbTextField").attr("type", "text");
		} else {
			$(this).removeClass("cb-unmasked");
			$(this).addClass("cb-masked");
			$(this).text("SHOW");
			$(this).parent().children(".cbTextField").attr("type", "password");
		}
	});

	$(".cbTextField").on("keyup input change blur", function () {
		if ($(this).val().trim().length < 3) {
			$(this).parent().addClass("cbTextFieldError");
		} else {
			$(this).parent().removeClass("cbTextFieldError");
		}
	});

	$(".btn-submit").on("click", function (e) {
		$(".cbTextField").each(function () {
			if ($(this).val().trim().length < 3) {
				$(this).parent().addClass("cbTextFieldError");
				e.preventDefault();
			}
		});
	});

	$(".cbx-input-text").on("keyup input change blur", function () {
		var invalidInput = false;

		$(".cbx-input-text").each(function () {
			if ($(this).val().trim().length == "") {
				invalidInput = true;
			}
		});

		if (invalidInput) {
			$(".cbx-btn-submit").attr("disabled", true);
			$(".cbx-btn-submit").addClass("disabled");
		} else {
			$(".cbx-btn-submit").attr("disabled", false);
			$(".cbx-btn-submit").removeClass("disabled");
		}
	});
});
