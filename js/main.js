
/* =========================================
   VELORA - MAIN JAVASCRIPT
========================================= */


/* =========================================
   1. MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {
        const isOpen = navMenu.classList.toggle("active");

        menuToggle.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
    });

    // Tutup menu setelah link dipilih
    navMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        });
    });

}


/* =========================================
   2. SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".reveal, .about-reveal"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.1
        }
    );

    revealElements.forEach(function (element) {
        observer.observe(element);
    });

} else {

    // Fallback untuk browser yang tidak mendukung observer
    revealElements.forEach(function (element) {
        element.classList.add("active");
        element.classList.add("visible");
    });

}


/* =========================================
   3. PRODUCT CATALOG FILTER
========================================= */

// Filter hanya berlaku di bagian katalog.
// Featured Collection tidak ikut terpengaruh.

const filterButtons = document.querySelectorAll(
    ".catalog .filter-btn"
);

const catalogProducts = document.querySelectorAll(
    ".catalog .product-card"
);

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Atur tombol aktif
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const selectedCategory = button.dataset.filter;

        // Filter produk
        catalogProducts.forEach(function (product) {

            const productCategory = product.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === productCategory
            ) {
                product.classList.remove("hide");
            } else {
                product.classList.add("hide");
            }

        });

    });

});


/* =========================================
   4. AUTOMATIC FOOTER YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================
   5. NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.querySelector(".navbar");

function handleNavbarScroll() {

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", handleNavbarScroll);

handleNavbarScroll();


/* =========================================
   6. WEBSITE LOADED
========================================= */

console.log("VELORA website successfully loaded.");
