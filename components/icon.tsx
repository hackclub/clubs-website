import React from 'react'
import Icon from '@hackclub/icons'

interface IconComponentProps {
  glyph?: string
  size?: number
  sx?: any
  [key: string]: any
}

const IconComponent: React.FC<IconComponentProps> = (props) => <Icon {...props} />

export default IconComponent

