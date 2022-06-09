jQuery(function ($) {
    $(".header").headroom();
    /* $("#openProfile").on("click", () => {
        $(".profile").css({
            "display": "block"
        });
        $(".cabinet-body").css({
            "display": "none"
        });
    }); */
    $("#openProfile").on("click", () => {
        $(".cabinet").addClass("is-collapsed")
    });
    $("#closeProfile").on("click", () => {
        $(".cabinet").removeClass("is-collapsed")
    });
    $("#regNumber, #password").on("input", () => {
        $("#regNumber").val() && $("#password").val() ? $("#login").addClass("button-primary") : $("#login").removeClass("button-primary")
    });
    $("#regNumber, #password1, #password2").on("input", () => {
        $("#regNumber").val() && $("#password1").val() && $("#password2").val() && ($("#password1").val() === $("#password2").val()) ? $("#registration").addClass("button-primary") : $("#registration").removeClass("button-primary")
    });
});