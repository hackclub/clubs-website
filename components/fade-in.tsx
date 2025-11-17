import React from 'react'
import { Box } from 'theme-ui'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })

const Wrapper = styled(Box)`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`

interface FadeInProps {
  duration?: number
  delay?: number
  style?: React.CSSProperties
  children?: React.ReactNode
  [key: string]: any
}

const FadeIn: React.FC<FadeInProps> = ({ duration = 300, delay = 0, ...props }) => (
  <Wrapper
    {...props}
    style={{
      ...(props.style || {}),
      animationDuration: duration + 'ms',
      animationDelay: delay + 'ms'
    }}
  />
)

export default FadeIn

