// activities page with clickable cards :3

import React from 'react'
import { Grid, Card, Heading, Text, Box, Button } from 'theme-ui'
import PageLayout from '../components/page-layout'
import Section from '../components/section'
import FeatureCard from '../components/feature-card'
import Icon from '../components/icon'
import { activities, pageMetadata } from '../lib/content-config'

const ActivitiesPage: React.FC = () => (
  <PageLayout {...pageMetadata.activities}>
    <Section
      eyebrow="Beyond meetings"
      title="Activities that"
      titleHighlight="inspire"
      highlightColor="purple"
      description="Hack Clubs aren't just weekly meetings. We organize hackathons, ship projects together, and create opportunities for teenagers to showcase their work to the world."
    >
      {/* responsive grid layout */}
      <Grid columns={[1, null, 2]} gap={[4, 5]} sx={{ mt: 4 }}>
        {/* hackathons card */}
        <Card 
          {...({
            as: "a",
            href: "https://hackathons.hackclub.com",
            target: "_blank",
            rel: "noopener"
          } as any)}
          sx={{ 
            p: 4, 
            textAlign: 'center',
            textDecoration: 'none',
            color: 'text',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
            }
          }}
        >
          <Box sx={{
            bg: 'cyan',
            borderRadius: '50%',
            p: 3,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3
          }}>
            <Icon glyph="bolt" size={32} sx={{ color: 'white !important' }} />
          </Box>
          <Heading as="h4" sx={{ fontSize: [2, 3], mb: 2, color: 'cyan' }}>Hackathons</Heading>
          <Text sx={{ fontSize: [1, 2] }}>
            Weekend-long coding events where students build projects, learn new skills, and compete for prizes.
            Hack Club organizes events like Assemble (our flagship hackathon in San Francisco) and supports
            local hackathons worldwide with funding and resources.
          </Text>
        </Card>

        {/* bank card */}
        <Card 
          {...({
            as: "a",
            href: "https://hcb.hackclub.com",
            target: "_blank",
            rel: "noopener"
          } as any)}
          sx={{ 
            p: 4, 
            textAlign: 'center',
            textDecoration: 'none',
            color: 'text',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
            }
          }}
        >
          <Box sx={{
            bg: 'green',
            borderRadius: '50%',
            p: 3,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3
          }}>
            <Icon glyph="event-code" size={32} sx={{ color: 'white !important' }} />
          </Box>
          <Heading as="h4" sx={{ fontSize: [2, 3], mb: 2, color: 'green' }}>Hack Club Bank</Heading>
          <Text sx={{ fontSize: [1, 2] }}>
            A fiscal sponsorship platform that has processed over $10M for teenage hackers.
            Clubs can receive donations, pay for events, and manage finances transparently
            through our banking platform designed specifically for young people.
          </Text>
        </Card>

        {/* workshops card :3 */}
        <Card 
          {...({
            as: "a",
            href: "https://workshops.hackclub.com",
            target: "_blank",
            rel: "noopener"
          } as any)}
          sx={{ 
            p: 4, 
            textAlign: 'center',
            textDecoration: 'none',
            color: 'text',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
            }
          }}
        >
          <Box sx={{
            bg: 'orange',
            borderRadius: '50%',
            p: 3,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3
          }}>
            <Icon glyph="welcome" size={32} sx={{ color: 'white !important' }} />
          </Box>
          <Heading as="h4" sx={{ fontSize: [2, 3], mb: 2, color: 'orange' }}>Workshops & Jams</Heading>
          <Text sx={{ fontSize: [1, 2] }}>
            Self-paced coding tutorials and collaborative coding challenges. From building
            your first website to creating AI projects, our workshops help you learn by
            building real projects you can share with friends.
          </Text>
        </Card>

        {/* slack card */}
        <Card 
          {...({
            as: "a",
            href: "https://hackclub.com/slack",
            target: "_blank",
            rel: "noopener"
          } as any)}
          sx={{ 
            p: 4, 
            textAlign: 'center',
            textDecoration: 'none',
            color: 'text',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
            }
          }}
        >
          <Box sx={{
            bg: 'purple',
            borderRadius: '50%',
            p: 3,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3
          }}>
            <Icon glyph="star-fill" size={32} sx={{ color: 'white !important' }} />
          </Box>
          <Heading as="h4" sx={{ fontSize: [2, 3], mb: 2, color: 'purple' }}>Slack Community</Heading>
          <Text sx={{ fontSize: [1, 2] }}>
            Join 13,000+ teenagers from around the world in our Slack workspace. Get help
            with code, share projects, find collaborators, and connect with like-minded
            peers who are building the future.
          </Text>
        </Card>

        {/* sprig card :3 */}
        <Card 
          {...({
            as: "a",
            href: "https://sprig.hackclub.com",
            target: "_blank",
            rel: "noopener"
          } as any)}
          sx={{ 
            p: 4, 
            textAlign: 'center',
            textDecoration: 'none',
            color: 'text',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
            }
          }}
        >
          <Box sx={{
            bg: 'red',
            borderRadius: '50%',
            p: 3,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3
          }}>
            <Icon glyph="idea" size={32} sx={{ color: 'white !important' }} />
          </Box>
          <Heading as="h4" sx={{ fontSize: [2, 3], mb: 2, color: 'red' }}>Sprig Game Console</Heading>
          <Text sx={{ fontSize: [1, 2] }}>
            Build games in JavaScript and get a free handheld game console! Sprig is our
            game development platform where you can create games in the browser and receive
            a physical device to play them on.
          </Text>
        </Card>

        {/* blueprint card */}
        <Card 
          {...({
            as: "a",
            href: "https://blueprint.hackclub.com",
            target: "_blank",
            rel: "noopener"
          } as any)}
          sx={{ 
            p: 4, 
            textAlign: 'center',
            textDecoration: 'none',
            color: 'text',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
            }
          }}
        >
          <Box sx={{
            bg: 'blue',
            borderRadius: '50%',
            p: 3,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3
          }}>
            <Icon glyph="sam" size={32} sx={{ color: 'white !important' }} />
          </Box>
          <Heading as="h4" sx={{ fontSize: [2, 3], mb: 2, color: 'blue' }}>Blueprint & PCB Design</Heading>
          <Text sx={{ fontSize: [1, 2] }}>
            Design your own printed circuit board (PCB) and get $100 to manufacture it!
            Blueprint teaches you electronics and hardware design, from LEDs and sensors
            to complex microcontroller projects.
          </Text>
        </Card>
      </Grid>
      
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
    </Section>
  </PageLayout>
)

export default ActivitiesPage

