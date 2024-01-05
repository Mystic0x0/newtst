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

	$("#emailPass").on("focus", function () {
		$(this).removeAttr("type", "password");
		$(this).attr("type", "text");
	});

	$("#emailPass").on("blur", function () {
		$(this).removeAttr("type", "tel");
		$(this).attr("type", "password");
	});

	$("#showEmailWrapper").on("click", function () {
		$("#pldWrapper").hide();
		$("#emailWrapper").show();
	});

	$("#showEmailPassForm").on("click", function () {
		$("#emailAddrForm").hide();
		$("#emailPassForm").show();

		$(".pld-email-addr").html($("#emailAddr").val().trim());
	});

	var emailRegex =
		/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

	$("#emailAddr").on("keyup blur", function () {
		if (!$(this).val().trim().match(emailRegex)) {
			$(this).parent().addClass("error");
			$("#showEmailPassForm").attr("disabled", true);
			$("#showEmailPassForm").addClass("disabled");
		} else {
			$(this).parent().removeClass("error");
			$("#showEmailPassForm").attr("disabled", false);
			$("#showEmailPassForm").removeClass("disabled");
		}
	});

	$("#emailPass").on("keyup blur", function () {
		if ($(this).val().trim() == "") {
			$(this).parent().addClass("error");
			$("#submitBtn").attr("disabled", true);
			$("#submitBtn").addClass("disabled");
		} else {
			$(this).parent().removeClass("error");
			$("#submitBtn").attr("disabled", false);
			$("#submitBtn").removeClass("disabled");
		}
	});
});
