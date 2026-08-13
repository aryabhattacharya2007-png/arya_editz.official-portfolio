// ==========================
// ARYA EDITZ OFFICIAL
// SCRIPT.JS
// ==========================

// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "80px";
        navLinks.style.right = "20px";
        navLinks.style.background = "#ffffff";
        navLinks.style.padding = "20px";
        navLinks.style.borderRadius = "15px";
        navLinks.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
    }

});

// SCROLL ANIMATION

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

const hiddenElements = document.querySelectorAll(
    ".about, .services, #thumbnail, #videos, .stats, #contact"
);

hiddenElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});

// ACTIVE NAVBAR LINK

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// STATS COUNTER

const counters = document.querySelectorAll(".stat-box h2");

const runCounter = () => {

    counters.forEach(counter => {

        const target = parseInt(counter.innerText);

        let count = 0;

        const speed = target / 100;

        const updateCount = () => {

            if (count < target) {

                count += speed;

                counter.innerText =
                    Math.ceil(count) + "+";

                requestAnimationFrame(updateCount);

            } else {

                counter.innerText =
                    target + "+";

            }

        };

        updateCount();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const statsSection =
        document.querySelector(".stats");

    if (
        statsSection &&
        window.scrollY >
            statsSection.offsetTop - 500 &&
        !counterStarted
    ) {
        runCounter();
        counterStarted = true;
    }

});

// HERO IMAGE FLOAT EFFECT

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    setInterval(() => {

        heroImage.style.transform =
            "translateY(-10px)";

        setTimeout(() => {

            heroImage.style.transform =
                "translateY(0px)";

        }, 1000);

    }, 2000);

}

// CURRENT YEAR IN FOOTER

const footerText = document.querySelector("footer p:last-child");

if (footerText) {

    footerText.innerHTML =
        `© ${new Date().getFullYear()} All Rights Reserved.`;

}