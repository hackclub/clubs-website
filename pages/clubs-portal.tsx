import React from 'react'
import { Badge, Box, Button, Container, Heading, Text } from 'theme-ui'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import Footer from '../components/footer'

const ClubsPortal = () => {
  return (
    <>
      <Meta
        as={Head}
        title="Clubs Portal - Hack Club"
        description="Find YSWS programs and workshops for your Hack Club"
      />
      <Box
        sx={{
          bg: 'background',
          minHeight: '100vh',
          pt: [5, 6]
        }}
      >
        <Container sx={{ maxWidth: '900px', mx: 'auto', textAlign: 'center' }}>
          <Box sx={{ mb: [5, 6] }}>
            <Badge
              sx={{
                bg: '#ec3750',
                color: 'white',
                px: 3,
                py: 2,
                fontSize: 1,
                mb: 3,
                display: 'inline-block'
              }}
            >
              For Club Leaders
            </Badge>
            <Heading
              as="h1"
              sx={{
                fontSize: [5, 6, 7],
                fontWeight: 800,
                mb: 3,
                color: 'text'
              }}
            >
              Clubs Portal
            </Heading>
            <Text
              sx={{
                fontSize: [2, 3],
                color: 'text',
                maxWidth: '700px',
                mx: 'auto',
                mb: 3,
                lineHeight: 1.8,
                fontWeight: 500,
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
              }}
            >
              The Clubs Portal is the place where club leaders can easily find{' '}
              <Text as="span" sx={{ color: '#33d6a6', fontWeight: 700 }}>
                YSWS's (You Ship, We Ship)
              </Text>{' '}
              and explore{' '}
              <Text as="span" sx={{ color: '#338eda', fontWeight: 700 }}>
                workshops
              </Text>{' '}
              they can run with their Hack Club. It serves as a central hub that helps leaders access the activities and resources they need to support and grow their clubs.
            </Text>
            <Text
              sx={{
                fontSize: [2, 3],
                color: 'text',
                maxWidth: '700px',
                mx: 'auto',
                mb: 3,
                lineHeight: 1.8,
                fontWeight: 500,
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
              }}
            >
              <Text as="span" sx={{ color: '#33d6a6', fontWeight: 700 }}>
                YSWS programs
              </Text>{' '}
              reward club members for shipping projects with{' '}
              <Text as="span" sx={{ color: '#ec3750', fontWeight: 600 }}>
                hardware, stickers, and other prizes
              </Text>
              . The{' '}
              <Text as="span" sx={{ color: '#338eda', fontWeight: 700 }}>
                workshop library
              </Text>{' '}
              contains hundreds of coding tutorials covering everything from basic HTML to advanced full-stack development.
            </Text>
            <Text
              sx={{
                fontSize: [2, 3],
                color: 'text',
                maxWidth: '700px',
                mx: 'auto',
                mb: 4,
                lineHeight: 1.8,
                fontWeight: 500,
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
              }}
            >
              Whether you're{' '}
              <Text as="span" sx={{ color: '#ff8c37', fontWeight: 700 }}>
                planning your next meeting
              </Text>{' '}
              or looking for{' '}
              <Text as="span" sx={{ color: '#8492a6', fontWeight: 700 }}>
                project ideas
              </Text>
              , the Clubs Portal has everything you need in one place.
            </Text>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: [5, 6] }}>
              <Button
                {...({
                  as: "a",
                  href: "https://leaders.hackclub.com/",
                  target: "_blank",
                  rel: "noopener"
                } as any)}
                sx={{
                  bg: '#ec3750',
                  color: 'white',
                  px: 5,
                  py: 3,
                  fontSize: 3,
                  fontWeight: 700,
                  borderRadius: '12px',
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 20px rgba(236, 55, 80, 0.4)'
                  }
                }}
              >
                Open Clubs Portal →
              </Button>
            </Box>
          </Box>
        </Container>

        <Footer />
      </Box>
    </>
  )
}

export default ClubsPortal
