import React from 'react'
import { Grid } from 'theme-ui'
import styled from '@emotion/styled'
import { Card } from 'theme-ui'

// Simple card component for CTAs
const SimpleCard = styled(Card)`
  border-radius: 12px;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`

interface CTACard {
  title?: string
  description?: string
  color?: string
  colorEnd?: string
  gradient?: string
  href?: string
  content?: React.ReactNode
}

interface CTACardsProps {
  cards?: CTACard[]
  columns?: number | (number | null)[]
  gap?: number | number[]
}

/**
 * Reusable CTA cards component
 * Used for step-by-step processes or call-to-action sections
 */
const CTACards: React.FC<CTACardsProps> = ({ cards = [], columns = [1, null, 3], gap = [3, 4] }) => (
  <Grid columns={columns} gap={gap}>
    {cards.map((card, index) => (
      <SimpleCard
        key={index}
        as={card.href ? "a" : "div"}
        href={card.href}
        target={card.href ? "_blank" : undefined}
        rel={card.href ? "noopener" : undefined}
        variant="interactive"
        sx={{
          background: card.gradient || `linear-gradient(135deg, ${card.color} 0%, ${card.colorEnd || card.color} 100%)`,
          color: 'white',
          p: 4,
          textDecoration: 'none',
          cursor: card.href ? 'pointer' : 'default',
          '&:hover': {
            textDecoration: 'none'
          }
        }}
      >
        {card.content}
      </SimpleCard>
    ))}
  </Grid>
)

export default CTACards

