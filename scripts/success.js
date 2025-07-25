// This map must be identical to the one in main.js
const schoolData = {
    'harvard.edu': { name: 'Harvard University', logo: 'public/logos/harvard.png' },
    'stanford.edu': { name: 'Stanford University', logo: 'public/logos/stanford.png' },
    'mit.edu': { name: 'Massachusetts Institute of Technology', logo: 'public/logos/mit.png' },
    // ... Add your other 18 schools here ...
    'yale.edu': { name: 'Yale University', logo: 'public/logos/yale.png' }
};

document.addEventListener('DOMContentLoaded', () => {
    const successContainer = document.getElementById('success-container');
    const params = new URLSearchParams(window.location.search);
    const domain = params.get('domain');

    if (domain && schoolData[domain]) {
        // A recognized school domain was found
        const school = schoolData[domain];
        successContainer.innerHTML = `
            <img src="${school.logo}" alt="${school.name} Logo" class="h-24 w-24 mb-6">
            <h1 class="text-4xl md:text-5xl font-bold">Welcome, ${school.name}!</h1>
            <p class="text-lg md:text-xl text-gray-400 mt-4">You're on the exclusive waitlist. We'll see you on campus.</p>
        `;
    } else {
        // Default message for non-recognized .edu emails or no domain
        successContainer.innerHTML = `
            <h1 class="text-4xl md:text-6xl font-bold">You're on the list!</h1>
            <p class="text-lg md:text-xl text-gray-400 mt-4">Thanks for signing up. We'll be in touch with updates soon.</p>
        `;
    }
});