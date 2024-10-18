// Створюємо об'єкт formData для зберігання значень полів форми
let formData = {
  email: '',
  message: '',
};

// Ключ для збереження даних у локальне сховище
const STORAGE_KEY = 'feedback-form-state';

// Отримуємо посилання на елементи форми
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

// Функція для збереження даних у localStorage
const saveFormData = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

// Функція для оновлення об'єкта formData при введенні даних у форму
const handleInput = event => {
  formData[event.target.name] = event.target.value.trim();
  saveFormData();
};

// Функція для заповнення форми даними з localStorage, якщо вони є
const populateForm = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
};

// Функція для обробки сабміту форми
const handleSubmit = event => {
  event.preventDefault();

  // Перевіряємо, чи заповнені обидва поля
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  // Виводимо дані в консоль
  console.log(formData);

  // Очищаємо форму, localStorage та об'єкт formData
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
};

// Додаємо обробники подій
form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

// Заповнюємо форму при завантаженні сторінки
populateForm();
