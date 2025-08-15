document.addEventListener('DOMContentLoaded', () => {

    const categories = [
    {
        title: "DOM Fundamentals",
        projects: [
            { folder: '01-colors', title: 'Color Flipper', description: 'Changes the background color with a single click.', image: 'color-flipper.png', file: 'hex.html' },
            { folder: '02-counter', title: 'Counter', description: 'A simple counter with increment/decrement buttons.', image: 'counter.png' },
            { folder: '03-reviews', title: 'Reviews', description: 'A carousel for displaying customer testimonials.', image: 'reviews.png' },
            { folder: '04-NavBar', title: 'Navbar', description: 'A fully responsive navigation bar.', image: 'navbar.png' },
            { folder: '05-sidebar', title: 'Sidebar', description: 'An animated side menu that slides into view.', image: 'sidebar.png' },
            { folder: '06-modal', title: 'Modal', description: 'A pop-up window that appears over the main content.', image: 'modal.png' },
        ]
    },
    {
        title: "Common UI Components",
        projects: [
            { folder: '07-questions', title: 'Questions', description: 'An accordion-style FAQ section.', image: 'questions.png' },
            { folder: '08-menu', title: 'Menu', description: 'A filterable restaurant menu page.', image: 'menu.png' },
            { folder: '09-video', title: 'Video Background', description: 'A video player serving as a hero background.', image: 'video.png' },
            { folder: '10-scroll', title: 'Scroll', description: 'A page with smooth scrolling and a fixed navbar.', image: 'scroll.png' },
            { folder: '11-tabs', title: 'Tabs', description: 'Content organized into clickable tabs.', image: 'tabs.png' },
            { folder: '15-slider', title: 'Slider', description: 'A simple and functional image slider.', image: 'slider.png' },
        ]
    },
    {
        title: "API and Data-Driven Apps",
        projects: [
            { folder: '21-dad-jokes', title: 'Dad Jokes', description: 'Generates random jokes from an API.', image: 'dad-jokes.png' },
            { folder: '22-products', title: 'Products Page', description: 'Fetches and displays products from an e-commerce API.', image: 'products.png' },
            { folder: '23-random-user', title: 'Random User', description: 'Generates random user profiles from an API.', image: 'random-user.png' },
            { folder: '24-cocktails', title: 'Cocktails DB', description: 'Searches for drink recipes using an API.', image: 'cocktails.png' },
            { folder: '27-pagination', title: 'Pagination', description: 'Fetches data and displays it across multiple pages.', image: 'pagination.png' },
            { folder: '28-wikipedia', title: 'Wikipedia API', description: 'Allows users to search for articles on Wikipedia.', image: 'wikipedia.png' },
        ]
    },
    {
        title: "Complex Projects & OOP",
        projects: [
            { folder: '29-comfy-store', title: 'Comfy Store', description: 'A complete e-commerce experience with a shopping cart.', image: 'comfy-store.png' },
            { folder: '26-stripe-submenus', title: 'Stripe Submenus', description: 'Recreates the dynamic submenus from the Stripe website.', image: 'stripe-submenus.png' },
            { folder: '19-dark-mode', title: 'Dark Mode', description: 'Implements a dark theme toggle functionality.', image: 'dark-mode.png' },
            { folder: '14-grocery-bud', title: 'Grocery Bud', description: 'An interactive to-do list for groceries.', image: 'grocery-bud.png' },
            { folder: '12-countdown-timer', title: 'Countdown', description: 'A countdown timer for a specific event.', image: 'countdown.png' },
            { folder: '16-counterOOP', title: 'Counter (OOP)', description: 'A counter built using Object-Oriented Programming.', image: 'counter-oop.png' },
            { folder: '17-galleryOOP', title: 'Gallery (OOP)', description: 'An image gallery built using Object-Oriented Programming.', image: 'gallery-oop.png' },
            { folder: '13-lorem-ipsum', title: 'Lorem Ipsum Gen', description: 'A generator for Lorem Ipsum placeholder text.', image: 'lorem-ipsum.png' },
            { folder: '18-numbers', title: 'Numbers', description: 'An animation of numbers counting up to a final value.', image: 'numbers.png' },
            { folder: '20-filters', title: 'Filters', description: 'Filters products based on search input and category.', image: 'filters.png' },
            { folder: '25-slider', title: 'ES6 Slider', description: 'A modern image slider built with ES6 Classes.', image: 'es6-slider.png' },
        ]
    },
];

    const portfolioContainer = document.getElementById('portfolio-container');

    function createCarousels() {
        categories.forEach(category => {
            const categorySection = document.createElement('section');
            categorySection.className = 'carousel-category';

            const title = document.createElement('h2');
            title.textContent = category.title;
            categorySection.appendChild(title);

            const carousel = document.createElement('div');
            carousel.className = 'carousel';

            const carouselContainer = document.createElement('div');
            carouselContainer.className = 'carousel-container';

            category.projects.forEach(project => {
                const card = document.createElement('div');
                card.className = 'card';
                
                card.onclick = () => window.open(`${project.folder}/${project.file || 'index.html'}`, '_blank');

                card.innerHTML = `
                    <img src="./assets/thumbnails/${project.image}" alt="${project.title}" onerror="this.onerror=null;this.src='./assets/thumbnails/placeholder.png'"/>
                    <div class="card-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="${project.folder}/${project.file || 'index.html'}" class="btn" target="_blank" rel="noopener noreferrer">Abrir</a>
                    </div>
                `;
                carouselContainer.appendChild(card);
            });

            carousel.appendChild(carouselContainer);
            carousel.innerHTML += `
                <button class="nav-btn prev"><i class="fas fa-chevron-left"></i></button>
                <button class="nav-btn next"><i class="fas fa-chevron-right"></i></button>
            `;

            categorySection.appendChild(carousel);
            portfolioContainer.appendChild(categorySection);
        });
    }

    function setupNavigation() {
        const carousels = document.querySelectorAll('.carousel');
        carousels.forEach(carousel => {
            const container = carousel.querySelector('.carousel-container');
            const prevBtn = carousel.querySelector('.prev');
            const nextBtn = carousel.querySelector('.next');

            
    }

    createCarousels();
    setupNavigation();
});