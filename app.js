const toggleButton = document.getElementById("navbar-toggle");
const navLinks = document.getElementById("nav-links");
toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

    const images = document.querySelectorAll('.carousel img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    // Show initial image
    showImage(currentIndex);

    // Next button event
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Previous button event
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

