export default class UI {

    static printOnLoad() {
        console.log('It worked!')
        UI.detectButton();
    }

    static detectButton() {
        const submitButton = document.getElementById('submit-project')

        submitButton.addEventListener('click', UI.print)
    }

    static print() {
        console.log('Hi')
        
    }
};