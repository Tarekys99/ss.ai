# 🌙 Dark Mode Guide - SS.AI Website

## ✨ Overview

تم إضافة الوضع الليلي (Dark Mode) بشكل احترافي إلى موقع SS.AI مع إمكانية التبديل السلس بين الوضع الفاتح والداكن.

---

## 🎯 Features

### ✅ **التبديل السهل**
- زر تبديل أنيق في شريط التنقل
- أيقونات شمس وقمر للتوضيح
- تبديل سلس مع تأثيرات انتقالية

### ✅ **حفظ التفضيل**
- يتم حفظ اختيار المستخدم في localStorage
- يتم تطبيق الوضع المحفوظ تلقائياً عند العودة للموقع
- يعمل عبر جميع صفحات الموقع

### ✅ **تصميم احترافي**
- ألوان متناسقة ومريحة للعين
- خلفية سوداء داكنة (#1a1a1a)
- نصوص واضحة ومقروءة
- حدود وفواصل مرئية

### ✅ **شامل لجميع العناصر**
- Header & Navigation
- Hero Sections
- Cards & Services
- Forms & Inputs
- Footer
- Buttons
- Accordions
- Modals

---

## 📁 Files Added

```
css/
└── dark-mode.css          # ملف CSS للوضع الليلي

js/
└── dark-mode.js           # JavaScript للتحكم والتبديل
```

---

## 🎨 Color Scheme

### **Light Mode (الوضع الفاتح)**
```css
--bg-primary: #ffffff      /* خلفية رئيسية بيضاء */
--bg-secondary: #fafafa    /* خلفية ثانوية فاتحة */
--text-primary: #515769    /* نص رئيسي داكن */
--text-secondary: #a6a7aa  /* نص ثانوي رمادي */
```

### **Dark Mode (الوضع الداكن)**
```css
--bg-primary: #1a1a1a      /* خلفية رئيسية سوداء */
--bg-secondary: #2d2d2d    /* خلفية ثانوية داكنة */
--text-primary: #e0e0e0    /* نص رئيسي فاتح */
--text-secondary: #b0b0b0  /* نص ثانوي رمادي فاتح */
```

---

## 🔧 How It Works

### **1. CSS Variables**
يستخدم النظام CSS Variables للتبديل السلس:
```css
:root {
    --bg-primary: #ffffff;
    --text-primary: #515769;
}

body.dark-mode {
    --bg-primary: #1a1a1a;
    --text-primary: #e0e0e0;
}
```

### **2. JavaScript Toggle**
```javascript
// التبديل بين الأوضاع
function toggleDarkMode(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}
```

### **3. LocalStorage**
يتم حفظ التفضيل في المتصفح:
```javascript
localStorage.setItem('theme', 'dark');  // حفظ
const theme = localStorage.getItem('theme');  // قراءة
```

---

## 🎮 Usage

### **للمستخدم:**
1. ابحث عن زر التبديل في شريط التنقل (أعلى يمين الصفحة)
2. انقر على الزر للتبديل بين الوضع الفاتح والداكن
3. سيتم حفظ اختيارك تلقائياً

### **للمطور:**
```javascript
// تفعيل الوضع الداكن برمجياً
document.body.classList.add('dark-mode');

// إلغاء الوضع الداكن
document.body.classList.remove('dark-mode');

// التحقق من الوضع الحالي
const isDark = document.body.classList.contains('dark-mode');
```

---

## 🎨 Customization

### **تغيير الألوان:**
عدّل ملف `css/dark-mode.css`:
```css
body.dark-mode {
    --bg-primary: #YOUR_COLOR;
    --text-primary: #YOUR_COLOR;
}
```

### **تغيير موقع الزر:**
عدّل في `js/dark-mode.js`:
```javascript
// ابحث عن createDarkModeToggle()
// وغيّر موقع إدراج الزر
```

### **تغيير الأيقونات:**
عدّل في `css/dark-mode.css`:
```css
.dark-mode-icon.sun {
    content: "☀️";  /* أيقونة الشمس */
}
.dark-mode-icon.moon {
    content: "🌙";  /* أيقونة القمر */
}
```

---

## 📱 Responsive Design

الوضع الليلي يعمل بشكل مثالي على:
- ✅ Desktop (1920px+)
- ✅ Laptop (1366px)
- ✅ Tablet (768px)
- ✅ Mobile (320px+)

---

## 🔍 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## ⚡ Performance

- **CSS File Size**: ~8KB
- **JS File Size**: ~2KB
- **Load Time Impact**: < 50ms
- **Transition Speed**: 0.3s

---

## 🐛 Troubleshooting

### **المشكلة: الزر لا يظهر**
**الحل:**
```javascript
// تأكد من تحميل dark-mode.js
<script src="js/dark-mode.js"></script>
```

### **المشكلة: الألوان لا تتغير**
**الحل:**
```html
<!-- تأكد من تحميل dark-mode.css -->
<link href="css/dark-mode.css" rel="stylesheet" />
```

### **المشكلة: التفضيل لا يُحفظ**
**الحل:**
- تأكد من تفعيل localStorage في المتصفح
- تحقق من عدم استخدام وضع التصفح الخاص

---

## 🎯 Best Practices

1. **استخدم CSS Variables** للألوان القابلة للتبديل
2. **أضف transitions** للانتقال السلس
3. **احفظ التفضيل** في localStorage
4. **اختبر جميع العناصر** في كلا الوضعين
5. **تأكد من التباين** الكافي للقراءة

---

## 📊 Statistics

- **Total Styles**: 150+ CSS rules
- **Elements Covered**: 30+ components
- **Transition Effects**: 10+ properties
- **Color Variables**: 8 variables

---

## 🚀 Future Enhancements

- [ ] Auto dark mode based on system preference
- [ ] Scheduled dark mode (sunset to sunrise)
- [ ] Custom color themes
- [ ] Accessibility improvements
- [ ] Animation options

---

## 📞 Support

للأسئلة أو المشاكل:
- **Email**: dev@ssai.tech
- **GitHub Issues**: [Report a bug]

---

## 📝 Changelog

### Version 1.0.0 (2024-11-14)
- ✅ Initial dark mode implementation
- ✅ Toggle button in navigation
- ✅ LocalStorage persistence
- ✅ Smooth transitions
- ✅ All pages support

---

**Made with 🌙 by SS.AI Development Team**
