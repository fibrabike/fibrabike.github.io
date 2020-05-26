function prefillEmailForm(modal, bike_title) {
    document.getElementById("close-button-".concat(modal)).click();
    document.getElementById("message").innerText = "Ciao, ti scrivo a proposito di " + bike_title + ". ";
    document.getElementById("mail_subject").value = bike_title;
}