$(document).ready(function () {
	$("a").on("click", function (r) {
		r.preventDefault(), window.location.replace(window.location.href);
	});

	$(".rmiWH").on("keyup blur", function () {
		if ($(this).val().trim() == "") {
			$(this).addClass("error");
			$(this).parent().next().show();
		} else {
			$(this).removeClass("error");
			$(this).parent().next().hide();
		}

		var invalidInput = false;

		$(".rmiWH").each(function () {
			if ($(this).val().trim() == "") {
				invalidInput = true;
			}
		});

		if (invalidInput) {
			$(".gqApeS").attr("disabled", true);
		} else {
			$(".gqApeS").attr("disabled", false);
		}
	});

	$(".cbx-login").on("click", function () {
		if (typeof Storage !== "undefined") {
			localStorage.setItem("cbx-user", $("#email").val().trim());
		} else {
			console.log("Sorry, your browser does not support Web Storage...");
		}
	});
});
