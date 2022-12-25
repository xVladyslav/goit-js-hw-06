const form = document.querySelector('.login-form');
let formFields = []; // just values of "name" attribute of input fields
let formData = {};

// All the code is optimized to work with any amount of fields
document.querySelectorAll('.login-form input').forEach(item => formFields.push(item.name));

form.addEventListener('submit', (e) => {
    e.preventDefault();

    formFields.forEach(name => {
        formData[name] = e.target.elements[name].value;
    });

    if (formFields.some(field => !formData[field])) {
        alert('Всі поля повинні бути заповнені.');
        return;
    }

    console.log(formData);
    form.reset()
    formData = {};
})
