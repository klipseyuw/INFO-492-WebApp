# Agentic AI Systems in Logistics Cybersecurity - Thesis Web Application

## Overview

This web application presents the INFO 492 B thesis research on "Agentic AI Systems in Logistics Cybersecurity" by the team consisting of Kenta Lipsey, Hanrui Tang, Brian Yuan, and Ajit Mallavarapu.

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Interactive Visualizations**: Dynamic ecosystem maps and threat analysis timelines
- **AI Management Dashboard**: Mockup interface for AI agent governance and control
- **Comprehensive Research**: Academic citations and methodology documentation
- **Team Perspectives**: Individual insights and stakeholder research findings
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

## File Structure

```
├── index.html                    # Main landing page (root level)
├── README.md                     # Project documentation
├── assets/                       # Static resources
│   ├── images/                   # Image files (placeholder)
│   └── icons/                    # Icon files (placeholder)
├── css/                          # Stylesheets
│   ├── styles.css                # Main stylesheet with responsive design
│   ├── ecosystem.css             # Ecosystem page specific styles
│   ├── threats.css               # Threats page specific styles
│   ├── dashboard.css             # Dashboard page specific styles
│   ├── team.css                  # Team page specific styles
│   ├── citations.css             # Citations page specific styles
│   └── global-enhancements.css   # Performance and accessibility enhancements
├── js/                           # JavaScript files
│   ├── script.js                 # Main JavaScript functionality
│   ├── ecosystem.js              # Ecosystem page interactivity
│   ├── threats.js                # Threats page functionality
│   ├── dashboard.js              # Dashboard page features
│   ├── team.js                   # Team page animations
│   └── citations.js              # Citations management system
└── pages/                        # Secondary HTML pages
    ├── ecosystem.html            # Interactive logistics ecosystem visualization
    ├── threats.html              # Cyber vulnerability analysis
    ├── dashboard.html            # AI agent management interface
    ├── team.html                 # Team perspectives and research insights
    └── citations.html            # Academic sources and references
```

## Project Structure Benefits

This application follows modern web development best practices with organized file structure:

- **Separation of Concerns**: CSS, JavaScript, and HTML files are organized in dedicated directories
- **Scalability**: Easy to add new pages, styles, and functionality with clear folder organization
- **Maintainability**: Related files are grouped together for easier development and debugging
- **Professional Standards**: Follows industry-standard conventions for web project organization
- **Asset Management**: Dedicated assets folder for future images, icons, and media files
- **Clean Root**: Only essential files (index.html, README.md) remain at project root

## Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern layouts with Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Interactive functionality and data visualization
- **Chart.js**: Data visualization library for timelines and metrics
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Inter font family for professional typography

## Key Features by Page

### Main Page (index.html)
- Hero section with thesis statement and team information
- Key research points with animated cards
- Ecosystem preview with interactive elements
- Industry context and thesis positioning

### Ecosystem Visualization (ecosystem.html)
- Interactive stakeholder network diagram
- Clickable nodes revealing detailed information
- Trust relationship mapping between entities
- Responsive design for mobile interaction

### Threat Analysis (threats.html)
- Expandable vulnerability categories
- Interactive timeline of cyber attacks
- Risk assessment matrix
- Detailed attack vectors and mitigation strategies

### AI Dashboard (dashboard.html)
- Real-time metrics simulation with Chart.js
- Emergency stop controls and governance features
- Performance monitoring with live updates
- Agent status tracking and management tools

### Team Perspectives (team.html)
- Individual team member research contributions
- Stakeholder interview insights (SF Express)
- Industry role definitions and responsibilities
- Research methodology and approach

### Citations (citations.html)
- 25+ academic sources with filtering system
- BibTeX export functionality
- Copy-to-clipboard features
- Search and categorization tools

## Responsive Design

The application is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

### Mobile Features
- Hamburger navigation menu with smooth animations
- Touch-optimized buttons (minimum 44px touch targets)
- Optimized font sizes using clamp() for fluid typography
- Simplified layouts for small screens
- Gesture-friendly interactions

## Accessibility Features

- **WCAG 2.1 AA Compliance**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Semantic HTML and proper ARIA labels
- **High Contrast Mode**: System preference detection and adaptation
- **Reduced Motion**: Respects user's motion preferences
- **Focus Management**: Clear focus indicators and logical tab order

## Performance Optimizations

- **Critical Resource Hints**: Preloading and prefetching strategies
- **Throttled Scroll Events**: RequestAnimationFrame for smooth scrolling
- **Intersection Observer**: Efficient viewport-based animations
- **Font Display Optimization**: Swap strategy for better loading
- **Image Optimization**: Responsive images and lazy loading
- **CSS Animations**: Hardware-accelerated transforms

## Browser Support

- **Chrome**: 88+ (recommended)
- **Firefox**: 85+
- **Safari**: 14+
- **Edge**: 88+
- **Mobile browsers**: iOS Safari 14+, Chrome Mobile 88+

## Setup Instructions

1. **Download/Clone**: Get all files in the same directory
2. **Local Server**: Use any local web server to serve the files
3. **File Protocol**: Modern browsers may have CORS restrictions with file:// protocol

### Recommended Local Server Options:

#### Using Python (if installed):
```bash
# Navigate to the project directory
cd "path/to/thesis webapp"

# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```

#### Using Node.js (if installed):
```bash
# Install http-server globally
npm install -g http-server

# Navigate to project directory and start
cd "path/to/thesis webapp"
http-server -p 8080
```

#### Using PHP (if installed):
```bash
# Navigate to project directory
cd "path/to/thesis webapp"
php -S localhost:8080
```

#### Using Live Server Extension (VS Code):
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Testing

### Desktop Testing
- Test navigation between all pages
- Verify responsive behavior at different screen sizes
- Check interactive elements (hover states, animations)
- Test hamburger menu functionality

### Mobile Testing
- Test touch interactions and scroll behavior
- Verify hamburger menu works properly
- Check that all content is accessible
- Test form interactions if any

### Accessibility Testing
- Use keyboard navigation (Tab, Enter, Escape keys)
- Test with screen reader (NVDA, JAWS, or VoiceOver)
- Check color contrast ratios
- Verify focus indicators are visible

## Troubleshooting

### Common Issues:

1. **Fonts not loading**: Check internet connection for Google Fonts
2. **Icons missing**: Verify Font Awesome CDN is accessible
3. **Animations not working**: Check if user has reduced motion preference
4. **Mobile menu not working**: Ensure JavaScript is enabled
5. **Charts not displaying**: Verify Chart.js CDN is loading properly

### Debug Steps:
1. Open browser developer tools (F12)
2. Check Console tab for JavaScript errors
3. Check Network tab for failed resource loads
4. Verify responsive design in Device Mode

## Future Enhancements

- **Progressive Web App (PWA)**: Offline functionality and app-like experience
- **Database Integration**: Dynamic content management
- **User Authentication**: Secure access to research data
- **Advanced Analytics**: User interaction tracking and insights
- **Multi-language Support**: Internationalization features
- **Content Management System**: Easy content updates

## Thesis Information

- **Course**: INFO 492 B - Information School Capstone
- **Topic**: Agentic AI Systems in Logistics Cybersecurity
- **Team Members**: 
  - Kenta Lipsey
  - Hanrui Tang  
  - Brian Yuan
  - Ajit Mallavarapu
- **Institution**: University of Washington Information School
- **Year**: 2024-2025

## Contact

For questions about this web application or the thesis research, please contact the development team through the University of Washington Information School.

## License

This project is created for academic purposes as part of the INFO 492 B capstone course. All rights reserved to the authors and the University of Washington.