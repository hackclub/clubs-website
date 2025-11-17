import React from 'react'
import { Badge, Box, Button, Card, Container, Grid, Heading, Link, Text } from 'theme-ui'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import BGImg from '../components/background-image'
import Footer from '../components/footer'

const PhilosophyPage: React.FC = () => (
  <>
    <Meta
      as={Head}
      title="Our Philosophy - Hack Club"
      description="By the students, for the students. Learn about Hack Club's student-led approach."
    />

    <Box
      as="section"
      sx={{ py: [4, 5, 6], color: 'text' }}
    >
      <Container
        sx={{
          maxWidth: [null, 'copyUltra'],
          h2: { variant: 'text.title' }
        }}
      >
        <BGImg
          src="/philosophy.jpg"
          alt="Students coding together"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: '100%',
            zIndex: -1
          }}
        />
        <Box as="header" sx={{ textAlign: [null, 'center'], pb: [4, 5] }}>
          <Text as="p" variant="eyebrow">
            ~ Welcome to the club ~
          </Text>
          <Heading as="h2" variant="title">
            By the students, for the students.
          </Heading>
          <Text as="p" variant="lead" sx={{ maxWidth: 'copy', mx: 'auto' }}>
            We believe teenagers are capable of extraordinary things when given the right 
            environment and support. That's why every Hack Club is student-led—no teachers 
            lecturing, no rigid curriculum, no grades. Just young people learning to code 
            by building things they care about, supported by a global community that 
            believes in their potential.
          </Text>
        </Box>
        
        <Box sx={{ mt: 5, p: 4, bg: 'sunken', borderRadius: 'default' }}>
          <Heading as="h3" variant="headline" sx={{ mb: 3, textAlign: 'center' }}>Our Core Beliefs</Heading>
          <Grid columns={[1, null, 2]} gap={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Heading as="h4" sx={{ fontSize: 2, mb: 2, color: 'blue' }}>Teenagers can build the future</Heading>
              <Text>
                Young people have fresh perspectives, boundless creativity, and the energy to 
                tackle big problems. We've seen our members build apps with millions of users, 
                start companies, and create solutions to real-world challenges.
              </Text>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Heading as="h4" sx={{ fontSize: 2, mb: 2, color: 'green' }}>Learning by doing works</Heading>
              <Text>
                The best way to learn to code isn't through lectures or textbooks—it's by 
                building real projects you're excited about. When you're passionate about 
                what you're creating, learning becomes natural and fun.
              </Text>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Heading as="h4" sx={{ fontSize: 2, mb: 2, color: 'orange' }}>Community accelerates growth</Heading>
              <Text>
                When you're surrounded by peers who are also building and creating, you push 
                each other to do better. Our global community provides support, inspiration, 
                and opportunities you can't find anywhere else.
              </Text>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Heading as="h4" sx={{ fontSize: 2, mb: 2, color: 'purple' }}>Diversity makes us stronger</Heading>
              <Text>
                The best solutions come from diverse perspectives. We're committed to creating 
                an inclusive environment where everyone feels welcome, regardless of their 
                background, experience level, or identity.
              </Text>
            </Box>
          </Grid>
        </Box>
        
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

export default PhilosophyPage

