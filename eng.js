// Smooth Scroll Functionality

document.querySelectorAll('.nav-links a').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);

        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({

            behavior: 'smooth'

        });

    });

});

// Sticky Navigation Bar

window.addEventListener('scroll', function() {

    const header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 0);

});

// Slide-in Functionality for Sections

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('slide-in');

            observer.unobserve(entry.target); // Stop observing once the animation is applied

        }

    });

}, {

    threshold: 0.1  // Trigger the animation when 10% of the section is visible

});

// Apply the observer to all sections

document.querySelectorAll('section').forEach(section => {

    observer.observe(section);

});

// Contact Form Submission

document.querySelector('.contact-form').addEventListener('submit', function(e) {

    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value;

    const email = document.querySelector('input[name="email"]').value;

    const message = document.querySelector('textarea[name="message"]').value;

    if (name && email && message) {

        alert(`Thank you ${name}, your message has been sent!`);

        // Clear form fields after submission

        document.querySelector('.contact-form').reset();

    } else {

        alert('Please fill in all fields before submitting.');

    }

});