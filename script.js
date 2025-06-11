// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

// Google Form Submission for Contact Section
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success-message');
    const spinner = document.getElementById('form-spinner');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (spinner) spinner.style.display = 'block';
            if (successMsg) successMsg.style.display = 'none';
            const formData = new FormData(form);
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (spinner) spinner.style.display = 'none';
                if (response.ok) {
                    form.reset();
                    if (successMsg) {
                        successMsg.textContent = 'Thank you! Your message has been sent.';
                        successMsg.style.display = 'block';
                    }
                } else {
                    return response.json().then(data => {
                        throw new Error(data.error || 'Unknown error');
                    });
                }
            }).catch(() => {
                if (spinner) spinner.style.display = 'none';
                if (successMsg) {
                    successMsg.textContent = 'Sorry, there was an error. Please try again later.';
                    successMsg.style.display = 'block';
                }
            });
        });
    }
});