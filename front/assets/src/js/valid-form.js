export default class ValidForm {
    constructor(formElement) {
        if (typeof formElement == 'string') {
            this.form = document.querySelector(formElement);
            this.inputs = this.form.querySelectorAll('input, .basic-select');
        } else {
            this.inputs = formElement.querySelectorAll('input, .basic-select');
        }
        
        this.invalidInputs = [];
    }

    isValid() {
        this.invalidInputs = [...this.inputs].filter((input) => {
            if (!input.hasAttribute('required')) return false;
            
            if(input.tagName === 'INPUT') {
                if (input.value.trim() === "" || !input.checkValidity()) {
                    return true;
                }
            }
            
            if (input.tagName === 'DIV' && input.classList.contains('basic-select')) {
                if (!input.dataset.value || input.dataset.value.trim() === "") {
                    return true;
                }
            }

            return false;
        });

        return this.invalidInputs.length === 0;
    }

    highlightInvalidInputs() {
        this.invalidInputs.forEach((input) => {
            input.classList.add('invalid-input');
        });

        setTimeout(() => {
            this.invalidInputs.forEach((input) => {
                input.classList.remove('invalid-input');
            });
        }, 100)
    }
}
