/**
 * Save data of personal info form in localStorage:
 * 
 * name
 * surname
 * phoneNumber
 * email
 * nationality
 * birthDate
 * gender
 * motherLanguage
 * country
 * city
 * address
 */

const personalInfoSaver = () => {

    // store all data in variables
    var name = document.getElementById("name");
    var surname = document.getElementById("surname");
    var phoneNumber = document.getElementById("phoneNumber");
    var email = document.getElementById("email");
    var nationality = document.getElementById("nationality");
    var birthDate = document.getElementById("birthDate");
    var gender = document.getElementById("gender");
    var motherLanguage = document.getElementById("motherLanguage");
    var country = document.getElementById("country");
    var city = document.getElementById("city");
    var address = document.getElementById("address");

    // store data from variables in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("surname", surname);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("email", email);
    localStorage.setItem("nationality", nationality);
    localStorage.setItem("birthDate", birthDate);
    localStorage.setItem("gender", gender);
    localStorage.setItem("motherLanguage", motherLanguage);
    localStorage.setItem("country", country);
    localStorage.setItem("city", city);
    localStorage.setItem("address", address);
}