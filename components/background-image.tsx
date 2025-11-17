import React from 'react'
import { Box } from 'theme-ui'

interface BGImgProps {
  gradient?: string
  src: string
  alt?: string
  [key: string]: any
}

const BGImg: React.FC<BGImgProps> = ({
  gradient = 'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.5))',
  src,
  alt = '',
  ...props
}) => (
  <Box
    sx={{
      position: 'absolute',
      display: 'block',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      backgroundImage: `${gradient}, url(${src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      '~ *': { position: 'relative' }
    }}
    {...props}
  />
)

export default BGImg

