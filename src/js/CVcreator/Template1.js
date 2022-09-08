const CreatePDF = () => {

    // create pdf file
    var cv = new jsPDF();

    cv.setFillColor(localStorage.getItem("colorR"), localStorage.getItem("colorG"), localStorage.getItem("colorB"));
    cv.rect(0, 0, 100, 100, 'F');

    // extract the data from localStorage to create the pdf
    if (localStorage.getItem("name") == undefined || localStorage.getItem("surname") == undefined) {
        return console.log("Fill personal info");
    } else {
        cv.text(localStorage.getItem("name"))
        cv.text(localStorage.getItem("surname"));
    }

    cv.text(localStorage.getItem("nationality"));
    cv.text(localStorage.getItem("birthDate"));
    cv.text(localStorage.getItem("gender"));
    cv.text(localStorage.getItem("email"));
    cv.text(localStorage.getItem("telephoneNumber"));
    cv.text(localStorage.getItem("address"));

    cv.text(localStorage.getItem("motherLanguage"));
    localStorage.getItem("otherLanguages").forEach(element => {
        cv.text(element.language.value);
        cv.text(element.listening.value);
        cv.text(element.speaking.value);
        cv.text(element.writing.value);
        cv.text(element.reading.value);
    });

}