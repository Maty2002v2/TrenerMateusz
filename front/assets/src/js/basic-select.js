const selects = document.querySelectorAll('.basic-select');

window.addEventListener('DOMContentLoaded', () => {
    [...selects].forEach((select) => {
        const selectBtn = select.querySelector('.basic-select__btn');
        const selectMenu = select.querySelector('.basic-select__menu');
        const items = select.querySelectorAll('.basic-select__item');
        const selectedItem = select.querySelector('.basic-select__selected-item');
        
        // selectBtn.addEventListener('click', () => {
        //     toggleMenu();
        // });

        window.addEventListener('click', () => {
            closeMenu();
        });

        selectBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            toggleMenu();
        });

        [...items].forEach(item => item.addEventListener('click', (event) => {
            itemClickHandle(event)
        }));

        const itemClickHandle = (event) => {
            items.forEach(item => item.classList.remove('basic-select-item--active'));

            selectedItem.innerHTML = event.target.textContent;
            select.dataset.value = event.target.dataset.value;
            event.target.classList.add('basic-select-item--active');
            closeMenu();
        }

        const closeMenu = () => {
            selectMenu.classList.remove('basic-select__menu--open');
        };

        const toggleMenu = () => {
            selectMenu.classList.toggle('basic-select__menu--open');
        };
    });
})
