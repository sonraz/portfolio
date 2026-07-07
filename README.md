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


## Graphic Design Service Page

The Graphic Design service page has been completed as part of the portfolio project.

### Features added
- Professional hero section with a graphic-design visual board and floating service tags
- Breadcrumb navigation: Home → Services → Graphic Design
- Introduction section explaining the value of purposeful design
- Design benefit cards for visual communication, brand identity, and goal-focused design
- Service cards for social media graphics, branding, posters, digital ads, presentations, and custom graphics
- Four-step design process section
- Tools and approach section
- Selected work section with project cards and interactive “View design work” buttons
- Final call-to-action section with WhatsApp and project-start buttons
- Dark theme support
- Responsive layouts for desktop, tablet, and mobile devices
- Hover effects for cards, links, buttons, breadcrumbs, and project actions

### Design decisions
- The hero visual uses a custom design-board illustration rather than real client work so the page looks polished while the portfolio is still growing.
- The floating labels represent key graphic design services: branding, social media, and creative work.
- Real completed client projects can later replace the placeholder project cards in the Selected Work section.
- Shared navigation, footer, theme toggle, and responsive styles are reused across the portfolio website for consistency.


## Virtual Assistant Service Page

Completed the Virtual Assistant service page (`virtual-assistant.html`) as part of the portfolio website.

### Features implemented
- Created a service-focused hero section with a task-dashboard visual and floating support tags.
- Added responsive layouts for desktop, tablet, and mobile screens.
- Built an introduction section explaining the value of virtual assistant support.
- Added a styled “VA Benefits” area highlighting time savings, organization, and reliable remote support.
- Created a “What I Can Help With” services grid with hover effects.
- Added a four-step work process section with animated hover effects.
- Added tools, selected work/project cards, and a final call-to-action section.
- Styled breadcrumb navigation with hover states and an active-page highlight.
- Added light-theme and dark-theme styling for the page.
- Improved CTA button spacing and icon alignment, including the WhatsApp button.

### Design and implementation notes
- Used a green accent color for virtual assistant content to distinguish it from other service pages.
- Used reusable class names beginning with `va-` to keep page-specific CSS organized.
- Added subtle card lift, shadow, border, icon, and top-line hover animations for a consistent interactive feel.
- Kept the navigation and theme button design consistent with the rest of the portfolio.
- Used responsive media queries so cards change from multi-column layouts to one-column layouts on smaller screens.


## Milestone: Web Development Portfolio Page

### Completed
- Created the `web-development-portfolio.html` page.
- Added the shared website structure, including the navigation bar, footer, theme button, mobile menu, back-to-top button, and shared JavaScript links.
- Created a page-specific stylesheet: `css/web-development-portfolio.css`.
- Added a hero section introducing the web development portfolio.
- Added a browser-style visual card in the hero section.
- Created and added the hero preview image at:
  `assets/images/portfolio/websites/web-development-hero-preview.png`
- Styled the breadcrumb navigation, including active-page highlighting and hover effects for previous-page links.
- Added a Featured Projects section with three project cards:
  - Modern Business Website
  - Restaurant Website Design
  - Creative Portfolio Website
- Added visual project preview areas with browser top bars, headings, buttons, and mini content cards.
- Corrected the Creative Portfolio preview so its layout matches the other project previews.
- Styled project technology tags and “Discuss a similar project” action links.
- Added hover effects to project cards and action-link arrows.
- Added a “What Every Website Needs” section explaining responsive layouts, clear visual design, and conversion-focused structure.
- Added a final call-to-action section with WhatsApp and project-start buttons.
- Confirmed the page works in both light mode and dark mode.
- Fixed the navigation by reusing the already working navbar structure from the Home page.
- Kept Portfolio category filters on the main Portfolio page unchanged for later refinement.

### Design and Implementation Notes
- The individual portfolio page uses the same shared navigation, footer, theme-switching, animation, and back-to-top features as the rest of the website.
- The hero visual uses a locally stored image rather than a placeholder-only layout, making the page feel more complete.
- The project cards use consistent preview heights and structures to create a balanced grid layout.
- The page is designed to act as a detailed portfolio category page, while `portfolio.html` remains the main portfolio hub page.
- On mobile, visitors can access individual portfolio pages through the portfolio hub cards and category filters. Mobile dropdown navigation will be polished later so the chevron can open submenus separately from the main page links.

### Git Commit
`Create and style web development portfolio page`

# Portfolio Pages Milestone Documentation

## Project
Personal Portfolio Website — Elvis Mati

## Milestone Summary
This milestone focused on building and styling the individual portfolio pages for the services offered on the website.

The completed portfolio pages are:

1. Web Development Portfolio
2. Graphic Design Portfolio
3. Virtual Assistant Portfolio

Each page follows the same shared website structure while using page-specific content, visuals, and styling.

---

# 1. Shared Structure Used Across Portfolio Pages

Each portfolio page uses the same main website components so that the portfolio remains consistent and professional.

## Shared Header and Navigation

Every page includes:

- The Elvis Mati logo
- Main navigation links
- Services dropdown menu
- Portfolio dropdown menu
- Theme switch button
- WhatsApp contact button
- Mobile hamburger navigation
- Mobile WhatsApp button

The navigation is shared across the website using:

- `css/navbar.css`
- `js/navbar.js`
- `js/theme.js`

Using the same navigation structure prevents inconsistencies between pages and ensures the dark mode and mobile menu work the same way everywhere.

## Shared Footer

Each portfolio page contains the shared footer with:

- Personal brand information
- Social media links
- Quick navigation links
- Service links
- WhatsApp and email contact links
- Availability status
- Dynamic copyright year

The year is updated automatically through JavaScript.

## Shared JavaScript Files

The portfolio pages use the following shared JavaScript files:

- `js/script.js` — general website functionality
- `js/navbar.js` — mobile navigation and dropdown behavior
- `js/theme.js` — light and dark mode switching
- `js/animations.js` — page animation effects
- `js/back-to-top.js` — back-to-top button functionality

---

# 2. Web Development Portfolio Page

## File Name

`web-development-portfolio.html`

## Page-Specific CSS

`css/web-development-portfolio.css`

## Purpose

The Web Development Portfolio page presents website concepts and web development work. It shows how websites can be designed to help businesses communicate clearly, build trust, and encourage visitors to take action.

## Main Sections

### Hero Section

The hero introduces the web development portfolio with:

- A Web Development Portfolio label
- A headline focused on business growth
- Call-to-action buttons
- Feature tags such as Responsive Design, Clean Development, and Business Focused
- A browser-style website preview image
- Floating badges for Clean Code and Mobile Ready

The hero preview image is stored in:

`assets/images/portfolio/websites/web-development-hero-preview.png`

### Breadcrumb Section

The breadcrumb helps visitors understand their location on the website:

Home > Portfolio > Web Development

It improves navigation and makes the page structure clearer.

### Featured Projects Section

This section contains three web project concepts:

1. Modern Business Website
2. Restaurant Website Design
3. Creative Portfolio Website

Each project card includes:

- A browser-style preview
- Project category
- Project title
- Short description
- Technology or design tags
- A link to discuss a similar project

The cards use hover effects to create a more interactive experience.

### Website Approach Section

This section explains the main principles behind a good website:

- Responsive Layouts
- Clear Visual Design
- Conversion Focused Structure

### Final Call-to-Action Section

The final section encourages visitors to start a website project through:

- WhatsApp
- Project order page

---

# 3. Graphic Design Portfolio Page

## File Name

`graphic-design-portfolio.html`

## Page-Specific CSS

`css/graphic-design-portfolio.css`

## Purpose

The Graphic Design Portfolio page presents visual design work and sample design concepts. It demonstrates how branding and visual content can help businesses become more recognizable and professional.

## Main Sections

### Hero Section

The hero introduces the graphic design portfolio with:

- A graphic design label
- A headline focused on stronger visual identity
- Call-to-action buttons
- Graphic design feature tags
- A design-board visual
- Floating badges for Creative Design and Strong Visuals

The floating badges use subtle animation to make the hero section feel more active and modern.

### Breadcrumb Section

The breadcrumb shows:

Home > Portfolio > Graphic Design

### Featured Design Projects Section

This section displays sample graphic design project categories such as:

- Brand identity design
- Social media graphics
- Marketing posters and flyers

Each design card includes:

- A visual design preview
- Category label
- Project title
- Description
- Design service tags
- Contact link for similar work

### Design Value Section

This section explains the value of professional graphic design through areas such as:

- Strong brand identity
- Clear visual communication
- Consistent marketing materials

### Final Call-to-Action Section

The final CTA encourages potential clients to discuss their design needs through WhatsApp or the project order page.

---

# 4. Virtual Assistant Portfolio Page

## File Name

`virtual-assistant-portfolio.html`

## Page-Specific CSS

`css/virtual-assistant-portfolio.css`

## Purpose

The Virtual Assistant Portfolio page presents remote support services and task-management examples. It shows how virtual assistance can help clients stay organized, save time, and manage work more efficiently.

## Main Sections

### Hero Section

The hero introduces virtual assistant support with:

- A Virtual Assistant Portfolio label
- A headline focused on organized remote support
- Call-to-action buttons
- Service tags
- A task-management visual
- Floating support-related badges

### Breadcrumb Section

The breadcrumb shows:

Home > Portfolio > Virtual Assistant

The breadcrumb is styled using the `.breadcrumb-section`, `.breadcrumb`, and `.active-page` classes. It includes chevron icons between each navigation level.

### Featured Support Projects Section

This section presents examples of virtual assistant work, such as:

- Email and communication support
- Calendar and task organization
- Research and data support

Each project card includes:

- A task or workspace preview
- Category label
- Project title
- Description
- Relevant service tags
- A link to discuss similar support needs

### Support Approach Section

This section explains the main benefits of virtual assistant services:

- Better organization
- Clear communication
- Reliable task support

### Final Call-to-Action Section

The final CTA allows visitors to contact Elvis through WhatsApp or begin a project through the order page.

---

# 5. Responsive Design

The portfolio pages are designed to work across different screen sizes.

## Desktop

On larger screens:

- Content appears in multi-column layouts
- Hero sections use text and visual content side by side
- Project cards appear in grids
- Floating badges appear around hero visuals

## Tablet and Mobile

On smaller screens:

- Grid layouts stack into one column
- Navigation changes to a hamburger menu
- Buttons wrap or stack when necessary
- Floating badges are repositioned so they remain visible
- Text sizes and spacing are adjusted for readability

The main responsive rules are handled through:

`css/responsive.css`

Additional page-specific mobile adjustments are included in each portfolio page CSS file.

---

# 6. Light and Dark Theme Support

The website supports both light mode and dark mode.

The theme button allows visitors to switch between the two themes.

Portfolio page components such as:

- Cards
- Borders
- Text
- Breadcrumbs
- Floating badges
- Backgrounds

are styled to remain readable and visually balanced in both themes.

The dark theme is controlled through the `dark-theme` class added to the `body` element by `js/theme.js`.

---

# 7. Files Added or Updated in This Milestone

## HTML Files

- `web-development-portfolio.html`
- `graphic-design-portfolio.html`
- `virtual-assistant-portfolio.html`

## CSS Files

- `css/web-development-portfolio.css`
- `css/graphic-design-portfolio.css`
- `css/virtual-assistant-portfolio.css`

## Image Assets

- `assets/images/portfolio/websites/web-development-hero-preview.png`

## Documentation

- `PORTFOLIO-PAGES-MILESTONE.md`

---

# 8. Skills Demonstrated

This milestone demonstrates practical skills in:

- HTML page structure
- Semantic HTML sections
- CSS Grid and Flexbox
- Responsive web design
- Light and dark theme styling
- Navigation and dropdown structure
- Mobile navigation design
- CSS hover effects
- CSS keyframe animations
- Reusable shared website components
- Portfolio presentation design
- Git and GitHub version control

---

# 9. Next Steps

The next stage of the portfolio project can include:

- Reviewing and improving portfolio category filters
- Adding real completed client projects in the future
- Improving the order page
- Final website testing on mobile and desktop
- Checking all links and forms
- Publishing the completed website


## Milestone: Pricing Page Completed

The Pricing page has been designed and completed for the Elvis Mati portfolio website.

### Features completed
- Created a professional pricing hero section with a clear heading and call-to-action buttons.
- Added service pricing for:
  - Web Development
  - Graphic Design
  - Virtual Assistance
- Added a pricing summary card with:
  - Project quote heading
  - Clear and flexible pricing status
  - Service price badges
  - Project quotation notes
  - Custom package availability message
- Added floating badges for:
  - Clear pricing
  - Free consultation
- Improved the payment process section and final call-to-action section.
- Added correct spacing between button text and icons.
- Improved spacing between CTA buttons on desktop and mobile.
- Styled the pricing card for both light mode and dark mode.
- Improved card text contrast so headings, prices, notes, and icons remain readable.
- Made the layout responsive for desktop, tablet, and mobile screens.
- Adjusted floating badges so they remain visible on smaller screens.

### Files updated
- `pricing.html`
- `css/pricing.css`
- `css/responsive.css`

### Git commit
Pricing page completed with responsive light and dark mode styling.


## Milestone: Contact Page and Functional Contact Form

Completed the Contact page for the Elvis Mati Portfolio website.

### What was added

- Created a responsive Contact page with a professional hero section.
- Added a project inquiry card that highlights Web Development, Graphic Design, and Virtual Assistance services.
- Added floating contact badges and responsive positioning for desktop and mobile screens.
- Styled the contact page breadcrumb to match the Pricing page design.
- Added a project inquiry form with fields for:
  - Full name
  - Email address
  - Phone or WhatsApp number
  - Service needed
  - Estimated budget
  - Project details
- Added a Contact Details card with WhatsApp, Gmail, location, and availability information.
- Updated email call-to-action links to open a Gmail compose window addressed to `elvismati.work@gmail.com`.
- Connected the contact form to Formspree so visitors can submit project inquiries directly from the website.
- Configured the visitor email field as `_replyto`, allowing replies from Formspree notifications to go directly to the visitor.
- Tested the contact form successfully.

### Contact Form Workflow

1. A visitor fills in the project inquiry form.
2. The form sends the submitted details to Formspree.
3. Formspree forwards the inquiry to `elvismati.work@gmail.com`.
4. The message includes the visitor’s name, email, phone number, service, budget, and project details.
5. Replying to the notification email addresses the response to the visitor automatically.


## Milestone: Order / Project Request Page

The Order page was created to allow visitors to submit project inquiries directly from the portfolio website.

### Features added

- Created `order.html` as the main project request page.
- Connected the project request form to Formspree using the same endpoint as the Contact page.
- Added fields for:
  - Full name
  - Email address
  - Phone / WhatsApp number
  - Service needed
  - Estimated budget
  - Preferred project timeline
  - Project details
  - Project inquiry agreement checkbox
- Added form validation using required fields.
- Added a styled project agreement checkbox to confirm that submitting the form does not create a payment obligation.
- Added a WhatsApp call-to-action for visitors who prefer a faster conversation.
- Styled form inputs, select fields, and the project details textarea so they are clearly visible and interactive.
- Improved dark mode styling by adding stronger card borders and clearer form field backgrounds.
- Added responsive styling so the page works well on desktop, tablet, and mobile screens.

### Files added or updated

- `order.html`
- `css/order.css`
- `README.md`