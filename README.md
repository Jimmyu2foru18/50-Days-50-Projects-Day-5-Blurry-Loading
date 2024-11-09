# Blurry Loading Page

A modern, interactive loading page that combines blur effects with educational developer feedback. This project is part of the "50 Days, 50 Projects" challenge (Day 5).

## 🚀 Features

- Smooth blur-to-clear transition effect
- Real-time technical process display
- Educational loading messages for developers
- Responsive design with mobile optimization
- Performance-optimized animations
- Developer-friendly code structure

## 🛠️ Technologies Used

- HTML5
- CSS3 (with modern features like filters and transitions)
- Vanilla JavaScript (ES6+)
- Google Fonts (JetBrains Mono)
- Unsplash API for background image

## 📖 Implementation Details

### Core Components

1. **Blur Effect System**
   ```javascript
   bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
   ```

2. **Loading Progress**
   ```javascript
   const fps = 60;
   const duration = 3000; // 3 seconds
   const interval = 1000 / fps;
   ```

3. **Educational Feedback**
   ```javascript
   const loadingMessages = [
       'Initializing blur effect...',
       'Calculating viewport dimensions...',
       // Additional messages showing progress
   ];
   ```

## 🚦 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Jimmyu2foru18/50-Days-50-Projects-Day-5-Blurry-Loading.git
   ```

2. Navigate to the project directory:
   ```bash
   cd 50-Days-50-Projects-Day-5-Blurry-Loading
   ```

3. Open `index.html` in your browser or use a live server.

## 💡 Key Features Explained

### Blur Effect
- Starts at 30px blur
- Gradually transitions to 0px
- Uses a custom scaling function for a smooth transition

### Loading Counter
- Counts from 0% to 100%
- Synchronized with the blur effect
- Smooth opacity transition

### Background Image
- Responsive sizing
- Overflow handling
- Gradient overlay for better contrast

## 🔧 Customization Options

### Modify Loading Duration
```javascript
// in script.js
const duration = 3000; // Adjust timing (in milliseconds)
```

### Change Background Image
```css
/* in style.css */
.bg {
    background: url('your-image-url') no-repeat center center/cover;
}
```

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🙏 Acknowledgments

- Project inspiration: "50 Days, 50 Projects" challenge
- Background image: [Unsplash](https://unsplash.com)
- Scaling function: Adapted from StackOverflow
- Font: Google Fonts (JetBrains Mono)
