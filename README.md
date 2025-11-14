# SS.AI - Smart Systems using AI

## 🚀 About

SS.AI is a cutting-edge AI and software solutions company specializing in:
- **AI & Machine Learning** - Advanced neural networks and intelligent automation
- **Custom Software Development** - Tailored enterprise applications
- **Cloud Solutions** - Scalable infrastructure on AWS, Azure, and Google Cloud
- **Data Analytics** - Business intelligence and predictive analytics
- **Mobile App Development** - Native and cross-platform applications
- **IT Consulting** - Strategic technology consulting and digital transformation

---

## 📁 Project Structure

```
SS.AI-Website/
├── index.html              # Main landing page (One Page)
├── about.html              # About Us page
├── services.html           # Services page
├── projects.html           # Projects portfolio
├── case-studies.html       # Success stories
├── careers.html            # Job opportunities
├── contact.html            # Contact form & information
├── css/
│   ├── layout.css          # Main stylesheet
│   ├── layout.min.css      # Minified version
│   └── animate.css         # Animation library
├── sass/                   # SASS source files
│   ├── layout.scss         # Main SASS file
│   ├── _variables.scss     # Variables
│   ├── _mixins.scss        # Mixins
│   ├── base/               # Base styles
│   ├── components/         # UI components
│   ├── layout/             # Layout (header, footer)
│   ├── pages/              # Page-specific styles
│   ├── plugins/            # Plugin styles
│   └── utils/              # Utilities
├── js/
│   ├── layout.js           # Main JavaScript
│   └── components/         # JS components
├── img/                    # Images folder
│   ├── new_sssai_logo.png  # Company logo
│   ├── 1920x1080/          # Hero images
│   ├── 970x647/            # Project images
│   ├── 500x500/            # About section images
│   └── 397x300/            # Case study images
├── vendor/                 # Third-party libraries
│   ├── bootstrap/
│   ├── jquery/
│   ├── swiper/
│   └── masonry/
├── IMAGE_SOURCES.md        # Image resources guide
└── README.md               # This file
```

---

## 🎨 Features

### ✅ **Responsive Design**
- Mobile-first approach
- Bootstrap 3.3.4 grid system
- Optimized for all devices

### ✅ **Modern UI/UX**
- Clean and professional design
- Smooth animations (WOW.js)
- Interactive elements
- Intuitive navigation

### ✅ **SEO Optimized**
- Semantic HTML5
- Meta tags for each page
- Optimized page titles
- Fast loading times

### ✅ **Contact Features**
- Professional contact form
- Multiple contact methods (phone, email)
- Global office locations
- Google Maps integration
- Business hours information

### ✅ **Performance**
- Minified CSS/JS
- Optimized images
- Lazy loading
- Fast page load

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3/SASS** - Styling with preprocessor
- **JavaScript/jQuery** - Interactivity
- **Bootstrap 3** - Responsive framework
- **Font Awesome** - Icons
- **Simple Line Icons** - Additional icons
- **Swiper.js** - Sliders
- **Masonry.js** - Grid layouts
- **WOW.js** - Scroll animations

---

## 🚀 Getting Started

### **Prerequisites**
- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime, Atom)
- SASS compiler (optional, for development)

### **Installation**

1. **Clone or download the repository**
```bash
git clone https://github.com/your-username/ssai-website.git
cd ssai-website
```

2. **Open in browser**
```bash
# Simply open index.html in your browser
# Or use a local server:
python -m http.server 8000
# Then visit: http://localhost:8000
```

3. **For SASS development** (optional)
```bash
# Install SASS
npm install -g sass

# Watch for changes
sass --watch sass/layout.scss:css/layout.css

# Compile minified version
sass sass/layout.scss css/layout.min.css --style=compressed
```

---

## 📝 Customization Guide

### **1. Update Company Information**

Edit the following files:
- `index.html` - Main content
- `about.html` - Company story
- `contact.html` - Contact details

### **2. Change Colors**

Edit `sass/_variables.scss`:
```scss
$color-base: #17bed2;        // Primary color
$color-heading: #515769;     // Heading color
$color-subtitle: #a6a7aa;    // Text color
```

Then recompile SASS:
```bash
sass sass/layout.scss css/layout.css
```

### **3. Update Logo**

Replace `img/new_sssai_logo.png` with your logo.
Recommended size: 146px width, transparent background.

### **4. Add Images**

See `IMAGE_SOURCES.md` for:
- Free stock image sources
- Recommended dimensions
- Download instructions

### **5. Modify Navigation**

Edit the header section in each HTML file:
```html
<ul class="nav navbar-nav navbar-nav-right">
    <li><a href="index.html">Home</a></li>
    <!-- Add more items -->
</ul>
```

---

## 📧 Contact Form Setup

The contact form in `contact.html` needs backend integration.

### **Option 1: FormSpree (Easiest)**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### **Option 2: PHP Backend**
Create `contact-process.php`:
```php
<?php
if($_POST) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "info@ssai.tech";
    $subject = "New Contact Form Submission";
    
    mail($to, $subject, $message);
}
?>
```

### **Option 3: JavaScript (Netlify Forms)**
Add `netlify` attribute to form tag.

---

## 🌐 Deployment

### **GitHub Pages**
1. Push to GitHub
2. Go to Settings > Pages
3. Select branch and folder
4. Your site will be live at `username.github.io/repo-name`

### **Netlify**
1. Drag and drop folder to Netlify
2. Or connect GitHub repo
3. Automatic deployment on push

### **Traditional Hosting**
1. Upload all files via FTP
2. Ensure index.html is in root
3. Set proper file permissions

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 🔧 Development

### **File Structure for Development**

```
Development Workflow:
1. Edit SASS files in sass/
2. Compile to CSS
3. Test in browser
4. Minify for production
```

### **Build Commands**

```bash
# Compile SASS
sass sass/layout.scss css/layout.css

# Compile and minify
sass sass/layout.scss css/layout.min.css --style=compressed

# Watch for changes
sass --watch sass:css
```

---

## 📊 Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress with TinyPNG
   - Lazy load below-fold images

2. **Minify Assets**
   - Use minified CSS/JS
   - Enable GZIP compression
   - Combine files when possible

3. **Caching**
   - Set proper cache headers
   - Use CDN for libraries
   - Implement service workers

---

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👥 Credits

- **Template Base**: FlameOnePage by FairTech
- **Icons**: Font Awesome, Simple Line Icons
- **Fonts**: Google Fonts (Hind)
- **Images**: Unsplash, Pexels (see IMAGE_SOURCES.md)

---

## 📞 Support

For questions or support:
- **Email**: info@ssai.tech
- **Website**: [www.ssai.tech](http://www.ssai.tech)
- **GitHub Issues**: [Report a bug](https://github.com/your-repo/issues)

---

## 🎯 Roadmap

- [ ] Add blog section
- [ ] Implement dark mode
- [ ] Add multi-language support
- [ ] Create admin dashboard
- [ ] Add live chat integration
- [ ] Implement newsletter signup
- [ ] Add testimonials section
- [ ] Create case study templates

---

**Made with ❤️ by SS.AI Team**

**Last Updated:** November 2024
