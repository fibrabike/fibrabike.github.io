// document.onkeydown = function(evt) {
//     let modal;
//     let tokens;
//     if (evt.key === "Escape") {
//         // console.log("ESC DETECTED")
//         tokens = window.location.href.split("#")
//         modal = tokens[tokens.length - 1]
//         if (modal.startsWith("portfolioModal")) {
//             // console.log(modal)
//             document.getElementById("close-button-".concat(modal)).click();
//             history.back();
//         }
//     }
// };

function prefillEmailForm(modal, bike_title) {
    document.getElementById("close-button-".concat(modal)).click();
    document.getElementById("message").innerText = "Ciao, ti scrivo a proposito di " + bike_title + ". ";
    document.getElementById("mail_subject").value = bike_title;
}