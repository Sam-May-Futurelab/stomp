# STOMP - Premium Sneaker Store Landing Page

> **Sneakers that hit different.** A modern, high-performance landing page for a premium sneaker brand.

![STOMP Logo](https://img.shields.io/badge/STOMP-Sneaker%20Store-E10600?style=for-the-badge&logo=sneaker)

## 🔥 Features

### Visual Design
- **Bold Branding**: Striking red (#E10600) and white color scheme
- **Premium Typography**: Oswald for headlines, Inter for body text
- **Modern Layout**: Clean, edgy design inspired by Nike, Kith, and Off-White
- **Responsive Design**: Optimized for all devices and screen sizes

### Advanced Animations
- **Parallax Effects**: Multi-layered hero section with depth
- **Scroll Triggers**: Smooth animations triggered by scroll position
- **GSAP Integration**: High-performance animations using GSAP library
- **Micro-interactions**: Hover effects and button animations
- **Loading Animations**: Smooth entrance effects for all sections

### User Experience
- **Smooth Scrolling**: Buttery smooth navigation between sections
- **Sticky Navigation**: Auto-hiding navbar that appears on scroll up
- **Interactive Elements**: Animated product cards and testimonials
- **Newsletter Signup**: Animated form with validation feedback
- **Mobile Optimized**: Touch-friendly interactions and optimized performance

## 🏗️ Technical Stack

- **HTML5**: Semantic markup with accessibility considerations
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **GSAP**: Professional-grade animation library
- **ScrollTrigger**: Scroll-based animation plugin
- **Vanilla JavaScript**: Clean, dependency-light interactivity

## 📁 Project Structure

```
stomp/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript animations and interactions
├── README.md           # Project documentation
└── .github/
    └── copilot-instructions.md
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (optional, for local development)

### Installation

1. **Clone or download** the project files
2. **Open index.html** in your browser, or
3. **Serve locally** using a web server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

4. **Visit** `http://localhost:8000` in your browser

## 🎨 Customization

### Colors
Update the Tailwind configuration in `index.html`:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'stomp-red': '#E10600',    // Primary red
                'stomp-grey': '#B0B0B0',   // Accent grey
            }
        }
    }
}
```

### Content
- Replace placeholder sneaker images with actual product photos
- Update product information, prices, and descriptions
- Modify testimonials with real customer reviews
- Customize newsletter signup functionality

### Animations
Animations are controlled in `script.js`:
- Adjust timing and easing functions in GSAP animations
- Modify parallax scroll speeds
- Customize hover effects and micro-interactions

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ⚡ Performance Features

- **Optimized Animations**: Hardware-accelerated transforms
- **Lazy Loading**: Images load as needed
- **Reduced Motion**: Respects user accessibility preferences
- **Touch Optimizations**: Enhanced for mobile devices
- **Efficient Scrolling**: Throttled scroll events

## 🎯 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📸 Screenshots

### Hero Section
- Layered parallax sneaker graphics
- Bold typography with call-to-action
- Smooth scroll indicator

### Featured Products
- Product cards with hover animations
- Trending badges and pricing
- Add to cart functionality

### Brand Story
- Red background with white typography
- Detail imagery showcase
- Statistics and achievements

### Testimonials
- Customer reviews carousel
- Profile imagery and ratings
- Social proof elements

## 🛠️ Development

### Adding New Products
1. Duplicate a product card in the HTML
2. Update product information
3. Replace placeholder images
4. Ensure animations work correctly

### Modifying Animations
```javascript
// Example: Customize product card hover
gsap.to('.product-card', {
    duration: 0.4,
    y: -15,           // Lift amount
    scale: 1.03,      // Scale factor
    ease: "power2.out"
});
```

### Custom Sections
Follow the existing pattern:
1. Add HTML structure
2. Apply Tailwind classes
3. Add GSAP animations in `script.js`
4. Test responsiveness

## 🎭 Design Philosophy

**Urban Confidence**: Every element should convey street culture authenticity
**Premium Quality**: High-end feel with attention to detail
**Performance First**: Smooth animations that enhance, don't hinder
**Mobile Native**: Touch-first design principles

## 📄 License

This project is for demonstration purposes. Feel free to use as inspiration for your own projects.

## 🤝 Contributing

Ideas for improvements:
- Add shopping cart functionality
- Implement user authentication
- Create product detail pages
- Add search and filtering
- Integrate payment processing

---

**Built with ❤️ for sneakerheads who demand the best.**

*STOMP - Where culture meets craft.*
