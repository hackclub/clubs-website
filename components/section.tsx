import React from 'react'
import { Box, Container, Text, Heading, Button } from 'theme-ui'

/**
 * Reusable section component
 * Provides consistent spacing and structure for content sections
 */
interface SectionProps {
  eyebrow?: string
  title?: string
  titleHighlight?: string
  highlightColor?: string
  description?: React.ReactNode
  children?: React.ReactNode
  bgColor?: string
  textColor?: string
  py?: number | number[]
  maxWidth?: string
  textAlign?: 'left' | 'center' | 'right'
  showNavButton?: boolean
  navButtonText?: string
  navButtonHref?: string
  [key: string]: any
}

const Section: React.FC<SectionProps> = ({ 
  eyebrow,
  title,
  titleHighlight,
  highlightColor = 'blue',
  description,
  children,
  bgColor = 'background',
  textColor = 'text',
  py = [4, 5],
  maxWidth = 'container',
  textAlign = 'left',
  showNavButton = false,
  navButtonText = 'Learn More',
  navButtonHref = '#',
  ...props
}) => (
  <Box 
    as="section" 
    sx={{ 
      py, 
      bg: bgColor, 
      color: textColor,
      textAlign: textAlign === 'center' ? 'center' : ['left', textAlign]
    }} 
    {...props}
  >
    <Container sx={{ maxWidth }}>
      {eyebrow && (
        <Text as="p" variant="eyebrow">
          {eyebrow}
        </Text>
      )}
      
      {title && (
        <Heading as="h2" variant="title" sx={{ mb: 3 }}>
          {title}{' '}
          {titleHighlight && (
            <Text
              as="span"
              sx={{
                borderRadius: 'default',
                px: 2,
                mx: [-2, 0],
                whiteSpace: 'nowrap',
                color: 'background',
                bg: highlightColor,
                display: 'inline-block'
              }}
            >
              {titleHighlight}
            </Text>
          )}
        </Heading>
      )}
      
      {description && (
        <Text as="p" variant="lead" sx={{ maxWidth: 'copyPlus', mx: textAlign === 'center' ? 'auto' : 0 }}>
          {description}
        </Text>
      )}
      
      {children}
      
      {showNavButton && (
        <Box sx={{ mt: 4, textAlign: textAlign === 'center' ? 'center' : 'left' }}>
          <Button
            {...({
              as: "a",
              href: navButtonHref,
              variant: "outline"
            } as any)}
          >
            {navButtonText} →
          </Button>
        </Box>
      )}
    </Container>
  </Box>
)

export default Section

