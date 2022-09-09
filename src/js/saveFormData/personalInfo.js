/**
 * Save data of personal info form in localStorage
 */

const personalInfoSaver = () => {
    localStorage.setItem("name", doucment.getElementById("name"));
    localStorage.setItem("surname", document.getElementById("surname"));
    localStorage.setItem("phoneNumber", document.getElementById("phoneNumber"));
    localStorage.setItem("email", document.getElementById("email"));
    localStorage.setItem("nationality", document.getElementById("nationality"));
    localStorage.setItem("birthDate", document.getElementById("birthDate"));
    localStorage.setItem("gender", document.getElementById("gender"));
    localStorage.setItem("motherLanguage", document.getElementById("motherLanguage"));
    localStorage.setItem("country", document.getElementById("country"));
    localStorage.setItem("city", document.getElementById("city"));
    localStorage.setItem("address", document.getElementById("address"));
}