# 🎨 Command Palette

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/specxgit/command_palette?style=social)
![GitHub forks](https://img.shields.io/github/forks/specxgit/command_palette?style=social)
![GitHub issues](https://img.shields.io/github/issues/specxgit/command_palette)
![GitHub license](https://img.shields.io/github/license/specxgit/command_palette)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

**A beautiful, interactive command reference tool with instant click-to-copy functionality.**

[Live Demo](https://specxgit.github.io/command_palette/) • [Report Bug](https://github.com/specxgit/command_palette/issues) • [Request Feature](https://github.com/specxgit/command_palette/issues)

</div>

---

## ✨ Features

- 🖱️ **Click to Copy** - Instantly copy any command with a single click
- 📂 **Organized Categories** - Commands grouped by type (Git, Shell, Flutter, etc.)
- 📱 **Mobile Responsive** - Beautiful UI that works on all devices
- 🎨 **Clean Design** - Modern, intuitive interface with smooth animations
- ⚡ **Zero Dependencies** - Pure vanilla JavaScript, no frameworks needed
- 🔍 **Easy to Customize** - Simple code structure for adding your own commands
- 🎯 **Visual Feedback** - See confirmation when commands are copied

---

## 🚀 Demo

![Command Palette Demo](https://via.placeholder.com/800x400/3b82f6/ffffff?text=Command+Palette+Demo)

> 👆 *Click any command card to instantly copy it to your clipboard!*

---

## 🛠️ Tech Stack

- **HTML5** - Structure
- **CSS3** - Styling with modern features
- **JavaScript (ES6+)** - Functionality
- **GitHub Pages** - Hosting

---

## 📦 Installation & Usage

### Option 1: Use the Live Version
Simply visit: [https://specxgit.github.io/command_palette/](https://specxgit.github.io/command_palette/)

### Option 2: Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/specxgit/command_palette.git
   cd command_palette
   ```

2. **Open in browser**
   ```bash
   # Open index.html in your browser
   open index.html
   # or on Windows
   start index.html
   # or on Linux
   xdg-open index.html
   ```

That's it! No build process or dependencies required. 🎉

---

## 📝 Adding Your Own Commands

### Step 1: Edit `script.js`

Open `script.js` and find the `commands` object:

```javascript
const commands = {
    shell: [
        {
            command: 'your-command-here',
            description: 'Description of what this command does',
            tags: ['tag1', 'tag2']
        }
    ],
    git: [
        // Add git commands here
    ]
};
```

### Step 2: Add a New Category (Optional)

Update the `categories` object:

```javascript
const categories = {
    shell: { name: 'Flutter & Shell', icon: '🖥️' },
    git: { name: 'Git Commands', icon: '📦' },
    docker: { name: 'Docker Commands', icon: '🐳' }  // New category
};
```

### Step 3: Test Locally

Open `index.html` in your browser to see your changes!

---

## 🎨 Customization

### Change Colors

Edit `style.css` to customize the color scheme:

```css
/* Primary color (currently blue) */
.nav-button.active {
    background-color: #3b82f6;  /* Change this hex code */
}

/* Tags color */
.tag {
    background-color: #dbeafe;  /* Light blue */
    color: #2563eb;  /* Dark blue */
}
```

### Adjust Mobile Layout

Modify the grid layout for mobile in `style.css`:

```css
@media (max-width: 768px) {
    .commands-grid {
        grid-template-columns: repeat(2, 1fr);  /* Change to 1 or 3 columns */
    }
}
```

---

## 🤝 Contributing

We **love** contributions! Whether it's:
- 🐛 Bug fixes
- ✨ New features
- 📚 Documentation improvements
- 💡 New command categories
- 🎨 UI/UX improvements

All contributions are welcome!

### How to Contribute

1. **Fork the repository**
   
   Click the "Fork" button at the top right of this page.

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/command_palette.git
   cd command_palette
   ```

3. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Make your changes**
   
   - Add your commands in `script.js`
   - Update styles in `style.css` if needed
   - Test thoroughly in both desktop and mobile

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add docker commands category"
   # or
   git commit -m "fix: mobile hamburger menu alignment"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Write a clear description of your changes
   - Submit! 🎉

### Contribution Guidelines

- ✅ Follow the existing code style
- ✅ Test on both desktop and mobile
- ✅ Write clear commit messages
- ✅ One feature/fix per pull request
- ✅ Update documentation if needed
- ❌ Don't add large dependencies
- ❌ Don't change the core structure without discussion

### Review Process

- All PRs are reviewed by maintainers
- We aim to review within **48 hours**
- If your PR adds value and follows guidelines, it will be merged to `main`
- Once merged, your contribution will be **live for everyone**! 🌟

---

## 🌟 Command Categories We'd Love to See

Help us grow this project! Here are some categories we'd love contributions for:

- [ ] **Docker Commands** 🐳
- [ ] **Kubernetes Commands** ☸️
- [ ] **NPM/Yarn Commands** 📦
- [ ] **Python/Pip Commands** 🐍
- [ ] **React/Vue/Angular Commands** ⚛️
- [ ] **Linux System Commands** 🐧
- [ ] **Database Commands** (MySQL, PostgreSQL) 🗄️
- [ ] **AWS CLI Commands** ☁️
- [ ] **Terraform Commands** 🏗️
- [ ] **Your suggestion?** 💡

---

## 📸 Screenshots

### Desktop View
![Desktop View](https://via.placeholder.com/800x400/ffffff/000000?text=Desktop+View)

### Mobile View
![Mobile View](https://via.placeholder.com/300x600/ffffff/000000?text=Mobile+View)

---

## 🐛 Found a Bug?

If you find a bug, please [open an issue](https://github.com/specxgit/command_palette/issues/new) with:
- Description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Device/browser information

---

## 💡 Feature Requests

Have an idea? [Open an issue](https://github.com/specxgit/command_palette/issues/new) with:
- Clear description of the feature
- Why it would be useful
- Any implementation ideas you have

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

This means you can:
- ✅ Use commercially
- ✅ Modify
- ✅ Distribute
- ✅ Private use

---

## 👨‍💻 Author

**specxgit**

- GitHub: [@specxgit](https://github.com/specxgit)
- Project: [command_palette](https://github.com/specxgit/command_palette)

---

## 🙏 Acknowledgments

- Thanks to all [contributors](https://github.com/specxgit/command_palette/graphs/contributors) who help make this project better!
- Inspired by the need for a quick command reference during development
- Built with ❤️ for the developer community

---

## ⭐ Show Your Support

If you find this project useful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing code
- 📢 Sharing with others

---

<div align="center">

**Made with ❤️ by [specxgit](https://github.com/specxgit)**

If this project helped you, consider giving it a ⭐!

[⬆ Back to Top](#-command-palette)

</div>