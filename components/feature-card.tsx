import React from 'react'
import { Box, Card, Heading, Text } from 'theme-ui'
import Icon from './icon'

/**
 * Reusable feature card component
 * Can be used for stats, features, activities, etc.
 */
interface FeatureCardProps {
  icon?: string
  iconColor?: string
  iconSize?: number
  title?: string
  titleColor?: string
  description?: React.ReactNode
  href?: string
  variant?: 'default' | 'stat' | 'activity'
  [key: string]: any
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  iconColor = 'blue',
  iconSize = 32,
  title,
  titleColor = 'text',
  description,
  href,
  variant = 'default',
  ...props
}) => {
  const cardContent = (
    <>
      {icon && (
        <Box sx={{ 
          bg: iconColor, 
          borderRadius: variant === 'activity' ? '50%' : 'default',
          p: variant === 'activity' ? 3 : 2,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3,
          ...(variant === 'default' && {
            transform: ['scale(0.75)', 'none'],
            transformOrigin: 'bottom left'
          })
        }}>
          <Icon glyph={icon} size={iconSize} sx={{ color: 'white !important' }} />
        </Box>
      )}
      
      <Heading 
        as="h3" 
        variant={variant === 'stat' ? 'headline' : 'subheadline'}
        sx={{ 
          fontSize: variant === 'stat' ? 3 : 2,
          mb: 2, 
          color: titleColor 
        }}
      >
        {title}
      </Heading>
      
      <Text 
        as="p" 
        sx={{ 
          fontSize: variant === 'activity' ? 1 : 'inherit',
          mt: 0,
          flex: 1
        }}
      >
        {description}
      </Text>
    </>
  )

  const cardProps = {
    sx: {
      p: variant === 'activity' ? 4 : 3,
      textAlign: variant === 'activity' ? 'center' : 'left',
      display: 'flex',
      flexDirection: 'column' as const,
      height: '100%',
      ...(href && {
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
        }
      })
    } as any,
    ...props
  }

  if (href) {
    return (
      <Card {...({ as: "a", href } as any)} {...cardProps}>
        {cardContent}
      </Card>
    )
  }

  return (
    <Card {...cardProps}>
      {cardContent}
    </Card>
  )
}

export default FeatureCard

