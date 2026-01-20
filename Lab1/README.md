# Portfolio Website - Developer Portfolio (CSS-Only Version)

## 🎨 Enhanced Features

### ✨ Interface & Design (Pure CSS)
- **Gradient Colors**: Modern gradient colors for buttons and hover effects
- **Dark Mode**: Dark/light mode with checkbox toggle (CSS-only, no JavaScript required)
- **Smooth Animations**: Fade-in, slide, scale effects using CSS animations
- **Hover Effects**: Beautiful hover effects for cards, buttons, and links
- **Smooth Scroll**: CSS scroll-behavior: smooth

### 🚀 New Features (No JavaScript Required)

#### 1. Dark Mode Toggle (CSS-Only)
- Uses checkbox and CSS :checked selector
- Click moon/sun icon in the top right corner
- Smooth transitions with CSS

#### 2. Back to Top Button
- Anchor link to return to page top
- Gradient background with hover effect
- Smooth scroll with CSS

#### 3. Project Filter (CSS-Only)
- Filter projects by category (All, Website, App, UI/UX)
- Uses radio buttons and CSS sibling selectors
- Auto highlight active button with :checked

#### 4. FAQ Toggle (CSS-Only)
- Uses checkboxes to open/close questions
- Smooth expand/collapse with CSS transition
- Icon rotation with transform

#### 5. Animations on Scroll
- Pure CSS animations with @keyframes
- Fade-in, slide, scale effects
- Stagger animation delays

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
- Smooth color transitions

#### Responsive Design
- Mobile-first approach
- Breakpoints: 576px, 768px, 992px, 1200px
- Touch-friendly buttons and spacing
- Optimized font sizes

### 📱 Mobile Enhancements
- Hamburger menu with checkbox trick (CSS-only)
- Touch-optimized button sizes
- Improved spacing for mobile
- Smaller theme toggle and back to top buttons

### 🔧 Technical Details

#### File Structure
```
Lab1/
├── css/
│   ├── style.css          # Main styles
│   ├── responsive.css     # Responsive styles
│   └── animations.css     # CSS-only animations
└── portfolio/
    ├── index.html
    ├── about.html
    ├── projects.html
    └── contact.html
```

#### Pure CSS Features
- Checkbox trick for interactive elements
- :checked pseudo-class for state management
- CSS sibling selectors (~, +) for filtering
- CSS transitions and animations
- No JavaScript required!

### 🎨 Design Patterns Used
- CSS Variables for theming
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
6. **Progress bars** for skills
7. **Animated hero section** with CSS keyframes
8. **Staggered animations** for lists/grids

### 📊 Performance
- CSS animations use transform and opacity (GPU-accelerated)
- No JavaScript overhead
- Fast loading time
- Optimized asset loading
- No external dependencies

### ♿ Accessibility
- Semantic HTML with label elements
- Keyboard navigation support
- Clear focus states
- ARIA labels for interactive elements
- Color contrast standards

## 🚀 Usage

1. Open `portfolio/index.html` in your browser
2. Test dark mode toggle (click moon/sun icon)
3. Scroll to see CSS animations
4. Filter projects on projects page
5. Click FAQ items to open/close

## 💡 Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers
- All browsers supporting CSS3

## 📝 Notes
- **100% HTML & CSS** - No JavaScript required
- Uses checkbox trick for interactive features
- CSS :checked pseudo-class for state management
- Fully responsive
- SEO friendly
- Fast loading time

## 🎓 CSS Techniques Used
- CSS Variables (Custom Properties)
- Flexbox & CSS Grid
- CSS Animations & Transitions
- Pseudo-classes (:checked, :hover, :active)
- Sibling selectors (~, +)
- Checkbox hack for interactivity
- @keyframes animations
- transform & opacity for performance

---
Created with ❤️ - Pure HTML & CSS Portfolio

### 🚀 Tính năng mới

#### 1. Dark Mode Toggle
- Click vào icon mặt trăng/mặt trời ở góc phải màn hình
- Tự động lưu preference của người dùng
- Chuyển đổi mượt mà với animation

#### 2. Back to Top Button
- Xuất hiện khi scroll xuống > 300px
- Click để quay lại đầu trang với smooth scroll
- Gradient background với hover effect

#### 3. Project Filter
- Filter projects theo category (All, Website, App, UI/UX)
- Animation mượt mà khi chuyển đổi
- Auto highlight active button

#### 4. Form Validation
- Real-time validation cho contact form
- Hiển thị error messages rõ ràng
- Toast notification khi gửi thành công

#### 5. FAQ Toggle
- Click để mở/đóng câu hỏi
- Auto close các câu hỏi khác
- Smooth expand/collapse animation

#### 6. Typing Effect
- Hero subtitle có hiệu ứng typing tự động
- Hiển thị nhiều titles khác nhau
- Loop liên tục

#### 7. Animations on Scroll
- Intersection Observer API để detect scroll
- Elements fade in khi vào viewport
- Stagger animation cho cards

#### 8. Toast Notifications
- Thông báo đẹp mắt cho user actions
- 3 types: success, error, info
- Auto dismiss sau 4 giây

### 🎯 CSS Improvements

#### Color Scheme
```css
--primary-color: #667eea (Purple gradient)
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
```

#### Hover Effects
- Cards lift up khi hover
- Buttons có ripple effect
- Social icons có màu riêng khi hover
- Smooth color transitions

#### Responsive Design
- Mobile-first approach
- Breakpoints: 576px, 768px, 992px, 1200px
- Touch-friendly buttons và spacing
- Optimized font sizes

### 📱 Mobile Enhancements
- Hamburger menu with checkbox trick (no JavaScript)
- Touch-optimized button sizes
- Improved spacing for mobile
- Smaller theme toggle và back to top buttons
- Mobile-friendly toast notifications

### 🔧 Technical Details

#### File Structure
```
Lab1/
├── css/
│   ├── style.css          # Main styles
│   ├── responsive.css     # Responsive styles
│   └── animations.css     # Animations & effects
├── js/
│   └── main.js           # All JavaScript functionality
└── portfolio/
    ├── index.html
    ├── about.html
    ├── projects.html
    └── contact.html
```

#### JavaScript Features
- Vanilla JavaScript (no dependencies)
- Modern ES6+ syntax
- Intersection Observer API
- LocalStorage for preferences
- Event delegation
- Debouncing for scroll events

### 🎨 Design Patterns Used
- CSS Variables for theming
- BEM-like naming convention
- Mobile-first responsive design
- Progressive enhancement
- Accessibility best practices

### 🌟 Key Visual Improvements
1. **Gradient backgrounds** cho primary buttons
2. **Card hover effects** với shadow và transform
3. **Social media icons** với brand-specific colors
4. **Smooth transitions** trên tất cả interactive elements
5. **Loading states** và skeleton screens
6. **Progress bars** cho skills
7. **Animated hero section** với typing effect
8. **Staggered animations** cho lists/grids

### 📊 Performance
- CSS animations sử dụng transform và opacity (GPU-accelerated)
- Lazy loading cho animations
- Debounced scroll events
- Optimized asset loading
- No heavy dependencies

### ♿ Accessibility
- ARIA labels cho interactive elements
- Keyboard navigation support
- Focus states rõ ràng
- Semantic HTML
- Color contrast standards

## 🚀 Cách sử dụng

1. Mở `portfolio/index.html` trong browser
2. Test dark mode toggle
3. Scroll để xem animations
4. Test form validation trong contact page
5. Filter projects trong projects page
6. Click FAQ items trong contact page

## 💡 Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📝 Notes
- All animations sử dụng CSS3
- JavaScript vanilla (không cần framework)
- Fully responsive
- SEO friendly
- Fast loading time

---
Created with ❤️ by Le Tan Nguyen
