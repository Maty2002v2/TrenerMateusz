document.addEventListener("DOMContentLoaded", () => {
    const elementsToObserve = document.querySelectorAll(".cooperation-steps__list-item");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elementsToObserve.forEach(el => observer.observe(el));
});
