import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");
const email = document.querySelector("input");
const message = document.querySelector("textarea");
const STORAGE_KEY = "feedback-form-state";
const formData = {};
populateForm();

form.addEventListener("submit", onSubmitForm);

function onSubmitForm (evt) {
evt.preventDefault();
const {
    elements: {email, message }
  } = evt.currentTarget;
  const emailEl = evt.currentTarget.email.value;
  const messageEl = evt.currentTarget.message.value;
  console.log({emailEl, messageEl});
evt.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);
};

form.addEventListener("input", throttle(onInputFormEl, 500));

function onInputFormEl (evt) {
    formData[evt.target.name] = evt.target.value;
  
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function populateForm (){
const saveForm = localStorage.getItem(STORAGE_KEY);

if(saveForm){
form.email.value = JSON.parse(saveForm).email;
form.message.value = JSON.parse(saveForm).message;

}
};
