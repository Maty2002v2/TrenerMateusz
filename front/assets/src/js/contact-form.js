document.addEventListener( 'wpcf7invalid', function() {
    document.querySelector('.wpcf7-response-output').classList.add('hidden-response');
}, false );

document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll('.wpcf7-form');

    forms.forEach(form => {
        const button = form.querySelector('.basic-button');

        form.addEventListener('submit', function () {
            button.classList.add('load');
        });

        form.addEventListener('wpcf7submit', function () {
            button.classList.remove('load');
        });

        form.addEventListener('wpcf7mailsent', function () {
            button.classList.add("fly");
    
            // Opcjonalnie: Reset po 2 sekundach
            setTimeout(() => {
                button.classList.remove("fly");
            }, 7000)
        });
    })
});
