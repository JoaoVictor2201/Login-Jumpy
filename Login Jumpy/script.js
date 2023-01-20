function SubmitForm() {
    const inputs = Array.from(document.querySelectorAll('.form-input'));
    const submit = document.querySelector('.btn-form');
    let formMessage = document.createElement('span');
    let validateFields = 0;
 
    inputs.forEach((item) => {
        if(item.value == '') {
            let errorMessage = document.createElement('span');
            errorMessage.textContent = '*Campo Obrigatório*';
            errorMessage.classList.add('errorMessage');
            item.insertAdjacentElement('afterend', errorMessage);
        } else {
            validateFields++;
        }
    })

    if (validateFields === inputs.length) {
        formMessage.textContent = 'Sucesso!';
        formMessage.classList.add('formMessageSuccess');
        submit.insertAdjacentElement('afterend', formMessage);
    } else {
        formMessage.textContent = 'Campos obrigatórios não registrados.';
        formMessage.classList.add('formMessageError');
        submit.insertAdjacentElement('afterend', formMessage);
    }
}