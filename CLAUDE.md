# Portfolio Website

## Project Overview
A modern, minimal portfolio website built with vanilla web technologies to showcase web development projects. Features dark mode support for enhanced user experience.

## Tech Stack
- **HTML5**: Semantic markup for content structure
- **CSS3**: Modern styling with flexbox/grid layouts
- **Vanilla JavaScript**: No frameworks - pure JS for interactivity

## Design Principles
- **Modern**: Clean, contemporary design with thoughtful spacing
- **Minimal**: Uncluttered interface focusing on content
- **Dark Mode Support**: Toggle between light and dark themes
- **Responsive**: Mobile-first approach for all screen sizes

## Features
- Project showcase with thumbnails and descriptions
- Dark/light mode toggle with system preference detection
- Smooth scrolling navigation
- Contact form with validation
- Responsive layout for all devices
- Performance optimized assets

## Project Structure
```
portfolio-website/
├── index.html
├── css/
│   ├── styles.css
│   └── dark-mode.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

## Implementation Guidelines
- Use semantic HTML elements for accessibility
- Implement CSS custom properties for theme management
- Write vanilla JavaScript with modern ES6+ features
- Ensure fast loading times and optimal performance
- Follow accessibility best practices (WCAG guidelines)
- Use CSS Grid and Flexbox for responsive layouts

## Dark Mode Implementation
- Use CSS variables for color schemes
- Implement theme toggle with localStorage persistence
- Respect system preference with `prefers-color-scheme`
- Smooth transitions between themes

## JavaScript Functionality
- Theme toggle functionality
- Form validation and submission
- Smooth scrolling navigation
- Dynamic content loading if needed
- Animation effects (subtle and purposeful)

## Styling Approach
- Mobile-first responsive design
- CSS custom properties for theming
- Modern CSS features (Grid, Flexbox, clamp, etc.)
- Consistent spacing and typography
- Performance-focused with minimal CSS

## Design System

### Color Palette
- **Primary Blue**:
  - Light theme: #2563eb (blue-600)
  - Dark theme: #3b82f6 (blue-500)
- **Secondary Purple**:
  - Light theme: #7c3aed (purple-600)
  - Dark theme: #a855f7 (purple-500)
- **Neutral Colors**:
  - Light theme: White background, gray-800 text
  - Dark theme: Gray-900 background, gray-200 text
- **Accent Colors**: For highlights and interactive elements

### Spacing Scale
- **Base Unit**: 8px
- **Scale**: 0.5rem (4px), 1rem (8px), 1.5rem (12px), 2rem (16px), 3rem (24px), 4rem (32px), 6rem (48px), 8rem (64px)
- **Usage**: Consistent spacing between elements, padding, and margins

### Typography Scale
- **Display**: 3rem (48px) - Hero titles
- **Heading 1**: 2.25rem (36px) - Main section titles
- **Heading 2**: 1.875rem (30px) - Subsection titles
- **Heading 3**: 1.5rem (24px) - Card titles
- **Body Large**: 1.25rem (20px) - Intro text
- **Body Regular**: 1rem (16px) - Main content
- **Body Small**: 0.875rem (14px) - Captions, metadata
- **Caption**: 0.75rem (12px) - Fine print
- **Font Family**: System font stack (Inter, Roboto, or similar)

### Component Patterns
- **Cards**: Project showcase items with image, title, description
- **Buttons**: Primary (blue), secondary (purple), outline variants
- **Navigation**: Responsive header with mobile menu toggle
- **Forms**: Contact form with input fields, textarea, submit button
- **Modals**: Project detail views (optional)
- **Badges**: Technology tags for projects
- **Links**: Underlined on hover, different styles for internal/external

## Current Goals
1. **Build Responsive Navigation**
   - Mobile-friendly hamburger menu
   - Smooth scrolling to sections
   - Active link highlighting

2. **Create Animated Hero Section**
   - Engaging entrance animations
   - Typewriter effect for tagline
   - Call-to-action button with hover effects

3. **Add Projects Grid**
   - Responsive grid layout
   - Project cards with hover effects
   - Filtering capabilities (optional)

4. **Build Contact Form**
   - Form validation with JavaScript
   - Accessible form fields
   - Success/error messaging

5. **Implement Dark Mode**
   - Theme toggle switch
   - System preference detection
   - Smooth transition between themes

## Development Notes
- Keep JavaScript unobtrusive and progressive
- Optimize images for web delivery
- Ensure cross-browser compatibility
- Maintain clean, well-commented code
- Follow accessibility standards