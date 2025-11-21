/**
 * Utility functions to help generate new pages and sections
 * Makes it easy to scaffold new content quickly
 */

/**
 * Generate a basic page template
 */
export const generatePageTemplate = (pageName: string, title: string, description: string): string => `
import React from 'react'
import PageLayout from '../components/page-layout'
import Section from '../components/section'
import { Button } from 'theme-ui'

const ${pageName}Page: React.FC = () => (
  <PageLayout 
    title="${title}"
    description="${description}"
  >
    <Section
      eyebrow="New Section"
      title="${title.replace(' - Hack Club', '')}"
      description="${description}"
    >
      {/* Add your content here */}
      
      <Button as="a" href="/" variant="outline" sx={{ mt: 4 }}>
        ← Back to Home
      </Button>
    </Section>
  </PageLayout>
)

export default ${pageName}Page
`

/**
 * Generate a section with feature cards
 */
export const generateFeatureSection = (sectionData: {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  highlightColor?: string;
  description?: string;
  showNavButton?: boolean;
  navButtonText?: string;
  navButtonHref?: string;
  columns?: number;
  dataSource?: string;
  cardVariant?: string;
}): string => `
<Section
  eyebrow="${sectionData.eyebrow || 'Features'}"
  title="${sectionData.title}"
  titleHighlight="${sectionData.titleHighlight || ''}"
  highlightColor="${sectionData.highlightColor || 'blue'}"
  description="${sectionData.description || ''}"
  showNavButton={${sectionData.showNavButton || false}}
  navButtonText="${sectionData.navButtonText || 'Learn More'}"
  navButtonHref="${sectionData.navButtonHref || '#'}"
>
  <Grid columns={[1, null, ${sectionData.columns || 3}]} gap={[3, 4]} sx={{ mt: 4 }}>
    {${sectionData.dataSource || 'items'}.map((item, index) => (
      <FeatureCard
        key={index}
        variant="${sectionData.cardVariant || 'default'}"
        {...item}
      />
    ))}
  </Grid>
</Section>
`

/**
 * Generate content config entry
 */
export const generateContentConfig = (name: string, items: Array<{
  title: string;
  description: string;
  icon?: string;
  iconColor?: string;
}>): string => `
// Add this to lib/content-config.ts
export const ${name} = [
${items.map(item => `  {
    title: '${item.title}',
    description: '${item.description}',
    icon: '${item.icon || 'bolt'}',
    iconColor: '${item.iconColor || 'blue'}'
  }`).join(',\n')}
]
`

/**
 * Common section configurations for quick setup
 */
export const sectionTemplates = {
  stats: {
    eyebrow: 'By the numbers',
    title: 'Our Impact',
    cardVariant: 'stat',
    columns: 3
  },
  features: {
    eyebrow: 'Features',
    title: 'What we offer',
    cardVariant: 'default',
    columns: 3
  },
  activities: {
    eyebrow: 'Get involved',
    title: 'Activities',
    cardVariant: 'activity',
    columns: 2
  },
  steps: {
    eyebrow: 'How it works',
    title: 'Getting started',
    cardVariant: 'default',
    columns: 3
  }
}

/**
 * Helper to create a new page with sections
 */
export const createPageWithSections = (pageName: string, sections: Array<{
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  highlightColor?: string;
  description?: string;
  showNavButton?: boolean;
  navButtonText?: string;
  navButtonHref?: string;
  columns?: number;
  dataSource?: string;
  cardVariant?: string;
}>): string => {
  const imports = [
    "import React from 'react'",
    "import PageLayout from '../components/page-layout'",
    "import Section from '../components/section'",
    "import { Grid } from 'theme-ui'",
    "import FeatureCard from '../components/feature-card'"
  ]

  const sectionComponents = sections.map(section => 
    generateFeatureSection(section)
  ).join('\n\n    ')

  return `${imports.join('\n')}

const ${pageName}Page: React.FC = () => (
  <PageLayout 
    title="${pageName} - Hack Club"
    description="Description for ${pageName} page"
  >
    ${sectionComponents}
  </PageLayout>
)

export default ${pageName}Page
`
}

export default {
  generatePageTemplate,
  generateFeatureSection,
  generateContentConfig,
  sectionTemplates,
  createPageWithSections
}

