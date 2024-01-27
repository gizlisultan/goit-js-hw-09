const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const message = form.elements.message;



form.addEventListener("sumbit", infoSubmit)
form.addEventListener("input", infoInput)



function infoInput(evt) {
    const formInputs = {}
    formInputs.email = evt.currentTarget.email.value;
    formInputs.message = evt.currentTarget.message.value;
    

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formInputs))

   
}
function getInfo() {
    const info = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (info) {
    email.value = info.email;
    message.value = info.message;
  }
}
getInfo();    

function infoSubmit(evt) {
    evt.preventDefault();
 
    const email = evt.currentTarget.email.value;
    const message = evt.currentTarget.message.value;
  if (email === "" || message === "") {
    alert("Please fill in all the fields!");
    return;
    }
    localStorage.removeItem(STORAGE_KEY),
    evt.currentTarget.reset()
  

}