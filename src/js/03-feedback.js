import throttle from "lodash.throttle";
const STORAGE_KEY = `feedback-form-state`;

const formData = {};
const refs = {
    form: document.querySelector(`.feedback-form`),
    textarea: document.querySelector(`.feedback-form textarea`),
}

populatTextarea();

refs.form.addEventListener(`submit`, onFormSubmit);
refs.textarea.addEventListener(`input`, throttle(onTextareaInput, 500));

refs.form.addEventListener(`input`, (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    formData[e.target.name] = e.target.value;
    console.log(formData);
})

function onTextareaInput(evt) {
    const message = evt.target.value;

    localStorage.setItem(STORAGE_KEY, message);
}


function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(`Submit form`);
    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
}

function populatTextarea() {
    const saveMessage = localStorage.getItem(STORAGE_KEY);
    
    if (saveMessage) {
        console.log(saveMessage);
    }

    refs.textarea.value = saveMessage;
}

