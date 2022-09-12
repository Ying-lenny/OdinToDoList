//Generates a form for the page
function createForm() {
    const formDiv = document.createElement('div');
    formDiv.classList.add('form-div')

    const form = document.createElement('form');
    form.classList.add('form')

    formDiv.appendChild(form);
    form.appendChild(createGeneric("Task"));
    form.appendChild(createGeneric("Description"));

    return formDiv;
}

//Creates a generic form input
function createGeneric(task) {
    const formRow = document.createElement('tr');
    const formData = document.createElement('td');
    const formInput = document.createElement('input');

    formData.innerText = (task);

    formRow.appendChild(formData);
    formRow.appendChild(formInput);

    return formRow
}

function loadForm() {
    const main = document.getElementById('main');
    //main.textContent = '';
    main.appendChild(createForm());
}

export default loadForm;