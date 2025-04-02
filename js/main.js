// popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// gender select
    const radioBtn1 = document.getElementById('flexRadioDefault1');
    const radioBtn2 = document.getElementById('flexRadioDefault2');
    const radioBtn3 = document.getElementById('flexRadioDefault3');
    const genderSelect = document.getElementById('genderSelect');

    radioBtn1.addEventListener("change",() => {
        genderSelect.classList.add('d-none');
    });
    radioBtn2.addEventListener("change",() => {
        genderSelect.classList.add('d-none');
    });
    radioBtn3.addEventListener("change",() => {
        genderSelect.classList.remove('d-none');
    });
