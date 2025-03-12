class StickyMenu {
    constructor() {
        this.menu = document.querySelector('#main-header');
        this.stickyMenu = document.querySelector('#sticky-header');

        this.init();
    }

    init() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.stickyMenu.classList.add("hidden-menu");
                } else {
                    this.stickyMenu.classList.remove("hidden-menu");
                }
            });
        });
        observer.observe(this.menu);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new StickyMenu();

    document.querySelector('#wpadminbar').style.display = 'none';
})
