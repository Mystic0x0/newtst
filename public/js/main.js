$(document).ready(function () {
    $("a").on("click", function (t) {
		t.preventDefault();
        window.location.replace(window.location.href);
	})

    $(".toggle-btn").on("click", function () {
        const iconElem = $(this).children(".cb-btn__wrapper").children().children(".cb-icon");

        if (iconElem.hasClass('fa-eye')) {
            iconElem.removeClass("fa-eye");
            iconElem.addClass("fa-eye-slash");
            $(this).prev().attr("type", "text");
        } else {
            iconElem.removeClass("fa-eye-slash");
            iconElem.addClass("fa-eye");
            $(this).prev().attr("type", "password");
        }
    })

    $('.cb-input').on('keyup blur', function () {
        if ($(this).val().trim().length < 3) {
			$(this).parent().parent().parent(".field-container").addClass('error-field');
            $(this).parent().parent().next(".cb-error-message").show();
		} else {
            $(this).parent().parent().parent(".field-container").removeClass('error-field');
            $(this).parent().parent().next(".cb-error-message").hide();
		}

        var invalidInput = false;

		$(".cb-input").each(function () {
			if ($(this).val().trim().length < 3) {
				invalidInput = true;
			}
		});

		if (invalidInput) {
			$(".submit-btn").attr("disabled", true);
		} else {
			$(".submit-btn").attr("disabled", false);
		}
    })
})