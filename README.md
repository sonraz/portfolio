## About Page Development

The About page was created to give visitors a more personal and professional understanding of Elvis Mati beyond the services offered.

### Page Sections Added

- About page hero section with breadcrumb navigation
- Professional introduction section with profile image
- “Digital Professional” image badge
- Personal story and career direction section
- Skills and tools section
- Career journey section
- Hobbies and interests section
- Personal gallery section prepared for future images and videos
- Call-to-action section for visitors who want to start a project or get in touch

### Image Structure

A dedicated folder was added for the About page profile image:

```text
assets/
└── images/
    └── about/
        └── elvis-mati-about.png


        ## Web Development Service Page

The Web Development service page was created to explain the website design and development services offered through the portfolio.

### Page sections added

- Web Development hero section with clear call-to-action buttons
- Breadcrumb navigation: Home → Services → Web Development
- Website preview card using a fictional business homepage image
- Floating technology tags for HTML, CSS, JavaScript, and Responsive Design
- Introduction section explaining the value of a professional website
- Website types section for business, portfolio, restaurant, school, organization, and landing-page websites
- Four-step development process section
- Tools and technologies section with hover effects
- Related web projects section
- Final call-to-action section with WhatsApp and project-start buttons
- Shared footer, mobile WhatsApp shortcut, theme switcher, and back-to-top button

### Design and styling decisions

- The hero uses a subtle blended blue background instead of a strong circular gradient.
- The fictional business homepage image is stored in:

  `assets/images/services/web-development/fictional-business-homepage.png`

- The preview image is displayed inside a browser-style card to represent a sample website project.
- Floating HTML, CSS, JavaScript, and Responsive tags remain outside the preview image because they communicate the technologies used to build the website.
- Section headings such as “What I Can Build” and “How We Work” use bold blue underline styling for stronger visual hierarchy.
- Website-type cards use clean icons, spacing, hover movement, and soft shadows to make the section easier to scan.
- Technology cards include hover effects to make the tools section feel interactive without becoming distracting.
- The final CTA background was adjusted to use a deeper, more professional blue tone.

### Files added or updated

- `web-development.html`
- `css/web-development.css`
- `assets/images/services/web-development/fictional-business-homepage.png`
- Shared CSS files where required for global styling consistency

### Git milestone

Commit message used:

```text
Build web development service page