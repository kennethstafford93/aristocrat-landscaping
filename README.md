# Aristocrat Landscaping Website

A responsive static website for a South Jersey landscaping business.

## Run locally
Open `index.html` in a browser, or use a local server (for example, `python3 -m http.server 8000`) and open `http://localhost:8000`.

## Publish with GitHub Pages
1. Create a new public GitHub repository, for example `aristocrat-landscaping`.
2. Upload **all files and folders** from this directory to the repository root. Do not upload only the ZIP.
3. On GitHub go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
4. Your site will be accessible at `https://YOUR-USERNAME.github.io/aristocrat-landscaping/`.

## Contact form IMPORTANT
The forms use the third-party service [FormSubmit](https://formsubmit.co/) and POST to `aristocratlandscaping@outlook.com`. **Email delivery is not active until the mailbox owner submits a test form and follows FormSubmit's activation/verification email.** Test delivery after deployment and check the spam folder if necessary. GitHub Pages by itself cannot email form submissions. This integration sends form contents to a third party; review their policies before publishing. If you prefer an alternative with spam protection, use a server-side integration or a hosted form provider.

## Homepage logo
The homepage displays a typographic logo **recreated from the lettering visible on the truck**. It is not the original vector logo. If you acquire the official SVG or transparent PNG, replace the `logo-hero-lockup` block in `index.html` with an `img` for the exact brand design.

## Update website
- Phone and email are in the HTML templates; search across files to change them.
- Photos live under `assets/images/`.
- Services are listed in `main.js` (for service descriptions) and the homepage HTML (cards).
- For clarity, this site doesn't display unverified reviews, warranties, or claims.
