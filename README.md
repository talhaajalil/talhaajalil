# 🚀 Talha Jalil - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio showcases my experience, projects, and skills as a Computer Science student at York University.

## 🌐 Live Website

Visit my portfolio at: **https://talhaajalil.github.io/talhaajalil/**

## ✨ Features

- 🌓 **Dark/Light Mode** - Toggle between themes with persistent preference
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast Performance** - Optimized for 90+ Lighthouse score
- 🎨 **Smooth Animations** - Powered by Framer Motion
- 📝 **Contact Form** - Form validation with React Hook Form
- 🔍 **SEO Optimized** - Meta tags and Open Graph support
- ♿ **Accessible** - WCAG 2.1 compliant design

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📋 Sections

1. **Hero** - Introduction with social links
2. **About** - Education and background information
3. **Skills** - Technical skills organized by category
4. **Experience** - Professional work experience
5. **Projects** - Featured project showcase
6. **Contact** - Contact form and information

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/talhaajalil/talhaajalil.git
   cd talhaajalil
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file (optional, for contact form):
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles and theme variables
├── components/
│   ├── Navigation.tsx  # Navigation bar with theme toggle
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section with education
│   ├── Skills.tsx      # Skills showcase
│   ├── Experience.tsx  # Work experience timeline
│   ├── Projects.tsx    # Project cards
│   ├── Contact.tsx     # Contact form and info
│   └── Footer.tsx      # Footer with links
├── public/
│   └── images/         # Static images
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🚀 Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com/)
3. Vercel will automatically detect Next.js and deploy

Alternatively, deploy with the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 📧 Contact

- **Email**: talhaa.jalil@gmail.com
- **Phone**: (647) 781-9982
- **LinkedIn**: [linkedin.com/in/talha-jalil](https://linkedin.com/in/talha-jalil)
- **GitHub**: [github.com/talhaajalil](https://github.com/talhaajalil)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

© 2024 Talha Jalil. All rights reserved.
