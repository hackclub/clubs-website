#!/usr/bin/env node

/**
 * Quick script to create new pages
 * Usage: node scripts/create-page.js my-new-page "My New Page" "Description"
 */

const fs = require('fs')
const path = require('path')

const [,, pageName, title, description] = process.argv

if (!pageName || !title) {
  console.log('Usage: node scripts/create-page.js <page-name> "<title>" "<description>"')
  console.log('Example: node scripts/create-page.js about "About Us" "Learn about our mission"')
  process.exit(1)
}

const pageTemplate = `import PageLayout from '../components/page-layout'
import Section from '../components/section'

const ${pageName.charAt(0).toUpperCase() + pageName.slice(1)}Page = () => (
  <PageLayout 
    title="${title} - Hack Club"
    description="${description || 'Learn more about ' + title}"
  >
    <Section
      eyebrow="New Section"
      title="${title}"
      description="${description || 'Add your description here'}"
    >
      {/* Add your content here */}
    </Section>
  </PageLayout>
)

export default ${pageName.charAt(0).toUpperCase() + pageName.slice(1)}Page
`

const filePath = path.join(__dirname, '..', 'pages', `${pageName}.js`)

try {
  fs.writeFileSync(filePath, pageTemplate)
  console.log(`✅ Created new page: pages/${pageName}.js`)
  console.log(`📝 Page title: ${title}`)
  console.log(`📄 Description: ${description || 'Add your description here'}`)
  console.log(`🌐 URL: /${pageName}`)
  console.log('')
  console.log('Next steps:')
  console.log('1. Add content to your new page')
  console.log('2. Add to navigation in lib/content-config.js (optional)')
  console.log('3. Add metadata to pageMetadata in lib/content-config.js')
} catch (error) {
  console.error('❌ Error creating page:', error.message)
  process.exit(1)
}