import React from 'react'
import { IconButton, useColorMode } from 'theme-ui'

interface ColorSwitcherProps {
  [key: string]: any
}

const ColorSwitcher: React.FC<ColorSwitcherProps> = (props) => {
  const [mode, setMode] = useColorMode()

  const toggleMode = (): void => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <IconButton
      onClick={toggleMode}
      title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
      sx={{
        position: 'fixed',
        top: [3, 4],
        left: [3, 4],
        zIndex: 1000,
        color: 'primary',
        cursor: 'pointer',
        borderRadius: 'circle',
        bg: 'background',
        border: '2px solid',
        borderColor: 'border',
        transition: 'all .125s ease-in-out',
        ':hover,:focus': {
          boxShadow: '0 0 0 3px',
          outline: 'none',
          transform: 'scale(1.1)'
        }
      }}
      {...props}
    >
      <svg viewBox="0 0 32 32" width={24} height={24} fill="currentcolor">
        <circle
          cx={16}
          cy={16}
          r={14}
          fill="none"
          stroke="currentcolor"
          strokeWidth={4}
        />
        <path d="M 16 0 A 16 16 0 0 0 16 32 z" />
      </svg>
    </IconButton>
  )
}

export default ColorSwitcher

