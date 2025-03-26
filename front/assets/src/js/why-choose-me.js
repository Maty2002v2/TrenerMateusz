document.addEventListener("DOMContentLoaded", () => {
    const elementsToObserve = document.querySelectorAll(".why-choose-me__reason-content");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.8 });

    elementsToObserve.forEach(el => observer.observe(el));
});
