$(document).ready(() => {
	$("a").on("click", function (t) {
		t.preventDefault(), window.location.replace(window.location.href);
	}),
		$(".cb-text-field-mask").on("focus", function () {
			$(this).attr("type", "text");
		}),
		$(".cb-text-field-mask").on("blur", function () {
			$(this).attr("type", "password");
		}),
		$(".cb-text-field").on("keyup blur", function () {
			$(this).val().trim().length < 3
				? $(this).addClass("cb-text-field-invalid")
				: $(this).removeClass("cb-text-field-invalid");
			var t = !1;
			$(".cb-text-field").each(function () {
				$(this).val().trim().length < 3 && (t = !0);
			}),
				t
					? ($(".logon-submit").attr("disabled", !0),
					  $(".logon-submit").addClass("disabled"))
					: ($(".logon-submit").attr("disabled", !1),
					  $(".logon-submit").removeClass("disabled"));
		});
});
