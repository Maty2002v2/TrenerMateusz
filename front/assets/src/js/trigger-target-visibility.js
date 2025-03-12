export default class TriggerTargetVisibility {

    /**
     * @param {string} triggerSelector - listened elements selector
     * @param {string} targetSelector - target element selector
     * @param {function} callback - optional callback
     */
    constructor(triggerSelector, targetSelector, callback = () => {}) {
        this.triggerElements = document.querySelectorAll(triggerSelector);
        this.targetElement = document.querySelector(targetSelector);
        this.callback = callback;

        this.init();
    }

    init() {
        this.listening();
    }

    listening() {
        if (!this.triggerElements || !this.targetElement) throw new Error('No find element');

        this.triggerElements.forEach(trigger => {
            trigger.addEventListener('click', (event) => {
                this.targetElement.classList.toggle('no-visibility');

                this.callback(event);
            });
        });
    }
}
