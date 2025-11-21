import React from 'react'
import { Box, Container, Heading, Text, Button } from 'theme-ui'
import BGImg from './background-image'

/**
 * Reusable hero section component
 * Can be used for page headers with background images
 */
interface HeroSectionProps {
  eyebrow?: string
  title?: string
  titleHighlight?: string
  highlightColor?: string
  description?: React.ReactNode
  backgroundImage?: string
  backgroundAlt?: string
  ctaText?: string
  ctaHref?: string
  ctaVariant?: string
  bgColor?: string
  textColor?: string
  textAlign?: 'left' | 'center' | 'right'
  py?: number | number[]
  children?: React.ReactNode
}

const HeroSection: React.FC<HeroSectionProps> = ({
  eyebrow,
  title,
  titleHighlight,
  highlightColor = 'cyan',
  description,
  backgroundImage,
  backgroundAlt = '',
  ctaText,
  ctaHref,
  ctaVariant = 'ctaLg',
  bgColor = 'dark',
  textColor = 'white',
  textAlign = 'center',
  py = [5, 6],
  children
}) => (
  <Box
    as="header"
    sx={{
      bg: bgColor,
      pt: py,
      pb: [2, 3],
      textAlign,
      position: 'relative',
      overflow: 'hidden',
      color: textColor
    }}
  >
    {backgroundImage && (
      <BGImg
        src={backgroundImage}
        alt={backgroundAlt}
        priority
      />
    )}
    
    <Container>
      {eyebrow && (
        <Text as="p" variant="eyebrow" sx={{ color: textColor, opacity: 0.75 }}>
          {eyebrow}
        </Text>
      )}
      
      {title && (
        <Heading as="h1" variant="title" sx={{ mb: 3 }}>
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
        <Text as="p" variant="lead" sx={{ maxWidth: 'copy', mx: textAlign === 'center' ? 'auto' : 0 }}>
          {description}
        </Text>
      )}
      
      {children}
      
      {ctaText && ctaHref && (
        <Button
          {...({
            as: "a",
            href: ctaHref,
            variant: ctaVariant
          } as any)}
          sx={{ mt: 3 }}
        >
          {ctaText}
        </Button>
      )}
    </Container>
  </Box>
)

export default HeroSection

