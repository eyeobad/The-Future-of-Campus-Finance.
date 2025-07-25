# Student Waitlist Landing Page

A fast, modern, and responsive landing page designed to collect .edu student email addresses for an exclusive waitlist.

## Features

- Sleek, single-page design for high conversion.
- Conditional "Thank You" page that displays the user's school logo for recognized domains.
- Email collection and validation via an embedded Tally.so form.
- Analytics tracking with Mixpanel.
- Customer support chat enabled via Intercom.

## Tech Stack

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- Tally.so, Mixpanel, Intercom

## Setup

1.  **Clone the repository.**
2.  **Tally.so:** Create a form on Tally.so that accepts `.edu` emails. Copy the `<iframe>` embed code and paste it into `index.html`.
3.  **Mixpanel:** Sign up for Mixpanel, get your Project Token, and paste it into the `mixpanel.init()` call in `index.html`.
4.  **Intercom:** Sign up for Intercom, get your Workspace ID, and paste it into the `window.intercomSettings` object in `index.html`.
5.  **School Logos:** Add your 21 school logos as `.png` or `.svg` files inside the `/public/logos/` directory.
6.  **Update School Data:** Open `scripts/main.js` and `scripts/success.js` and update the `schoolData` object with your 21 school domains, names, and logo paths.

## Deployment

This project is optimized for Vercel.

1.  Push your completed code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com) and sign in with your GitHub account.
3.  Click "Add New... > Project" and import your repository.
4.  Vercel will automatically detect the static site and deploy it. No configuration is needed.