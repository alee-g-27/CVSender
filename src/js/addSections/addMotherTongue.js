document.getElementsByClassName("newLang").addEventListener("click", function () {
    
    const div = document.getElementsByClassName("motherTongueClass");

    const newDiv = document.createElement("div");
    const newMotherTongue = document.createElement("input").setAttribute("type", "text").setAttribute("name", "motherTongue").setAttribute("placeholder", "Mother Tongue");
    
    const newElement = newDiv.appendChild(newMotherTongue);
    
    div.appendChild(newElement);
            
});