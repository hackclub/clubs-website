import React from 'react'
import { Badge, Box, Button, Card, Container, Grid, Heading, Link, Text } from 'theme-ui'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import Footer from '../components/footer'

const SuccessStoriesPage: React.FC = () => (
  <>
    <Meta
      as={Head}
      title="Success Stories - Hack Club"
      description="See the amazing impact Hack Clubs are making around the world."
    />

    <Box as="section" sx={{ py: [4, 5], bg: 'sunken', color: 'text' }}>
      <Container>
        <Text as="p" variant="eyebrow">
          Success stories
        </Text>
        <Heading as="h2" variant="title" sx={{ mb: 4 }}>
          Clubs making an{' '}
          <Text
            as="span"
            sx={{
              borderRadius: 'default',
              px: 2,
              mx: [-2, 0],
              whiteSpace: 'nowrap',
              color: 'background',
              bg: 'green'
            }}
          >
            impact
          </Text>
          .
        </Heading>
        <Grid columns={[1, null, 3]} gap={[3, 4]} sx={{ mb: 4 }}>
          <Card sx={{ p: 3 }}>
            <Heading as="h3" sx={{ fontSize: 3, mb: 2, color: 'blue' }}>
              400+ Active Clubs
            </Heading>
            <Text>
              From Vermont to Singapore to Nigeria, spanning 6 continents and 50+ countries. 
              Our clubs meet in high schools, libraries, community centers, and online.
            </Text>
          </Card>
          <Card sx={{ p: 3 }}>
            <Heading as="h3" sx={{ fontSize: 3, mb: 2, color: 'green' }}>
              13,000+ Community Members
            </Heading>
            <Text>
              Teenagers from around the world collaborating, learning, and building together 
              in our Slack workspace and at in-person events.
            </Text>
          </Card>
          <Card sx={{ p: 3 }}>
            <Heading as="h3" sx={{ fontSize: 3, mb: 2, color: 'orange' }}>
              $10M+ Processed
            </Heading>
            <Text>
              Through Hack Club Bank, we've helped teenagers manage over $10 million for 
              hackathons, projects, and nonprofit initiatives.
            </Text>
          </Card>
        </Grid>
        
        <Box sx={{ mt: 5, p: 4, bg: 'background', borderRadius: 'default' }}>
          <Heading as="h3" variant="headline" sx={{ mb: 4, textAlign: 'center' }}>Real Stories from Our Community</Heading>
          <Grid columns={[1, null, 2]} gap={4}>
            <Card sx={{ p: 4 }}>
              <Text sx={{ fontStyle: 'italic', mb: 3 }}>
                "Hack Club gave me the confidence to start my own company. The community 
                taught me that age doesn't matter—if you have an idea and the drive to 
                build it, you can make it happen."
              </Text>
              <Text sx={{ fontWeight: 'bold', color: 'blue' }}>
                — Zach Latta, Founder of Hack Club
              </Text>
            </Card>
            <Card sx={{ p: 4 }}>
              <Text sx={{ fontStyle: 'italic', mb: 3 }}>
                "Through Hack Club, I learned to code, built my first app, and discovered 
                a passion for technology that led me to study computer science at MIT."
              </Text>
              <Text sx={{ fontWeight: 'bold', color: 'green' }}>
                — Hack Club Alumni, MIT '24
              </Text>
            </Card>
            <Card sx={{ p: 4 }}>
              <Text sx={{ fontStyle: 'italic', mb: 3 }}>
                "Our Hack Club organized the first hackathon in our city. Over 200 students 
                participated, and now we have multiple tech clubs in schools across the district."
              </Text>
              <Text sx={{ fontWeight: 'bold', color: 'orange' }}>
                — Club Leader, Texas
              </Text>
            </Card>
            <Card sx={{ p: 4 }}>
              <Text sx={{ fontStyle: 'italic', mb: 3 }}>
                "I joined Hack Club as a complete beginner. Two years later, I've built 
                multiple apps, contributed to open source projects, and landed an internship 
                at a tech startup."
              </Text>
              <Text sx={{ fontWeight: 'bold', color: 'purple' }}>
                — Club Member, California
              </Text>
            </Card>
          </Grid>
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

export default SuccessStoriesPage

