import TriggerTargetVisibility from './trigger-target-visibility';

class SearchBox {
    constructor() {
        this.init();
    }

    init() {
        new TriggerTargetVisibility('[data-search-box-trigger]', '[data-search-box-target]', this.autoFocusAfterShow);
        new TriggerTargetVisibility('[data-search-box-trigger]', '[data-search-box-backdrop-target]');
    }

    autoFocusAfterShow() {
        const searchInput = document.querySelector('.search-box__input');
        searchInput.focus();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new SearchBox();
})
