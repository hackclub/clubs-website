import React from 'react'
import { Badge, Box, Button, Card, Container, Grid, Heading, Link, Text } from 'theme-ui'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import Footer from '../components/footer'

const ClubEssentialsPage: React.FC = () => (
  <>
    <Meta
      as={Head}
      title="Club Essentials - Hack Club"
      description="Learn what makes a great Hack Club and how to run successful meetings."
    />

    <Box as="section" sx={{ py: [4, 5], bg: 'background', color: 'text' }}>
      <Container>
        <Text as="p" variant="eyebrow">
          Club essentials
        </Text>
        <Heading as="h2" variant="title" sx={{ mb: 4 }}>
          What makes a{' '}
          <Text
            as="span"
            sx={{
              borderRadius: 'default',
              px: 2,
              mx: [-2, 0],
              whiteSpace: 'nowrap',
              color: 'background',
              bg: 'red'
            }}
          >
            great club
          </Text>
          ?
        </Heading>
        
        <Box sx={{ 
          mb: 5, 
          p: [4, 5], 
          bg: 'elevated', 
          borderRadius: 'default',
          border: '2px solid',
          borderColor: 'primary'
        }}>
          <Heading as="h3" variant="headline" sx={{ mb: 3, color: 'primary' }}>
            Running a Great and Effective Club
          </Heading>
          <Box sx={{ 
            pl: 4, 
            borderLeft: '4px solid',
            borderColor: 'primary',
            fontStyle: 'italic'
          }}>
            <Text sx={{ fontSize: [2, 3], lineHeight: 1.6, mb: 3 }}>
              "Running a good club is mainly about helping your members complete projects. Hack Club helps with this by giving premade workshops with instructions, as well as food to motivate the club members! I also like to structure the meetings around the members and letting them show what they made!"
            </Text>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Link 
                href="https://hackclub.slack.com/team/U08RJ1PEM7X"
                target="_blank"
                rel="noopener"
                sx={{ 
                  fontSize: [3, 4], 
                  fontWeight: 'bold'
                }}
              >
                Nova Harrington
              </Link>
              <Text sx={{ fontSize: [1, 2], color: 'muted' }}>
                Leader of the Hillcrest Hack Club
              </Text>
            </Box>
          </Box>
        </Box>

        <Grid columns={[1, null, 2]} gap={[4, 5]} sx={{ mb: 4 }}>
          <Box>
            <Heading as="h3" variant="headline" sx={{ mb: 3 }}>
              The Meeting Formula
            </Heading>
            <Box as="ol" sx={{ pl: 0, listStyle: 'none' }}>
              <Box as="li" sx={{ mb: 3, display: 'flex', alignItems: 'flex-start' }}>
                <Text sx={{ color: 'blue', mr: 3, fontSize: 2, fontWeight: 'bold', minWidth: '24px' }}>1</Text>
                <Text>
                  <Text as="span" sx={{ fontWeight: 'bold' }}>Arrive & build (5-10 minutes):</Text> Start with a brief demo or mini-workshop. 
                  Show something cool you built, introduce a new tool, or walk through a coding concept. 
                  Keep it short and inspiring to get everyone excited to create.
                </Text>
              </Box>
              <Box as="li" sx={{ mb: 3, display: 'flex', alignItems: 'flex-start' }}>
                <Text sx={{ color: 'orange', mr: 3, fontSize: 2, fontWeight: 'bold', minWidth: '24px' }}>2</Text>
                <Text>
                  <Text as="span" sx={{ fontWeight: 'bold' }}>Everyone gets hacking (40-45 minutes):</Text> The bulk of the meeting is 
                  unstructured project time. Members work on personal projects, follow workshops, 
                  collaborate with others, or start something new. Leaders circulate to help and encourage.
                </Text>
              </Box>
              <Box as="li" sx={{ mb: 3, display: 'flex', alignItems: 'flex-start' }}>
                <Text sx={{ color: 'green', mr: 3, fontSize: 2, fontWeight: 'bold', minWidth: '24px' }}>3</Text>
                <Text>
                  <Text as="span" sx={{ fontWeight: 'bold' }}>Demo time (5-10 minutes):</Text> End by having members share what they 
                  worked on, even if it's broken or incomplete. Celebrate progress, ask questions, 
                  and build excitement for next week. This builds confidence and community.
                </Text>
              </Box>
            </Box>
          </Box>
          
          <Box>
            <Heading as="h3" variant="headline" sx={{ mb: 3 }}>
              Creating the Environment
            </Heading>
            <Box as="ul" sx={{ pl: 4, listStyle: 'disc' }}>
              <Box as="li" sx={{ mb: 3 }}>
                <Text>
                  <Text as="span" sx={{ fontWeight: 'bold' }}>Inclusive:</Text> Welcome everyone, regardless of experience level
                </Text>
              </Box>
              <Box as="li" sx={{ mb: 3 }}>
                <Text>
                  <Text as="span" sx={{ fontWeight: 'bold' }}>Project-based:</Text> Learn by building real things, not through lectures
                </Text>
              </Box>
              <Box as="li" sx={{ mb: 3 }}>
                <Text>
                  <Text as="span" sx={{ fontWeight: 'bold' }}>Collaborative:</Text> Help each other, share knowledge, celebrate wins
                </Text>
              </Box>
            </Box>
          </Box>
        </Grid>
        
        <Box sx={{ mt: 4 }}>
          <Button as="a" href="/" variant="outline">
            ← Back to Home
          </Button>
        </Box>
      </Container>
    </Box>

    <Footer />
  </>
)

export default ClubEssentialsPage

