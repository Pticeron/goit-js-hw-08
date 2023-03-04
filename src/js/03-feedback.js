import { save, load } from "./storage"; //фунцкії для роботи з Localstorage
import throttle from "lodash.throttle";

const STORAGE_KEY = `feedback-form-state`;

let formData = load(STORAGE_KEY) || {};

const refs = {
    form: document.querySelector(`.feedback-form`),
    textarea: document.querySelector(`.feedback-form textarea`),
    input: document.querySelector(`.feedback-form input`),
}

refs.input.setAttribute('required', '');
refs.textarea.setAttribute('required', '');

refs.form.addEventListener(`submit`, onFormSubmit);
refs.form.addEventListener(`input`, throttle(onFormInput, 500));

populatFormData();

function populatFormData() {
    if (formData !== undefined) {
        refs.input.value = formData.email || "";
        refs.textarea.value = formData.message || "";
    }

    // refs.textarea.value = saveMessage;
}


// refs.form.addEventListener(`input`, (e) => {
//     // console.log(e.target.name);
//     // console.log(e.target.value);

//     formData[e.target.name] = e.target.value;
//     console.log(formData);
// })

// function onTextareaInput(evt) {
//     const message = evt.target.value;

//     localStorage.setItem(STORAGE_KEY, message);
// }

function onFormInput( { target } ) {
    formData[target.name] = target.value.trim();
    save(STORAGE_KEY, formData);
}


function onFormSubmit(e) {
    e.preventDefault();
  console.log(formData);
  refs.form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}


