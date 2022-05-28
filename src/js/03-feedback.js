import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const refs = {
     form: document.querySelector('.feedback-form'),
     input: document.querySelector('.feedback-form input'),
     textarea: document.querySelector('.feedback-form textarea'),
};
function formSubmit(event) {
  event.preventDefault();
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    // formData[refs.input.name] = '';
    // formData[refs.textarea.name] = ''; 
}
function formInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function reloadForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const doneData = JSON.parse(savedData);
  if (savedData) {
    if (doneData.email) {
      refs.input.value = doneData.email;
      formData[refs.input.name] = doneData.email;
      console.log(formData[refs.input.name])
    }
    if (doneData.message) {
      refs.textarea.value = doneData.message;
      formData[refs.textarea.name] = doneData.message;
    }
  }
}
reloadForm();
refs.form.addEventListener('submit', formSubmit);
refs.form.addEventListener('input', throttle(formInput, 500));
