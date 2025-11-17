// club levels system page with all the level details :3

import React from 'react'
import { Box, Button, Container, Heading, Text } from 'theme-ui'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import Footer from '../components/footer'

const StoriesPage: React.FC = () => (
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
          {/* bronze level on top */}
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
              <Heading as="h3" sx={{ fontSize: 5, m: 0 }}>Bronze Level</Heading>
            </Box>
            
            <Text sx={{ fontWeight: 'bold', mb: 2, fontSize: 2 }}>How to Join</Text>
            <Box as="ul" sx={{ pl: 0, mb: 3, fontSize: 1, listStyle: 'none', textAlign: 'center' }}>
              <li>Apply at <a href="https://apply.hackclub.com" target="_blank" rel="noopener">apply.hackclub.com</a></li>
              <li>Applications are reviewed for red flags</li>
              <li>Specific approval criteria are to be determined</li>
            </Box>

            <Text sx={{ fontWeight: 'bold', mb: 2, fontSize: 2 }}>Perks and Support</Text>
            <Box as="ul" sx={{ pl: 0, fontSize: 1, listStyle: 'none', textAlign: 'center' }}>
              <li>Added to the Hack Club map and database</li>
              <li>Recognition that your club exists and wants to work on technical projects</li>
              <li>Access to the dedicated leader newsletter</li>
              <li>Q&A support where leaders can ask questions</li>
              <li>Zoom meetings available for those actively interacting and leading workshops</li>
              <li>No formal onboarding calls at this stage</li>
            </Box>
          </Box>

          {/* silver level on bottom */}
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
              <Heading as="h3" sx={{ fontSize: 5, m: 0 }}>Silver Level</Heading>
            </Box>
            
            <Text sx={{ fontWeight: 'bold', mb: 2, fontSize: 2 }}>How to Advance</Text>
            <Box as="ul" sx={{ pl: 0, mb: 3, fontSize: 1, listStyle: 'none', textAlign: 'center' }}>
              <li>Complete a project for a YSWS program</li>
              <li>Goal is 4+ active participants to meet this criterion</li>
              <li><strong>Fast Track A:</strong> Clubs that have already completed a YSWS project in the past 6 months</li>
              <li><strong>Fast Track B:</strong> Club leaders who organized an event or hackathon that produced successful ships</li>
              <li>An onboarding call is required to activate the full Level 2 benefits</li>
            </Box>

            <Text sx={{ fontWeight: 'bold', mb: 2, fontSize: 2 }}>Perks and Resources</Text>
            <Box as="ul" sx={{ pl: 0, fontSize: 1, listStyle: 'none', textAlign: 'center' }}>
              <li>Leader newsletter</li>
              <li>Ability to place sticker orders</li>
              <li>Monthly club mail sent to leaders</li>
              <li>Packages include program fliers, stickers, and other items to promote programs and assist the club</li>
            </Box>
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

export default StoriesPage

