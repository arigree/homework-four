function initListeners() {
    $(".login").on("click", () => {
        $(".modal").show();
    });
    initSignInButtonListener();
    initCloseButtonListener();
}

function initSignInButtonListener() {
    $(".signIn").off("click").on("click", () => {
        console.log("test 1");
        $("#username, #password").hide();
        $(".feedback").hide();
        $(".success").show();
        $(".buttons").html('<button class="closeModal">Close</button>');
        initCloseButtonListener();
    });
}

function initCloseButtonListener() {
    console.log("test 2");
    $(".closeModal").off("click").on("click", () => {
        $(".modal").hide(); 
        $("#username, #password").show();
        $(".feedback").show();
        $(".success").hide();
        $(".buttons").html('<button class="signIn">Sign In</button><button class="closeModal">Close</button>');
        initSignInButtonListener();
    });
}

$(document).ready(function () {
    $(".modal").hide(); 
    initListeners();
});