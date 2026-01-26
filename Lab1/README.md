# Portfolio Website - Developer Portfolio

A modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring smooth animations, dark mode, and interactive components.

##  Enhanced Features

### ✨ Interface & Design
- **Gradient Colors**: Modern gradient colors for buttons and hover effects
- **Dark Mode**: Dark/light mode toggle with smooth transitions (CSS-only, no JavaScript required)
- **Smooth Animations**: Fade-in, slide, and scale effects using CSS animations
- **Hover Effects**: Beautiful hover effects for cards, buttons, and links
- **Smooth Scroll**: CSS scroll-behavior: smooth for seamless navigation

### 🚀 Key Features

#### 1. Dark Mode Toggle (CSS-Only)
- Uses checkbox and CSS `:checked` selector
- Click moon/sun icon in the top right corner
- Smooth transitions between themes
- Auto-saves user preference

#### 2. Back to Top Button
- Appears when scrolling down > 300px
- Anchor link to return to page top instantly
- Gradient background with hover effect
- Smooth scroll with CSS

#### 3. Project Filter (CSS-Only)
- Filter projects by category (All, Website, App, UI/UX)
- Uses radio buttons and CSS sibling selectors
- Auto-highlight active button with `:checked`
- Smooth animation when switching categories

#### 4. FAQ Toggle (CSS-Only)
- Uses checkboxes to expand/collapse questions
- Smooth expand/collapse with CSS transition
- Icon rotation with transform
- Auto-close other questions

#### 5. Animations on Scroll
- Pure CSS animations with `@keyframes`
- Fade-in, slide, and scale effects
- Stagger animation delays for lists/grids
- Intersection Observer API for viewport detection

#### 6. Form Validation
- Real-time validation for contact form
- Clear error messages
- Toast notification on successful submission
- User-friendly feedback

#### 7. Toast Notifications
- Beautiful notifications for user actions
- 3 types: success, error, info
- Auto-dismiss after 4 seconds

#### 8. Typing Effect
- Animated typing effect in hero section
- Multiple titles displayed
- Continuous loop animation

### 🎯 CSS Improvements

#### Color Scheme
```css
--primary-color: #667eea (Purple gradient)
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
```

#### Hover Effects
- Cards lift up on hover
- Buttons have ripple effect (CSS-only)
- Social icons with brand-specific colors on hover
- Smooth color transitions throughout

#### Responsive Design
- Mobile-first approach
- Breakpoints: 576px, 768px, 992px, 1200px
- Touch-friendly buttons and spacing
- Optimized font sizes for all devices

### 📱 Mobile Enhancements
- Hamburger menu with checkbox trick (CSS-only)
- Touch-optimized button sizes (min 44x44px)
- Improved spacing for mobile devices
- Smaller theme toggle and back to top buttons
- Mobile-friendly toast notifications

### 🔧 Technical Details

#### File Structure
```
Lab1/
├── css/
│   ├── style.css          # Main styles
│   ├── responsive.css     # Responsive styles
│   └── animations.css     # CSS animations & effects
├── js/
│   └── main.js           # JavaScript functionality (if needed)
└── portfolio/
    ├── index.html        # Home page
    ├── about.html        # About page
    ├── projects.html     # Projects page
    └── contact.html      # Contact page
```

#### Pure CSS Features
- Checkbox trick for interactive elements
- `:checked` pseudo-class for state management
- CSS sibling selectors (`~`, `+`) for filtering
- CSS transitions and animations
- Minimal JavaScript required

#### JavaScript Features (Optional)
- Vanilla JavaScript (no dependencies)
- Modern ES6+ syntax
- Intersection Observer API
- LocalStorage for user preferences
- Event delegation
- Debouncing for scroll events

### 🎨 Design Patterns Used
- CSS Variables (Custom Properties) for theming
- BEM-like naming convention
- Mobile-first responsive design
- Progressive enhancement
- Accessibility best practices

### 🌟 Key Visual Improvements
1. **Gradient backgrounds** for primary buttons
2. **Card hover effects** with shadow and transform
3. **Social media icons** with brand-specific colors
4. **Smooth transitions** on all interactive elements
5. **CSS animations** for fade-in effects
6. **Progress bars** for skills visualization
7. **Animated hero section** with CSS keyframes
8. **Staggered animations** for lists and grids
9. **Loading states** and skeleton screens

### 📊 Performance
- CSS animations use `transform` and `opacity` (GPU-accelerated)
- Minimal JavaScript overhead
- Fast loading time
- Optimized asset loading
- No heavy external dependencies
- Lazy loading for animations
- Debounced scroll events

### ♿ Accessibility
- Semantic HTML with proper label elements
- Keyboard navigation support
- Clear focus states
- ARIA labels for interactive elements
- Color contrast standards compliance
- Screen reader friendly

## 🚀 Usage

1. Open `portfolio/index.html` in your browser
2. Test dark mode toggle (click moon/sun icon)
3. Scroll to see CSS animations
4. Filter projects on the projects page
5. Click FAQ items to open/close
6. Test form validation in contact page

## 💡 Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers
- All browsers supporting CSS3

## 📝 Notes
- **100% HTML & CSS** core features - Minimal JavaScript required
- Uses checkbox trick for interactive features
- CSS `:checked` pseudo-class for state management
- Fully responsive on all devices
- SEO friendly structure
- Fast loading time

## 🎓 CSS Techniques Used
- CSS Variables (Custom Properties)
- Flexbox & CSS Grid
- CSS Animations & Transitions
- Pseudo-classes (`:checked`, `:hover`, `:active`, `:focus`)
- Sibling selectors (`~`, `+`)
- Checkbox hack for interactivity
- `@keyframes` animations
- `transform` & `opacity` for performance optimization

---
Created with ❤️ by Le Tan Nguyen
