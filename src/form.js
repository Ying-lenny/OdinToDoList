//Generates a form for the page
function createForm() {
    const formDiv = document.createElement('div');
    formDiv.classList.add('form-div')

    const form = document.createElement('form');
    form.classList.add('form')

    formDiv.appendChild(form);
    form.appendChild(createGeneric("task"));
    form.appendChild(createGeneric("description"));

    return formDiv;
}

//Creates a generic form input
function createGeneric(task) {
    //Generate row
    const formRow = document.createElement('tr');

    //Generate Datacell
    const formData = document.createElement('td');
    formData.innerText = (task);

    //Generate Input for data cell
    const formInput = document.createElement('input');
    formInput.setAttribute('type', 'text');
    formInput.setAttribute('id', `${task}`);
    formInput.setAttribute('placeholder', `${task}`);

    formRow.appendChild(formData);
    formRow.appendChild(formInput);

    return formRow;
}

//Creates a status row and input
function createStatus() {

}

function loadForm() {
    const main = document.getElementById('main');
    //main.textContent = '';
    main.appendChild(createForm());
}

export default loadForm;