// This is the map of your 21 schools.
// The key is the domain, and the value is the school's name and logo path.
const schoolData = {
    'harvard.edu': { name: 'Harvard University', logo: 'public/logos/harvard.png' },
    'stanford.edu': { name: 'Stanford University', logo: 'public/logos/stanford.png' },
    'mit.edu': { name: 'Massachusetts Institute of Technology', logo: 'public/logos/mit.png' },
    // ... Add your other 18 schools here ...
    'yale.edu': { name: 'Yale University', logo: 'public/logos/yale.png' }
};

// Listen for a message from the Tally iframe
window.addEventListener('message', event => {
    if (event.origin === 'https://tally.so') {
        let payload;
        try {
            payload = JSON.parse(event.data);
        } catch (error) {
            return; // Not a valid JSON message
        }

        // Check if it's the form submission event
        if (payload.event === 'Tally.formSubmitted') {
            const emailField = payload.data.fields.find(field => field.type === 'EMAIL');
            if (emailField && emailField.value) {
                const email = emailField.value;
                const domain = email.substring(email.lastIndexOf('@') + 1);

                // Track the event in Mixpanel
                if (window.mixpanel) {
                    mixpanel.track('Waitlist Signup', { email: email, domain: domain });
                    mixpanel.people.set({ '$email': email });
                }

                // Check if the domain is in our list of schools
                if (schoolData[domain]) {
                    // Redirect to success page with school domain
                    window.location.href = `success.html?domain=${domain}`;
                } else {
                    // Redirect to generic success page
                    window.location.href = 'success.html';
                }
            }
        }
    }
});