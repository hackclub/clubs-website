import React from 'react'
import { Badge, Box, Button, Card, Container, Grid, Heading, Link, Text } from 'theme-ui'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import Icon from '../components/icon'
import Footer from '../components/footer'

const ResourcesPage: React.FC = () => (
  <>
    <Meta
      as={Head}
      title="Resources - Hack Club"
      description="Everything you need to run an amazing Hack Club"
    />

    <Box as="section" sx={{ py: [5, 6], bg: 'background', color: 'text' }}>
      <Container sx={{ maxWidth: '1000px', mx: 'auto' }}>
        <Box sx={{ textAlign: 'center', mb: [5, 6] }}>
          <Badge
            sx={{
              bg: 'primary',
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
          <Heading as="h1" sx={{ fontSize: [5, 6, 7], fontWeight: 800, mb: 3 }}>
            Resources
          </Heading>
          <Text sx={{ fontSize: [2, 3], color: 'muted', maxWidth: '700px', mx: 'auto' }}>
            Everything you need to run an amazing Hack Club
          </Text>
        </Box>

        <Grid columns={[1, 2]} gap={4} sx={{ mb: [5, 6] }}>
          <Card
            sx={{
              p: 4,
              borderRadius: '16px',
              border: '1px solid',
              borderColor: 'muted',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                borderColor: 'primary'
              }
            }}
          >
            <Box
              sx={{
                bg: '#ec3750',
                borderRadius: '12px',
                p: 3,
                mb: 3,
                width: 'fit-content'
              }}
            >
              <Icon glyph="analytics" size={32} sx={{ color: 'white !important' }} />
            </Box>
            <Heading as="h3" sx={{ fontSize: 3, mb: 2 }}>
              Leaders Portal
            </Heading>
            <Text sx={{ color: 'muted', mb: 3, lineHeight: 1.6 }}>
              Check your club level, track meetings, access workshops, and connect with other leaders.
            </Text>
            <Button
              {...({
                as: "a",
                href: "https://leaders.hackclub.com",
                target: "_blank",
                rel: "noopener"
              } as any)}
              sx={{
                bg: '#ec3750',
                color: 'white',
                px: 4,
                py: 2,
                fontSize: 2,
                fontWeight: 600,
                borderRadius: '8px',
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(236, 55, 80, 0.4)'
                }
              }}
            >
              Open Portal →
            </Button>
          </Card>

          <Card
            sx={{
              p: 4,
              borderRadius: '16px',
              border: '1px solid',
              borderColor: 'muted',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                borderColor: 'primary'
              }
            }}
          >
            <Box
              sx={{
                bg: '#33d6a6',
                borderRadius: '12px',
                p: 3,
                mb: 3,
                width: 'fit-content'
              }}
            >
              <Icon glyph="package" size={32} sx={{ color: 'white !important' }} />
            </Box>
            <Heading as="h3" sx={{ fontSize: 3, mb: 2 }}>
              YSWS Programs
            </Heading>
            <Text sx={{ color: 'muted', mb: 3, lineHeight: 1.6 }}>
              You Ship, We Ship - get your club members to ship projects and earn awesome rewards.
            </Text>
            <Button
              {...({
                as: "a",
                href: "https://leaders.hackclub.com",
                target: "_blank",
                rel: "noopener"
              } as any)}
              sx={{
                bg: '#33d6a6',
                color: 'white',
                px: 4,
                py: 2,
                fontSize: 2,
                fontWeight: 600,
                borderRadius: '8px',
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(51, 214, 166, 0.4)'
                }
              }}
            >
              View Programs →
            </Button>
          </Card>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: [5, 6] }}>
          <Heading as="h2" sx={{ fontSize: [4, 5], fontWeight: 700, mb: 4 }}>
            More Resources
          </Heading>
          <Grid columns={[1, 2, 3]} gap={3}>
            <Card
              sx={{
                p: 3,
                borderRadius: '12px',
                border: '1px solid',
                borderColor: 'muted',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  borderColor: 'primary'
                }
              }}
            >
              <Box
                sx={{
                  bg: '#338eda',
                  borderRadius: '12px',
                  p: 3,
                  mb: 2,
                  width: 'fit-content',
                  mx: 'auto'
                }}
              >
                <Icon glyph="code" size={24} sx={{ color: 'white !important' }} />
              </Box>
              <Heading as="h4" sx={{ fontSize: 2, mb: 2 }}>
                Workshops
              </Heading>
              <Text sx={{ fontSize: 1, color: 'muted', mb: 2 }}>
                100+ coding tutorials
              </Text>
              <Link
                href="https://workshops.hackclub.com"
                target="_blank"
                sx={{ color: 'primary', fontWeight: 600, fontSize: 1 }}
              >
                Browse →
              </Link>
            </Card>

            <Card
              sx={{
                p: 3,
                borderRadius: '12px',
                border: '1px solid',
                borderColor: 'muted',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  borderColor: 'primary'
                }
              }}
            >
              <Box
                sx={{
                  bg: '#5d114c',
                  borderRadius: '12px',
                  p: 3,
                  mb: 2,
                  width: 'fit-content',
                  mx: 'auto'
                }}
              >
                <Icon glyph="slack-fill" size={24} sx={{ color: 'white !important' }} />
              </Box>
              <Heading as="h4" sx={{ fontSize: 2, mb: 2 }}>
                Slack Community
              </Heading>
              <Text sx={{ fontSize: 1, color: 'muted', mb: 2 }}>
                Connect with leaders
              </Text>
              <Link
                href="https://hackclub.com/slack"
                target="_blank"
                sx={{ color: 'primary', fontWeight: 600, fontSize: 1 }}
              >
                Join →
              </Link>
            </Card>

            <Card
              sx={{
                p: 3,
                borderRadius: '12px',
                border: '1px solid',
                borderColor: 'muted',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  borderColor: 'primary'
                }
              }}
            >
              <Box
                sx={{
                  bg: '#ff8c37',
                  borderRadius: '12px',
                  p: 3,
                  mb: 2,
                  width: 'fit-content',
                  mx: 'auto'
                }}
              >
                <Icon glyph="bank-account" size={24} sx={{ color: 'white !important' }} />
              </Box>
              <Heading as="h4" sx={{ fontSize: 2, mb: 2 }}>
                HCB
              </Heading>
              <Text sx={{ fontSize: 1, color: 'muted', mb: 2 }}>
                Manage club finances
              </Text>
              <Link
                href="https://hcb.hackclub.com"
                target="_blank"
                sx={{ color: 'primary', fontWeight: 600, fontSize: 1 }}
              >
                Open →
              </Link>
            </Card>
          </Grid>
        </Box>

        <Box sx={{ mt: [5, 6], textAlign: 'center' }}>
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

export default ResourcesPage
