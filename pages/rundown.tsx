import React from 'react'
import { Badge, Box, Button, Card, Container, Grid, Heading, Link, Text } from 'theme-ui'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import Footer from '../components/footer'

const RundownPage: React.FC = () => (
  <>
    <Meta
      as={Head}
      title="The Rundown - Hack Club"
      description="Learn how Hack Club works and what makes our coding clubs special."
    />

    <Box as="section" sx={{ py: [4, 5], color: 'text' }}>
      <Container>
        <Text as="p" variant="eyebrow">
          The rundown
        </Text>
        <Heading as="h2" variant="title" sx={{
          fontSize: [5, 6],
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          backgroundSize: '200% 200%',
          animation: 'text-gradient 4s ease infinite',
          '@keyframes text-gradient': {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' }
          }
        }}>
          Clubs discovering the{' '}
          <Text
            as="span"
            sx={{
              borderRadius: '12px',
              px: 3,
              py: 1,
              mx: [-2, 0],
              whiteSpace: 'nowrap',
              color: 'white',
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              boxShadow: '0 4px 15px rgba(251, 191, 36, 0.4)',
              display: 'inline-block',
              transform: 'rotate(-1deg)'
            }}
          >
            joy of code
          </Text>
          .
        </Heading>
        <Text as="p" variant="lead" sx={{ maxWidth: 'copyPlus' }}>
          Hack Club is a global nonprofit network of high school coding clubs. We're not a
          traditional computer science class—we're a community where teenagers learn to code
          by building real projects they're excited about. With over 400 clubs worldwide,
          we've created a new model for CS education that's entirely student-led, project-based,
          and designed to help young people become the technical leaders of tomorrow.
        </Text>

        <Box sx={{ mt: 4, p: 4, bg: 'sunken', borderRadius: 'default' }}>
          <Heading as="h3" variant="headline" sx={{ mb: 3 }}>What makes us different?</Heading>
          <Grid columns={[1, null, 2]} gap={4}>
            <Box>
              <Heading as="h4" sx={{ fontSize: 2, mb: 2, color: 'blue' }}>No curriculum</Heading>
              <Text sx={{ mb: 3 }}>
                Instead of following a set curriculum, members choose what they want to learn
                and build. Want to make a game? Build a website? Create an app? You decide.
              </Text>
            </Box>
            <Box>
              <Heading as="h4" sx={{ fontSize: 2, mb: 2, color: 'green' }}>Student-led</Heading>
              <Text sx={{ mb: 3 }}>
                Clubs are run by students, for students. Adult sponsors provide support,
                but teenagers are in charge of their own learning journey.
              </Text>
            </Box>
            <Box>
              <Heading as="h4" sx={{ fontSize: 2, mb: 2, color: 'orange' }}>Project-based</Heading>
              <Text sx={{ mb: 3 }}>
                Learning happens through building. Members work on personal projects,
                collaborate with peers, and share their creations with the community.
              </Text>
            </Box>
            <Box>
              <Heading as="h4" sx={{ fontSize: 2, mb: 2, color: 'purple' }}>Global community</Heading>
              <Text>
                Connect with 13,000+ teenagers worldwide through our Slack, attend hackathons,
                and be part of a movement that's changing how young people learn to code.
              </Text>
            </Box>
          </Grid>
        </Box>

        <Box sx={{ mt: 5, p: 4, bg: 'elevated', borderRadius: 'default', border: '2px solid', borderColor: 'primary' }}>
          <Heading as="h3" variant="headline" sx={{ mb: 4, color: 'primary' }}>How to Start Your Club</Heading>

          <Box as="ol" sx={{ pl: 0, listStyle: 'none', '> li': { mb: 4 } }}>
            <Box as="li" sx={{ display: 'flex', gap: 3 }}>
              <Box sx={{
                bg: 'blue',
                color: 'white',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 3,
                fontWeight: 'bold',
                flexShrink: 0
              }}>
                1
              </Box>
              <Box>
                <Heading as="h4" sx={{ fontSize: 3, mb: 2, mt: 0 }}>Choose Your Club Location</Heading>
                <Text sx={{ mb: 2 }}>
                  Decide where you'll hold your club meetings. While you can run a club online, we strongly
                  recommend a physical space for better engagement and access to certain perks.
                </Text>
                <Text sx={{ fontWeight: 'bold', mb: 1 }}>Great physical locations include:</Text>
                <Box as="ul" sx={{ pl: 4, mb: 2 }}>
                  <li>Your School</li>
                  <li>A Library</li>
                  <li>A Makerspace</li>
                </Box>
                <Text sx={{ fontStyle: 'italic', color: 'muted' }}>
                  Important: Always make sure you have permission to use the chosen space!
                </Text>
              </Box>
            </Box>

            <Box as="li" sx={{ display: 'flex', gap: 3 }}>
              <Box sx={{
                bg: 'green',
                color: 'white',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 3,
                fontWeight: 'bold',
                flexShrink: 0
              }}>
                2
              </Box>
              <Box>
                <Heading as="h4" sx={{ fontSize: 3, mb: 2, mt: 0 }}>Apply Online</Heading>
                <Text>
                  Submit your application at{' '}
                  <Link href="https://apply.hackclub.com" target="_blank" rel="noopener">
                    apply.hackclub.com
                  </Link>
                  . You should receive a response from the team within 24 hours.
                </Text>
              </Box>
            </Box>

            <Box as="li" sx={{ display: 'flex', gap: 3 }}>
              <Box sx={{
                bg: 'orange',
                color: 'white',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 3,
                fontWeight: 'bold',
                flexShrink: 0
              }}>
                3
              </Box>
              <Box>
                <Heading as="h4" sx={{ fontSize: 3, mb: 2, mt: 0 }}>Schedule Your Onboarding</Heading>
                <Text>
                  Once your application is approved, the next step is to schedule your onboarding call
                  with a member of the Clubs Team. They'll walk you through everything you need to know!
                </Text>
              </Box>
            </Box>

            <Box as="li" sx={{ display: 'flex', gap: 3 }}>
              <Box sx={{
                bg: 'purple',
                color: 'white',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 3,
                fontWeight: 'bold',
                flexShrink: 0
              }}>
                4
              </Box>
              <Box>
                <Heading as="h4" sx={{ fontSize: 3, mb: 2, mt: 0 }}>Start Clubbing</Heading>
                <Text>
                  Once you finish this process, you are a club leader! Register your new club on the{' '}
                  <Link href="https://dashboard.hackclub.com" target="_blank" rel="noopener">
                    club dashboard
                  </Link>
                  , check out our{' '}
                  <Link href="https://workshops.hackclub.com" target="_blank" rel="noopener">
                    workshops
                  </Link>
                  {' '}and{' '}
                  <Link href="https://jams.hackclub.com" target="_blank" rel="noopener">
                    jams
                  </Link>
                  {' '}for fun activities you can do with your club to learn and grow! We recommend you use{' '}
                  <Link href="https://spaces.hackclub.com" target="_blank" rel="noopener">
                    Spaces
                  </Link>
                  {' '}to make projects with your club; it's web-based and will work on most devices. Make sure
                  all of your members join the{' '}
                  <Link href="https://hackclub.com/slack" target="_blank" rel="noopener">
                    Hack Club Slack
                  </Link>
                  {' '}to access a large community of fellow hackers!
                </Text>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button
              {...({
                as: "a",
                href: "https://apply.hackclub.com",
                target: "_blank",
                rel: "noopener"
              } as any)}
              sx={{
                bg: 'primary',
                color: 'white',
                fontSize: 3,
                fontWeight: 600,
                py: 3,
                px: 6,
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                display: 'inline-block',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
                }
              }}
            >
              Start Your Club Today →
            </Button>
          </Box>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Button
            {...({
              as: "a",
              href: "/",
              variant: "outline"
            } as any)}
          >
            ← Back to Home
          </Button>
        </Box>
      </Container>
    </Box>

    <Footer />
  </>
)

export default RundownPage

