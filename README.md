# Hack Club Website

A modern, modular website for Hack Club built with Next.js and Theme UI.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🏗️ Architecture

This website is built with modularity and extensibility in mind:

- **Component-based**: Reusable UI components for consistent design
- **Content-driven**: Centralized content management in `lib/content-config.js`
- **Easy to extend**: Simple patterns for adding new pages and sections
- **Responsive**: Mobile-first design with Theme UI

## 📁 Key Files

- `components/` - Reusable UI components
- `pages/` - Next.js pages and routes
- `lib/content-config.js` - All website content and configuration
- `DEVELOPMENT.md` - Detailed development guide

## 🆕 Adding New Content

### Quick Page Creation

```bash
# Create a new page quickly
node scripts/create-page.js about "About Us" "Learn about our mission"
```

### Manual Page Creation

1. **Create page file:**
```jsx
// pages/my-page.js
import PageLayout from '../components/page-layout'
import Section from '../components/section'

const MyPage = () => (
  <PageLayout title="My Page - Hack Club" description="Page description">
    <Section title="My Page" description="Content here">
      {/* Your content */}
    </Section>
  </PageLayout>
)

export default MyPage
```

2. **Add content to config:**
```javascript
// lib/content-config.js
export const myPageContent = {
  title: 'My Page',
  items: [/* your data */]
}
```

### Adding Sections

Use the `Section` component for consistent layout:

```jsx
<Section
  eyebrow="Category"
  title="Section Title"
  titleHighlight="highlighted"
  highlightColor="blue"
  description="Section description"
  showNavButton={true}
  navButtonText="Learn More"
  navButtonHref="/details"
>
  {/* Section content */}
</Section>
```

### Adding Feature Cards

Use `FeatureCard` for consistent card layouts:

```jsx
<FeatureCard
  icon="bolt"
  iconColor="blue"
  title="Feature Title"
  description="Feature description"
  variant="activity" // 'default', 'stat', 'activity'
/>
```

## 🎨 Design System

The website uses Theme UI with predefined:

- **Colors**: `blue`, `green`, `orange`, `purple`, `cyan`, etc.
- **Typography**: `title`, `headline`, `lead`, `eyebrow` variants
- **Spacing**: Responsive arrays like `py={[4, 5]}`
- **Components**: Consistent styling across all elements

## 📱 Responsive Design

All components are mobile-first and responsive:

```jsx
// Mobile-first responsive values
sx={{
  py: [4, 5],        // padding: mobile, desktop
  fontSize: [2, 3],  // font size: mobile, desktop
  columns: [1, null, 3] // grid: mobile, tablet, desktop
}}
```

## 🔧 Development Workflow

1. **Content changes**: Edit `lib/content-config.js`
2. **New components**: Add to `components/`
3. **New pages**: Use script or create manually in `pages/`
4. **Styling**: Use Theme UI system

## 📚 Component Library

### Layout Components
- `PageLayout` - Standard page wrapper
- `Section` - Content sections with consistent spacing
- `HeroSection` - Header sections with background images

### Content Components
- `FeatureCard` - Flexible cards for features/stats/activities
- `CTACards` - Call-to-action card grids
- Various utility components

### Usage Examples

```jsx
// Simple content page
<PageLayout title="My Page">
  <Section title="Welcome" description="Page content">
    <Grid columns={[1, null, 3]} gap={4}>
      {data.map(item => <FeatureCard key={item.id} {...item} />)}
    </Grid>
  </Section>
</PageLayout>

// Hero page
<PageLayout title="Landing Page">
  <HeroSection
    title="Welcome"
    description="Hero description"
    backgroundImage="/hero.jpg"
    ctaText="Get Started"
    ctaHref="/start"
  />
  <Section title="Features">
    {/* Content */}
  </Section>
</PageLayout>
```

## 🎯 Best Practices

1. **Use existing components** before creating new ones
2. **Keep content in config files** for easy management
3. **Follow responsive patterns** with arrays
4. **Use semantic HTML** and proper headings
5. **Test on mobile and desktop**

## 📖 Documentation

- `DEVELOPMENT.md` - Comprehensive development guide
- Component files include JSDoc comments
- `lib/content-config.js` has inline documentation

## 🚀 Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

The site is optimized for deployment on Vercel, Netlify, or any static hosting platform.

## 🤝 Contributing

1. Read `DEVELOPMENT.md` for detailed guidelines
2. Use existing patterns and components
3. Keep content in configuration files
4. Test responsive design
5. Follow the established code style

## 📄 License

MIT License - see LICENSE file for details.