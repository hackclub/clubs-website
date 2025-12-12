// club levels system page with all the level details :3

import React, { useState } from 'react'
import { Box, Button, Container, Heading, Text } from 'theme-ui'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import Footer from '../components/footer'

const DropdownSection: React.FC<{
  title: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
}> = ({ title, children, isOpen, onToggle }) => (
  <Box sx={{ mb: 3 }}>
    <Box
      onClick={onToggle}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        p: 3,
        bg: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 'default',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transition: 'all 0.2s ease',
        '&:hover': {
          bg: 'rgba(255, 255, 255, 0.15)',
          transform: 'translateY(-1px)'
        }
      }}
    >
      <Text sx={{ fontWeight: 'bold', fontSize: 2, m: 0 }}>{title}</Text>
      <Box sx={{
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.2s ease',
        fontSize: 3
      }}>
        ▼
      </Box>
    </Box>
    {isOpen && (
      <Box sx={{
        mt: 2,
        p: 3,
        bg: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 'default',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        {children}
      </Box>
    )}
  </Box>
)

const StoriesPage: React.FC = () => {
  const [levelOneDropdowns, setLevelOneDropdowns] = useState({
    perksAndSupport: false
  })
  
  const [levelTwoDropdowns, setLevelTwoDropdowns] = useState({
    perksAndResources: false,
    fastTrackOptions: false
  })

  return (
  <>
    <Meta
      as={Head}
      title="Club Levels System - Hack Club"
      description="Learn about the Hack Club levels system and how to climb up to unlock exclusive perks and resources."
    />

    {/* header section */}
    <Box as="section" sx={{ py: [4, 5], bg: 'background', color: 'text' }}>
      <Container sx={{ textAlign: 'center' }}>
        <Text as="p" variant="eyebrow">
          Advance Your Club
        </Text>
        <Heading as="h2" variant="title" sx={{ mb: 4 }}>
          Club Levels System
        </Heading>
        <Text as="p" variant="lead" sx={{ maxWidth: 'copyPlus', mb: 5, mx: 'auto' }}>
          Progress through our tiered system to unlock exclusive perks and resources for your club.
        </Text>

        {/* stacked levels */}
        <Box sx={{ maxWidth: '700px', mx: 'auto' }}>
          {/* level one on top */}
          <Box sx={{ 
            p: 5, 
            bg: 'elevated', 
            borderRadius: 'default',
            border: '2px solid',
            borderColor: '#cd7f32',
            mb: 4,
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
              <Box sx={{ 
                bg: '#cd7f32', 
                color: 'white',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 4,
                fontWeight: 'bold',
                mr: 3,
                flexShrink: 0
              }}>
                1
              </Box>
              <Heading as="h3" sx={{ fontSize: 5, m: 0 }}>Level One</Heading>
            </Box>
            
            <Text sx={{ fontWeight: 'bold', mb: 4, fontSize: 3 }}>How to Join</Text>
            <Box as="ul" sx={{ pl: 0, mb: 4, fontSize: 2, listStyle: 'disc', textAlign: 'left', maxWidth: '500px', mx: 'auto' }}>
              <li>Apply at <a href="https://apply.hackclub.com" target="_blank" rel="noopener" style={{ color: '#5bc0de', textDecoration: 'underline' }}>apply.hackclub.com</a></li>
              <li>Applications are reviewed for red flags</li>
              <li>Specific approval criteria are to be determined</li>
            </Box>

            <DropdownSection
              title="Perks and Support"
              isOpen={levelOneDropdowns.perksAndSupport}
              onToggle={() => setLevelOneDropdowns(prev => ({ ...prev, perksAndSupport: !prev.perksAndSupport }))}
            >
              <Box as="ul" sx={{ pl: 0, m: 0, fontSize: 1, listStyle: 'disc', textAlign: 'left', maxWidth: '500px', mx: 'auto' }}>
                <li>Added to the Hack Club map and database</li>
                <li>Recognition that your club exists and wants to work on technical projects</li>
                <li>Access to the dedicated leader newsletter</li>
                <li>Q&A support where leaders can ask questions</li>
                <li>Zoom meetings available for those actively interacting and leading workshops</li>
                <li>No formal onboarding calls at this stage</li>
              </Box>
            </DropdownSection>
          </Box>

          {/* level two on bottom */}
          <Box sx={{ 
            p: 5, 
            bg: 'elevated', 
            borderRadius: 'default',
            border: '2px solid',
            borderColor: '#c0c0c0',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
              <Box sx={{ 
                bg: '#c0c0c0', 
                color: '#333',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 4,
                fontWeight: 'bold',
                mr: 3,
                flexShrink: 0
              }}>
                2
              </Box>
              <Heading as="h3" sx={{ fontSize: 5, m: 0 }}>Level Two</Heading>
            </Box>
            
            <Text sx={{ fontWeight: 'bold', mb: 4, fontSize: 3 }}>How to Advance</Text>
            <Box as="ul" sx={{ pl: 0, mb: 4, fontSize: 2, listStyle: 'disc', textAlign: 'left', maxWidth: '500px', mx: 'auto' }}>
              <li>Complete a project for a YSWS program</li>
              <li>Goal is 4+ active participants to meet this criterion</li>
            </Box>

            <DropdownSection
              title="Perks and Resources"
              isOpen={levelTwoDropdowns.perksAndResources}
              onToggle={() => setLevelTwoDropdowns(prev => ({ ...prev, perksAndResources: !prev.perksAndResources }))}
            >
              <Box as="ul" sx={{ pl: 0, m: 0, fontSize: 1, listStyle: 'disc', textAlign: 'left', maxWidth: '500px', mx: 'auto' }}>
                <li>Leader newsletter</li>
                <li>Ability to place sticker orders</li>
                <li>Monthly club mail with program fliers, stickers, and other promotional items to support your club</li>
              </Box>
            </DropdownSection>

            <DropdownSection
              title="Fast Track Options"
              isOpen={levelTwoDropdowns.fastTrackOptions}
              onToggle={() => setLevelTwoDropdowns(prev => ({ ...prev, fastTrackOptions: !prev.fastTrackOptions }))}
            >
              <Box as="ul" sx={{ pl: 0, m: 0, fontSize: 1, listStyle: 'disc', textAlign: 'left', maxWidth: '500px', mx: 'auto' }}>
                <li><strong>Fast Track A:</strong> Clubs that have already completed a YSWS project in the past 6 months</li>
                <li><strong>Fast Track B:</strong> Club leaders who organized an event or hackathon that produced successful ships</li>
              </Box>
            </DropdownSection>
          </Box>
        </Box>

        {/* back button */}
        <Box sx={{ mt: 5, textAlign: 'center' }}>
          <Button
            {...({
              as: "a",
              href: "/",
              variant: "outline"
            } as any)}
            sx={{
              fontSize: 2,
              fontWeight: 600,
              py: 3,
              px: 5,
              borderRadius: '8px',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
              display: 'inline-block',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
              }
            }}
          >
            ← Back to Home
          </Button>
        </Box>
      </Container>
    </Box>

    <Footer />
  </>
  )
}

export default StoriesPage

