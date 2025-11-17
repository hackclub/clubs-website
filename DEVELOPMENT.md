# Development Guide

This guide explains how to easily extend and modify the Hack Club website.

## 🏗️ Architecture

The website is built with a modular, component-based architecture that makes it easy to:
- Add new pages
- Create new sections
- Modify existing content
- Maintain consistency

## 📁 Project Structure

```
new-club-website/
├── components/           # Reusable UI components
│   ├── page-layout.js   # Standard page wrapper
│   ├── section.js       # Reusable content sections
│   ├── feature-card.js  # Cards for features/stats/activities
│   ├── cta-cards.js     # Call-to-action card grids
│   ├── hero-section.js  # Hero/header sections
│   └── ...
├── pages/               # Next.js pages
├── lib/                 # Utilities and configuration
│   └── content-config.js # Centralized content management
└── ...
```

## 🧩 Key Components

### PageLayout
Standard wrapper for all pages with consistent meta tags and footer.

```jsx
import PageLayout from '../components/page-layout'

const MyPage = () => (
  <PageLayout 
    title="My Page - Hack Club"
    description="Description of my page"
  >
    {/* Page content */}
  </PageLayout>
)
```

### Section
Reusable content section with consistent spacing and typography.

```jsx
import Section from '../components/section'

<Section
  eyebrow="Section Category"
  title="Section Title"
  titleHighlight="highlighted text"
  highlightColor="blue"
  description="Section description text"
  showNavButton={true}
  navButtonText="Learn More"
  navButtonHref="/my-page"
>
  {/* Section content */}
</Section>
```

### FeatureCard
Flexible card component for features, stats, or activities.

```jsx
import FeatureCard from '../components/feature-card'

<FeatureCard
  icon="bolt"
  iconColor="blue"
  title="Feature Title"
  description="Feature description"
  variant="activity" // 'default', 'stat', 'activity'
  href="/optional-link"
/>
```

### CTACards
Grid of call-to-action cards (like the application flow).

```jsx
import CTACards from '../components/cta-cards'
import { ctaCards } from '../lib/content-config'

<CTACards cards={ctaCards} />
```

## 📝 Content Management

All content is centralized in `lib/content-config.js`. This makes it easy to:
- Update text without touching components
- Add new sections
- Maintain consistency
- Support internationalization later

### Adding New Content

1. **Add to content-config.js:**
```javascript
export const myNewSection = [
  {
    title: 'New Item',
    description: 'Description',
    icon: 'bolt',
    color: 'blue'
  }
]
```

2. **Use in components:**
```jsx
import { myNewSection } from '../lib/content-config'

{myNewSection.map((item, index) => (
  <FeatureCard key={index} {...item} />
))}
```

## 🆕 Adding New Pages

1. **Create the page file:**
```jsx
// pages/my-new-page.js
import PageLayout from '../components/page-layout'
import Section from '../components/section'

const MyNewPage = () => (
  <PageLayout title="My New Page - Hack Club" description="Page description">
    <Section
      eyebrow="New Section"
      title="My New Page"
      description="This is a new page"
    >
      {/* Content */}
    </Section>
  </PageLayout>
)

export default MyNewPage
```

2. **Add to navigation (optional):**
```javascript
// lib/content-config.js
export const navigation = {
  main: [
    // ... existing items
    { name: 'My New Page', href: '/my-new-page' }
  ]
}
```

3. **Add metadata:**
```javascript
// lib/content-config.js
export const pageMetadata = {
  // ... existing pages
  myNewPage: {
    title: 'My New Page - Hack Club',
    description: 'Description of my new page'
  }
}
```

## 🎨 Styling Guidelines

The website uses Theme UI for consistent styling:

- Use theme colors: `blue`, `green`, `orange`, `purple`, `cyan`, etc.
- Use theme variants: `title`, `headline`, `lead`, `eyebrow`
- Use responsive arrays: `py={[4, 5]}` (mobile, desktop)
- Use theme spacing: `mt={3}`, `p={4}`

## 🔧 Common Patterns

### Adding a New Section to Homepage

1. **Add content to config:**
```javascript
// lib/content-config.js
export const myNewContent = {
  eyebrow: 'New Category',
  title: 'My New Section',
  titleHighlight: 'highlight',
  description: 'Section description',
  items: [/* array of items */]
}
```

2. **Add to homepage:**
```jsx
// pages/index.js
import { myNewContent } from '../lib/content-config'

<Section {...myNewContent}>
  <Grid columns={[1, null, 3]} gap={4}>
    {myNewContent.items.map((item, index) => (
      <FeatureCard key={index} {...item} />
    ))}
  </Grid>
</Section>
```

### Creating a New Card Type

1. **Extend FeatureCard or create new component:**
```jsx
// components/my-card.js
import { Card, Heading, Text } from 'theme-ui'

const MyCard = ({ title, description, customProp }) => (
  <Card sx={{ p: 3, /* custom styles */ }}>
    <Heading as="h3">{title}</Heading>
    <Text>{description}</Text>
    {/* Custom content based on customProp */}
  </Card>
)
```

2. **Use in sections:**
```jsx
<Grid columns={[1, null, 2]} gap={4}>
  {data.map((item, index) => (
    <MyCard key={index} {...item} />
  ))}
</Grid>
```

## 🚀 Best Practices

1. **Keep components small and focused**
2. **Use content-config.js for all text content**
3. **Follow existing naming conventions**
4. **Use responsive design patterns**
5. **Test on mobile and desktop**
6. **Keep accessibility in mind**

## 📚 Examples

See existing pages for examples:
- `pages/rundown.js` - Simple content page
- `pages/activities.js` - Grid of feature cards
- `pages/club-essentials.js` - Mixed content layout
- `pages/index.js` - Complex homepage with multiple sections

## 🔄 Making Changes

1. **Content changes:** Edit `lib/content-config.js`
2. **Style changes:** Modify component files
3. **New features:** Create new components in `components/`
4. **New pages:** Add files to `pages/`

The modular structure makes it easy to make changes without breaking existing functionality!