document.onkeydown = function(evt) {
    let modal;
    let tokens;
    if (evt.key === "Escape") {
        // console.log("ESC DETECTED")
        tokens = window.location.href.split("#")
        modal = tokens[tokens.length - 1]
        if (modal.startsWith("portfolioModal")) {
            // console.log(modal)
            document.getElementById("close-button-".concat(modal)).click();
            history.back();
        }
    }
};
