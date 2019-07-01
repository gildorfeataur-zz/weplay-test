document.addEventListener('DOMContentLoaded', function(){
    var body = document.querySelector("body");
    var overlay = document.querySelector(".js-overlay");
    var menuToggle = document.querySelector(".js-menu-toggle");
    var coockieMsgClose = document.querySelector(".js-coockieMsg-close");
    var loginBtnMob = document.querySelector(".js-login-btn-mob");
    var loginBtn = document.querySelector(".js-login-btn");
    var loginPopup = document.querySelector(".js-popup");
    var popupCloseBtn = document.querySelector(".js-popup-close");

    menuToggle.addEventListener("click", function() {
        this.classList.toggle("is-active");
        overlay.classList.toggle("is-active");
        document.querySelector(".js-menu-mob").classList.toggle("is-open");
        body.classList.toggle("is-overflow");
    });

    coockieMsgClose.addEventListener("click", function() {
        document.querySelector(".c-cookie").classList.add("is-close");
    });

    loginBtnMob.addEventListener("click", function() {
        loginPopup.classList.add("is-open");
        overlay.classList.add("is-active");
        body.classList.add("is-overflow");
    });

    loginBtn.addEventListener("click", function() {
        loginPopup.classList.add("is-open");
        overlay.classList.add("is-active");
        body.classList.add("is-overflow");
    });

    popupCloseBtn.addEventListener("click", function() {
        loginPopup.classList.remove("is-open");
        overlay.classList.remove("is-active");
        body.classList.remove("is-overflow");
    });
});