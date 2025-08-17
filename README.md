# Cycls Landing Page

A modern, responsive landing page for Cycls - the definitive platform for commercial AI agents. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Overview

Cycls transforms AI agents into scalable, monetizable businesses with a single decorator. This landing page showcases the platform's value proposition for developers and enterprises looking to commercialize their AI agents instantly.

## ✨ Features

- **Modern Design**: Clean, dark-themed UI with gradient accents and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Semantic HTML structure with proper meta tags and accessibility
- **Performance Focused**: Optimized images, lazy loading, and efficient component structure
- **Component-Based Architecture**: Modular, reusable React components
- **Type Safe**: Built with TypeScript for better development experience
- **Design System**: Consistent theming with semantic CSS tokens

## 🛠 Technology Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: shadcn/ui component library
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React hooks
- **Code Quality**: ESLint configuration

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd cycls-landing-page
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

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui base components
│   ├── Hero.tsx         # Hero section component
│   ├── Problem.tsx      # Problem statement section
│   ├── HowItWorks.tsx   # Three-step process section
│   ├── ForDevelopers.tsx # Developer-focused section
│   ├── ForBusiness.tsx  # Business/Enterprise section
│   ├── FinalCTA.tsx     # Final call-to-action
│   └── Navigation.tsx   # Header navigation
├── pages/
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 error page
├── assets/
│   └── hero-bg.jpg      # Hero section background image
├── lib/
│   └── utils.ts         # Utility functions
├── hooks/               # Custom React hooks
├── index.css           # Global styles and CSS variables
└── main.tsx           # Application entry point
```

## 🎨 Design System

The project uses a comprehensive design system with semantic tokens:

### Color Palette

- **Primary**: Blue gradient (#3B82F6 to #1E40AF)
- **Secondary**: Purple accent (#8B5CF6)
- **Background**: Dark theme with subtle gradients
- **Text**: High contrast white/gray hierarchy

### Typography

- **Headings**: Bold, large scale for impact
- **Body**: Readable sans-serif with proper line height
- **Code**: Monospace for technical content

### Components

All components follow consistent patterns:

- Responsive design with mobile-first approach
- Semantic HTML structure for accessibility
- Consistent spacing using Tailwind's scale
- Hover states and smooth transitions

## 🧩 Component Documentation

### Hero Component

- **Purpose**: Main landing section with headline and CTA
- **Features**: Gradient text effects, responsive typography, background image
- **Props**: None (static content)

### Problem Component

- **Purpose**: Explains the gap between AI agents and viable businesses
- **Features**: Centered layout with emphasis typography
- **Props**: None (static content)

### HowItWorks Component

- **Purpose**: Three-step process explanation
- **Features**: Grid layout, numbered steps, responsive design
- **Props**: None (static content)

### ForDevelopers Component

- **Purpose**: Developer-focused value proposition
- **Features**: Technical messaging, documentation CTA
- **Props**: None (static content)

### ForBusiness Component

- **Purpose**: Business and enterprise value proposition
- **Features**: Dual messaging for startups and enterprises
- **Props**: None (static content)

### FinalCTA Component

- **Purpose**: Final conversion section
- **Features**: Prominent CTA button, concise messaging
- **Props**: None (static content)

### Navigation Component

- **Purpose**: Header navigation with logo and menu
- **Features**: Responsive design, smooth scrolling links
- **Props**: None (static content)

## 🎯 SEO & Performance

### SEO Features

- Semantic HTML5 structure (`<header>`, `<main>`, `<section>`)
- Optimized title and meta description
- Proper heading hierarchy (single H1, structured H2/H3)
- Descriptive alt attributes for images
- Clean, crawlable URLs

### Performance Optimizations

- Optimized images with proper sizing
- Efficient component rendering
- Minimal CSS bundle size
- Fast loading times with Vite

## 🚀 Deployment

The application is configured for easy deployment:

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Custom Domain** (Paid plans only)
   - Navigate to Project > Settings > Domains
   - Follow the custom domain setup guide

## 🔧 Development Guidelines

### Code Style

- Use TypeScript for all new components
- Follow React functional component patterns
- Implement proper error boundaries where needed
- Use semantic CSS class names

### Component Guidelines

- Keep components focused and single-purpose
- Use composition over inheritance
- Implement proper TypeScript interfaces
- Include JSDoc comments for complex logic

### CSS Guidelines

- Use Tailwind utility classes
- Leverage design system tokens from `index.css`
- Avoid custom CSS unless absolutely necessary
- Maintain responsive design principles

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

### Development Workflow

- Ensure all components are responsive
- Test in multiple browsers
- Verify accessibility compliance
- Run linting before committing

## 🔄 Version History

- **v1.0.0** - Initial landing page release
  - Hero section with gradient branding
  - Complete section hierarchy
  - Responsive design implementation
  - SEO optimization
  - Performance optimization

---
