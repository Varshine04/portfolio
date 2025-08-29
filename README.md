# Varshine T - Modern Animated Portfolio

A beautiful, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for all device sizes
- **Dark/Light Mode**: Toggle between themes
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Animations**: Powered by Framer Motion
- **Performance Optimized**: Fast loading and smooth interactions

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Netlify, Vercel, or any static hosting

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deployment to Netlify

### Option 1: Drag & Drop (Easiest)
1. Run `npm run build`
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Option 2: Git Integration
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Option 3: Netlify CLI
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Login: `netlify login`
3. Deploy: `netlify deploy --prod --dir=dist`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── AchievementsSection.tsx
│   ├── LeadershipSection.tsx
│   └── ContactSection.tsx
├── hooks/              # Custom React hooks
│   └── useScrollSpy.ts
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Colors & Themes
- Edit `tailwind.config.js` for custom colors
- Modify gradient combinations in components
- Adjust dark mode colors in component files

### Content
- Update personal information in component files
- Replace placeholder images with your own
- Modify project data and achievements
- Update contact information and social links

### Animations
- Customize Framer Motion animations in components
- Adjust timing and easing in transition objects
- Add new animation variants as needed

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

## 🔧 Environment Variables

No environment variables required for basic functionality.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

- **Email**: varshine12@gmail.com
- **LinkedIn**: [linkedin.com/in/varshine12](https://www.linkedin.com/in/varshine12/)
- **GitHub**: [github.com/VarshineT](https://github.com/VarshineT)

---

Built with ❤️ by Varshine T