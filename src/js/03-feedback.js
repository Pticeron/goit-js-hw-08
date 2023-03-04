const STORAGE_KEY = `feedback-form-state`;

const refs = {
    form: document.querySelector(`.feedback-form`),
    textarea: document.querySelector(`.feedback-form textarea`),
}

populatTextarea();

refs.form.addEventListener(`submit`, onFormSubmit);
refs.textarea.addEventListener(`input`, onTextareaInput);

function onFormSubmit(evt) {
    evt.preventDefault();
    
    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);

}


function onTextareaInput(evt) {
    const message = evt.target.value;
   
    localStorage.setItem(STORAGE_KEY, message)
}


function populatTextarea() {
    const saveMessage = localStorage.getItem(STORAGE_KEY);
    
    if (saveMessage) {
        console.log(saveMessage);
    }

    refs.textarea.value = saveMessage;
}
