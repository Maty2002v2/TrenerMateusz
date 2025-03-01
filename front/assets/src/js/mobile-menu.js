import TriggerTargetVisibility from './trigger-target-visibility';

class MobileMenu {
    constructor() {
        this.linksWithChildren = document.querySelectorAll('[data-has-children]');
        
        this.init();
    }

    init () {
        new TriggerTargetVisibility('[data-hamburger-trigger]', '[data-hamburger-target]');
        new TriggerTargetVisibility('[data-menu-backdrop]', '[data-hamburger-target]');

        this.listeningToExpandingSubMenu();
    }

    // TODO try move to TriggerTargetVisibility
    listeningToExpandingSubMenu() {
        this.linksWithChildren.forEach(link => {
            const submenu = link.querySelector('.sub-menu');
            const plusIcon = link.querySelector('.plus');

            link.addEventListener('click', () => {
                submenu.classList.toggle('side-sub-menu-active');
                plusIcon.classList.toggle('is-active');
            }); 
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new MobileMenu();
})
