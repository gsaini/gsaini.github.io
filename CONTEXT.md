# Context Engineering Instructions

## Project Overview

This is a **personal portfolio website** for Gopal Saini, a Full Stack Architect, Cloud Architect, and AI/ML Engineer. The site showcases professional experience, technical expertise, and AI/ML projects.

**Live URL**: https://gopalsaini.co.in  
**Repository**: https://github.com/gsaini/gsaini.github.io

## Tech Stack

- **Build Tool**: Vite (using Rolldown variant: `rolldown-vite@7.2.2`)
- **Languages**: HTML5, Vanilla JavaScript (ES6+), CSS3
- **Styling**: Vanilla CSS with CSS Custom Properties (no framework)
- **Linting**: Biome (replaces ESLint + Prettier)
- **Package Manager**: pnpm
- **Pre-commit Hooks**: Husky + lint-staged
- **Deployment**: GitHub Pages via GitHub Actions
- **Node Version**: 24.x or higher

## Project Structure

```
gsaini.github.io/
├── .github/workflows/     # GitHub Actions for deployment
├── .husky/                # Git hooks (pre-commit linting)
├── src/
│   ├── content.js         # Portfolio content data
│   ├── dynamic-content.js # Dynamic rendering & filtering logic
│   ├── neural-network.js  # Animated neural network background
│   └── styles.css         # All CSS styles
├── dist/                  # Build output (generated)
├── biome.json            # Biome configuration
├── index.html            # Main HTML file
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## Key Features

### 1. Dynamic Content System

- Portfolio content is defined in `src/content.js` as structured data
- `src/dynamic-content.js` dynamically renders projects, skills, and expertise
- Supports filtering by category and technology tags
- Cross-section filtering (clicking a tag filters across all sections)

### 2. Animated Background

- Custom neural network animation canvas (`src/neural-network.js`)
- Particles with connections, responsive to viewport size
- Performance-optimized with requestAnimationFrame

### 3. Scroll Animations

- Intersection Observer API for scroll-triggered animations
- Fade-in effects on sections as they enter viewport
- Smooth transitions and micro-animations

### 4. SEO Optimization

- Comprehensive meta tags (Open Graph, Twitter Cards)
- Semantic HTML5 structure
- Proper heading hierarchy
- Google Analytics integration

## Development Guidelines

### Code Style

1. **JavaScript**:

   - Use ES6+ features (modules, arrow functions, destructuring)
   - Prefer `for...of` loops over `forEach` (Biome lint rule)
   - Use `const` and `let`, never `var`
   - Module type: ES modules (`type="module"`)

2. **CSS**:

   - Use CSS Custom Properties for theming
   - Mobile-first responsive design
   - BEM-like naming conventions for classes
   - Avoid inline styles

3. **HTML**:
   - Semantic HTML5 elements
   - Accessibility: proper ARIA labels, alt text
   - Unique IDs for all interactive elements

### Linting & Formatting

- **Biome** is used for both linting and formatting
- Configuration: `biome.json`
- Pre-commit hook runs `biome check --write` on staged files
- Lint rules enforce:
  - No `forEach` (use `for...of` instead)
  - Consistent code style
  - Import organization

### Scripts

```bash
pnpm dev          # Start dev server (localhost:5173)
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm lint         # Run linter
pnpm lint:fix     # Fix linting issues
pnpm format       # Format code
pnpm check        # Lint + format check
```

### Pre-commit Workflow

1. Husky runs on `git commit`
2. lint-staged runs `biome check --write` on `*.{js,css}`
3. Commit fails if linting errors exist
4. Auto-fixes are staged automatically

## Content Management

### Adding/Editing Content

All content is in `src/content.js`:

```javascript
export const projects = [
  {
    title: "Project Name",
    description: "Description",
    category: "category-slug",
    technologies: ["React", "Node.js"],
    link: "https://...",
    github: "https://github.com/...",
  },
];

export const skills = [
  {
    name: "Skill Name",
    category: "category-slug",
    level: "Expert|Advanced|Intermediate",
    technologies: ["Tech1", "Tech2"],
  },
];
```

### Categories

- Projects: `web-app`, `ml-project`, `cloud-infra`, `api-service`
- Skills: `frontend`, `backend`, `cloud`, `ai-ml`, `devops`

### Technology Tags

- Clicking a tag filters all sections by that technology
- Tags are automatically extracted from content data
- Styling: `.tech-tag` class with hover effects

## Deployment

### Automatic Deployment

- **Trigger**: Push to `source` branch
- **Process**: GitHub Actions workflow (`.github/workflows/main.yml`)
  1. Checkout code
  2. Install dependencies (pnpm)
  3. Run linting (`pnpm lint`)
  4. Build (`pnpm build`)
  5. Deploy `dist/` to GitHub Pages
- **Custom Domain**: gopalsaini.co.in (configured in GitHub Pages settings)

### Manual Deployment

```bash
pnpm build
# Deploy dist/ folder to hosting provider
```

## Design System

### Color Palette

```css
--primary: #00f2ff; /* Cyan accent */
--primary-dark: #00b8c4; /* Darker cyan */
--bg-dark: #0a0e27; /* Deep navy background */
--bg-card: #1a1f3a; /* Card background */
--text-primary: #ffffff; /* White text */
--text-secondary: #a0aec0; /* Gray text */
```

### Typography

- Font: System font stack (no external fonts)
- Headings: Bold, large sizes with letter-spacing
- Body: 16px base, 1.6 line-height

### Spacing

- Uses consistent spacing scale: 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem
- Container max-width: 1200px
- Section padding: 4rem vertical

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Considerations

1. **Minimal JavaScript**: Only essential JS for interactivity
2. **CSS Animations**: Use `transform` and `opacity` for 60fps
3. **Lazy Loading**: Images use native lazy loading
4. **Bundle Size**: Vite optimizes and minifies production build
5. **Canvas Optimization**: Neural network animation uses RAF and throttling

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- Sufficient color contrast
- Focus indicators on interactive elements

## Common Tasks

### Adding a New Project

1. Edit `src/content.js`
2. Add project object to `projects` array
3. Ensure category and technologies are correct
4. Test filtering functionality
5. Commit and push to `source` branch

### Updating Styles

1. Edit `src/styles.css`
2. Use existing CSS custom properties
3. Test responsiveness (mobile, tablet, desktop)
4. Run `pnpm lint:fix` before committing

### Modifying Animations

1. Edit `src/neural-network.js` for background
2. Edit `src/dynamic-content.js` for scroll animations
3. Test performance (60fps target)
4. Ensure animations are accessible (respect `prefers-reduced-motion`)

## Troubleshooting

### Build Errors

- **Issue**: Vite build fails
- **Solution**: Check `vite.config.js`, ensure all imports are correct

### Linting Errors

- **Issue**: Pre-commit hook fails
- **Solution**: Run `pnpm lint:fix` to auto-fix, or manually fix errors

### Deployment Issues

- **Issue**: GitHub Pages not updating
- **Solution**: Check GitHub Actions logs, ensure `source` branch is set as deployment source

### Performance Issues

- **Issue**: Slow animations
- **Solution**: Reduce particle count in `neural-network.js`, optimize CSS animations

## AI Assistant Guidelines

When working with this project:

1. **Respect the tech stack**: Use Vanilla JS/CSS, no frameworks unless explicitly requested
2. **Follow Biome rules**: Use `for...of` instead of `forEach`
3. **Maintain design consistency**: Use existing CSS custom properties and design patterns
4. **Test responsiveness**: Always consider mobile, tablet, and desktop viewports
5. **Update documentation**: If making significant changes, update README.md and this file
6. **Preserve SEO**: Maintain meta tags, semantic HTML, and structured data
7. **Performance first**: Keep bundle size small, optimize animations
8. **Accessibility**: Ensure all changes maintain WCAG compliance

## Contact Information

- **Name**: Gopal Saini
- **Email**: gopal.saini.work@gmail.com
- **Phone**: +1 551 200 4845
- **LinkedIn**: https://www.linkedin.com/in/gopal-saini
- **GitHub**: https://github.com/gsaini
- **Credly**: https://www.credly.com/users/gsaini/badges

## License

MIT License - Open source and available for use.

---

**Last Updated**: December 2, 2025  
**Maintained By**: Gopal Saini  
**Built with ❤️ & empowered by AI**
