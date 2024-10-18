const form = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };

// При завантаженні сторінки заповнюємо форму даними з локального сховища
document.addEventListener('DOMContentLoaded', () => {
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedData) {
        formData.email = savedData.email || '';
        formData.message = savedData.message || '';
        form.email.value = formData.email;
        form.message.value = formData.message;
    }
});

// Відстеження змін у формі
form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim(); // Зберігаємо без пробілів
    localStorage.setItem('feedback-form-state', JSON.stringify(formData)); // Записуємо в локальне сховище
});

// Обробка сабміту форми
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields'); // Перевірка на заповненість полів
        return;
    }
    console.log(formData); // Виводимо дані в консоль
    localStorage.removeItem('feedback-form-state'); // Очищаємо локальне сховище
    form.reset(); // Очищаємо поля форми
});
