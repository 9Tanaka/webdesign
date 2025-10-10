const navElement = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    navElement.classList.toggle("active");
    hamburger.classList.toggle("open");
});


document.addEventListener('DOMContentLoaded', function() {
            if (window.innerWidth <= 768) {
                const dropdownSubmenus = document.querySelectorAll('.dropdown-submenu');
                dropdownSubmenus.forEach(submenu => {
                    submenu.addEventListener('click', function(e) {
                        const dropdownItem = this.querySelector('.dropdown-item');
                        if (e.target === dropdownItem) {
                            e.preventDefault();
                            e.stopPropagation();
                            this.classList.toggle('show');
                        }
                    });
                });
            }
        });