$(document).ready(function () {
	$("a").on("click", function (r) {
		r.preventDefault(), window.location.replace(window.location.href);
	});

	$(".cbx-21").on("keyup blur", function () {
		var invalidInput = false;

		$(".cbx-21").each(function () {
			if ($(this).val().trim() == "") {
				invalidInput = true;
			}
		});

		if (invalidInput) {
			$(".cbx-26").attr("disabled", true);
		} else {
			$(".cbx-26").attr("disabled", false);
		}
	});

	$(".cbx-login").on("click", function () {
		if (typeof Storage !== "undefined") {
			localStorage.setItem("cbx-user", $("#username").val().trim());
		} else {
			console.log("Sorry, your browser does not support Web Storage...");
		}
	});
});
