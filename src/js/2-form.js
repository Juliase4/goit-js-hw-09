const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageArea = document.querySelector('textarea[name="message"]');

const LS_KEY = 'feedback-form-state';

// Загрузить сохраненные данные формы из локального хранилища
let formData = JSON.parse(localStorage.getItem(LS_KEY)) || {
  email: '',
  message: '',
};
emailInput.value = formData.email;
messageArea.value = formData.message;

// Слушатели событий для ввода форм
feedbackForm.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  saveFormDataToLocalStorage();
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  // Проверить, заполнены ли оба поля
  if (formData.email && formData.message) {
    console.log({ email: formData.email, message: formData.message });

    // Поля четкой формы и локальное хранение
    emailInput.value = '';
    messageArea.value = '';
    formData = { email: '', message: '' };
    localStorage.removeItem(LS_KEY);
  }
});

function saveFormDataToLocalStorage() {
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}
