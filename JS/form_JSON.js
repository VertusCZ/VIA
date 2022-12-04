/*
        Funkce načítající data z localStorage;
        Ošetřit, pokud data v localStorage nejsou
    */

const getSavedNames = function(){
    const myNames = localStorage.getItem("names")

    if(myNames !== null){
        return JSON.parse(myNames)
    } else {
        return []
    }

}
/*
    Funkce pro použití při odeslání formuláře;
    Ukládá do localStorage jméno z formuláře
*/
const saveNames = function(oneName){
    localStorage.setItem("names", JSON.stringify(oneName))
}

const names = getSavedNames()

let myForm = document.querySelector("#test-form")
myForm.addEventListener("submit", function(event){
    event.preventDefault()

    names.push({
        id:  uuidv4(),
        firstName: event.target.elements.firstName.value,
        lastName: event.target.elements.lastName.value,
        bornDate: event.target.elements.bornDate.value,
        email: event.target.elements.email.value

    })
    alert("Byli jste uspěšně zaregistrováni!");
    event.target.elements.firstName.value = ""
    event.target.elements.lastName.value = ""
    event.target.elements.bornDate.value = ""
    event.target.elements.email.value = ""
    saveNames(names)

})