const formEl = document.querySelector('.login-form');


// отправка формі
function onFormSubmit(event) {
    // очистка
    event.preventDefault();

    const formElem = event.currentTarget.elements;
    const email = formElem.email.value;
    const password = formElem.password.value;

    // валидация
    if (email === '' || password === '') {
        return alert('Все поля должны быть заполнены');
    }
    // группировка в объект
    const formData = {
        email, password
    };
    console.log(formData);
    // очистка формы
    event.currentTarget.reset();
}



formEl.addEventListener('submit', onFormSubmit);


