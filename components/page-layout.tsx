import React from 'react'
import { Box } from 'theme-ui'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import Footer from './footer'

/**
 * Standard page layout component
 * Provides consistent structure for all pages
 */
interface PageLayoutProps {
  title: string
  description: string
  children: React.ReactNode
  showFooter?: boolean
  bgColor?: string
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  title, 
  description, 
  children, 
  showFooter = true,
  bgColor = 'background'
}) => (
  <>
    <Meta
      as={Head}
      title={title}
      description={description}
    />
    
    <Box sx={{ 
      minHeight: '100vh', 
      bg: 'background',
      position: 'relative'
    }}>
      <Box sx={{ bg: bgColor }}>
        {children}
      </Box>
      
      {showFooter && (
        <Box sx={{ bg: 'background' }}>
          <Footer />
        </Box>
      )}
    </Box>
  </>
)

export default PageLayout

