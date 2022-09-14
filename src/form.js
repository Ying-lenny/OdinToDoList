//Generates a form for the page
function createForm() {
    const formDiv = document.createElement('div');
    formDiv.classList.add('form-div');

    const form = document.createElement('form');
    form.classList.add('form');

    formDiv.appendChild(form);
    form.appendChild(createGeneric("task"));
    form.appendChild(createGeneric("description"));
    form.appendChild(createStatus());
    form.appendChild(createCategory());

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
    formRow.append(formInput);

    return formRow;
}

//Creates a status row and options to select from
function createStatus() {
    const formRow = document.createElement('tr');

    //Generate Datacell
    const formData = document.createElement('td');
    formData.innerText = 'Status';

    const formSelect = document.createElement('select');

    const formOptionU = document.createElement('option');
    formOptionU.setAttribute('value', 'unfinished');
    formOptionU.innerText = 'Unfinished';

    const formOptionF = document.createElement('option');
    formOptionF.setAttribute('value', 'finished');
    formOptionF.innerText = 'Finished';

    formSelect.appendChild(formOptionU);
    formSelect.appendChild(formOptionF);

    formRow.appendChild(formData);
    formRow.appendChild(formSelect);
    
    return formRow;
}

//Creates a status row and options to select from
function createCategory() {
    const formRow = document.createElement('tr');

    //Generate Datacell
    const formData = document.createElement('td');
    formData.innerText = 'Category';

    const formSelect = document.createElement('select');

    const formCategory = document.createElement('option');
    formCategory.setAttribute('value', 'unfinished');
    formCategory.innerText = 'Category';

    formSelect.appendChild(formCategory);

    formRow.appendChild(formData);
    formRow.appendChild(formSelect);
    
    return formRow;
}

function loadForm() {
    const main = document.getElementById('main');
    //main.textContent = '';
    main.appendChild(createForm());
}

export default loadForm;