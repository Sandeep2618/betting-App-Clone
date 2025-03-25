document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded!");
    
    document.querySelectorAll(".game-card img").forEach(img => {
        img.addEventListener("click", () => {
            alert("Game Selected: " + img.alt);
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".games-slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    // Scroll to the left
    prevBtn.addEventListener("click", function () {
        slider.scrollBy({ left: -200, behavior: "smooth" });
    });

    // Scroll to the right
    nextBtn.addEventListener("click", function () {
        slider.scrollBy({ left: 200, behavior: "smooth" });
    });

    // Enable Touch Swipe for Mobile
    let startX;

    slider.addEventListener("touchstart", function (e) {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener("touchmove", function (e) {
        let diff = startX - e.touches[0].clientX;
        slider.scrollLeft += diff;
    });
});

// tips and tricks

let currentIndex = 0;
const dots = document.querySelectorAll(".dot");

function changeSlide() {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
    currentIndex = (currentIndex + 1) % dots.length;
}

setInterval(changeSlide, 3000);