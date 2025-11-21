import React from 'react'
import { Badge, Box, Button, Card, Container, Grid, Heading, Link, Text } from 'theme-ui'
import styled from '@emotion/styled'
import Head from 'next/head'
import NextLink from 'next/link'
import Meta from '@hackclub/meta'

import Icon from '../components/icon'
import BGImg from '../components/background-image'

import SlideDown from '../components/slide-down'
import FadeIn from '../components/fade-in'
import Footer from '../components/footer'
import Slack from '../components/slack'
import Stage from '../components/stage'

let Highlight = styled(Text)`
  color: inherit;
  border-radius: 1em 0 1em 0;
  background: linear-gradient(
    -100deg,
    rgba(250, 247, 133, 0.33),
    rgba(250, 247, 133, 0.66) 95%,
    rgba(250, 247, 133, 0.1)
  );
`
Highlight = Highlight.withComponent('mark')

// Simple card component
const SimpleCard = styled(Card)`
  border-radius: 12px;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`

// Ultra-cool neon button with pulse effect
const NeonButton = styled(Button)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.6s;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #667eea, #764ba2, #667eea);
    border-radius: 50px;
    z-index: -1;
    animation: rotate 4s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 
      0 20px 40px rgba(102, 126, 234, 0.4),
      0 0 20px rgba(102, 126, 234, 0.3);
    
    &::before {
      left: 100%;
    }
    
    &::after {
      opacity: 1;
    }
  }
`

// Cool floating particles with glow effect
const FloatingParticle = styled(Box)`
  position: absolute;
  opacity: 0.6;
  filter: blur(0.5px);
  animation: particle-float 8s ease-in-out infinite;
  
  @keyframes particle-float {
    0%, 100% { 
      transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
      opacity: 0.6;
    }
    25% { 
      transform: translateY(-30px) translateX(10px) rotate(90deg) scale(1.2);
      opacity: 0.8;
    }
    50% { 
      transform: translateY(-20px) translateX(-15px) rotate(180deg) scale(0.8);
      opacity: 0.4;
    }
    75% { 
      transform: translateY(-40px) translateX(20px) rotate(270deg) scale(1.1);
      opacity: 0.7;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: radial-gradient(circle, currentColor 0%, transparent 70%);
    opacity: 0.3;
    border-radius: 50%;
  }
`

// Animated background grid
const CyberGrid = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.03;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-move 20s linear infinite;
  
  @keyframes grid-move {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
`

interface FeatureProps {
  icon?: string
  color?: string
  name?: string
  desc?: React.ReactNode
  children?: React.ReactNode
  sx?: any
  as?: string
}

const Feature: React.FC<FeatureProps> = ({ icon, color, name, desc, children, sx }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      bg: 'background',
      p: [4, 5],
      borderRadius: '16px',
      border: '1px solid',
      borderColor: 'muted',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      maxWidth: 'none',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        borderColor: 'primary'
      },
      ...sx
    }}
  >
    {children || (
      <>
        <Box
          sx={{
            width: 'fit-content',
            bg: color,
            borderRadius: '12px',
            p: 3,
            mb: 4,
            display: 'inline-block',
            boxShadow: `0 8px 25px ${color}33`,
            '& svg': {
              color: 'white !important',
              fill: 'white !important'
            }
          }}
        >
          <Icon glyph={icon} size={32} sx={{ color: 'white !important' }} />
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Heading
            as="h3"
            sx={{
              fontSize: 3,
              fontWeight: 700,
              mb: 3,
              mt: 0,
              color: 'text',
              lineHeight: 1.3
            }}
          >
            {name}
          </Heading>
          <Text
            as="p"
            sx={{
              mt: 0,
              flex: 1,
              fontSize: 2,
              lineHeight: 1.5,
              color: 'muted',
              a: { color: 'primary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }
            }}
          >
            {desc}
          </Text>
        </Box>
      </>
    )}
  </Box>
)

const Page: React.FC = () => (
  <>
    <Meta
      as={Head}
      title="Coding / Computer Science Clubs"
      description="Hack Club is a global nonprofit network of high school makers & student-led computer science clubs where young people build the agency, the network, & the technical talent to think big & do big things in the world."
      image="/assemble.jpg"
    />
    <Head>
      <meta
        property="og:logo"
        content="/icon.svg"
      />
      <style>{`
        html {
          font-size: clamp(14px, 1vw + 0.5vh, 18px);
        }
        @media (min-width: 1920px) {
          html {
            font-size: clamp(16px, 0.8vw, 20px);
          }
        }
      `}</style>
    </Head>

    <Box
      as="header"
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        pt: 'clamp(2rem, 6vh, 4rem)',
        pb: 'clamp(2rem, 8vh, 5rem)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'clamp(90vh, 100vh, 100vh)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.08) 0%, transparent 60%)
          `,
          zIndex: 1,
          pointerEvents: 'none'
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(30deg, rgba(255, 255, 255, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(255, 255, 255, 0.03) 87.5%, rgba(255, 255, 255, 0.03)),
            linear-gradient(150deg, rgba(255, 255, 255, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(255, 255, 255, 0.03) 87.5%, rgba(255, 255, 255, 0.03))
          `,
          backgroundSize: '80px 140px',
          animation: 'pattern-move 90s linear infinite',
          zIndex: 1,
          pointerEvents: 'none'
        },
        '@keyframes pattern-move': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(80px, 140px)' }
        }
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          display: 'block',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.5)), url(/assemble.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%'
        }}
      />

      <CyberGrid />

      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: 'clamp(300px, 95vw, 1200px)',
          mx: 'auto',
          transform: 'translateX(clamp(0px, 2vw, 20px))',
          px: 'clamp(1rem, 4vw, 3rem)'
        }}
      >
        <SlideDown duration={768}>
          <Heading
            as="h1"
            sx={{
              color: 'white',
              fontSize: 'clamp(2rem, 5vw + 1rem, 6rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              mb: 'clamp(1rem, 3vh, 2.5rem)',
              textAlign: 'center',
              width: '100%',
              mx: 'auto',
              animation: 'title-glow 3s ease-in-out infinite',
              '@keyframes title-glow': {
                '0%, 100%': { textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' },
                '50%': { textShadow: '0 0 40px rgba(255, 255, 255, 0.5), 0 0 60px rgba(251, 191, 36, 0.3)' }
              }
            }}
          >
            Start a coding club.{' '}
            <Text
              as="span"
              sx={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                display: 'inline',
                animation: 'gradient-shift 3s ease infinite',
                '@keyframes gradient-shift': {
                  '0%, 100%': { filter: 'hue-rotate(0deg)' },
                  '50%': { filter: 'hue-rotate(10deg)' }
                }
              }}
            >
              Change the world.
            </Text>
          </Heading>
        </SlideDown>
        <FadeIn duration={1024}>
          <Text
            as="p"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: 'clamp(1rem, 2vw + 0.5rem, 1.75rem)',
              fontWeight: 400,
              lineHeight: 1.5,
              maxWidth: 'clamp(300px, 90vw, 700px)',
              mx: 'auto',
              mb: 'clamp(1.5rem, 4vh, 3rem)',
              textAlign: 'center',
              px: 'clamp(1rem, 3vw, 0)',
              width: '100%'
            }}
          >
            Join a global network of high school coding clubs. Get resources, community, and everything you need to build something amazing.
          </Text>
          <Box
            sx={{
              display: 'flex',
              flexDirection: ['column', 'row'],
              gap: 'clamp(1rem, 2vw, 2rem)',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              maxWidth: 'clamp(300px, 90vw, 600px)',
              mx: 'auto'
            }}
          >
            <NeonButton
              {...({
                as: "a",
                href: "https://apply.hackclub.com",
                target: "_blank",
                rel: "noopener"
              } as any)}
              sx={{
                fontSize: 'clamp(1rem, 1.5vw + 0.3rem, 1.25rem)',
                fontWeight: 700,
                py: 'clamp(1.5rem, 3.5vh, 2rem)',
                px: 'clamp(3.5rem, 7vw, 5.5rem)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: ['100%', 'auto'],
                letterSpacing: '0.02em',
                color: 'white',
                whiteSpace: 'nowrap'
              }}
            >
              Start Your Club
            </NeonButton>
            <Button
              {...({
                as: "a",
                href: "https://hackclub.com/slack/",
                target: "_blank",
                rel: "noopener"
              } as any)}
              sx={{
                bg: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                fontSize: 'clamp(1rem, 1.5vw + 0.3rem, 1.25rem)',
                fontWeight: 700,
                py: 'clamp(1.5rem, 3.5vh, 2rem)',
                px: 'clamp(3.5rem, 7vw, 5.5rem)',
                borderRadius: 'clamp(12px, 2vw, 16px)',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: ['100%', 'auto'],
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                '&:hover': {
                  bg: 'rgba(255, 255, 255, 0.2)',
                  borderColor: 'rgba(255, 255, 255, 0.6)',
                  transform: 'translateY(-3px) scale(1.02)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
                }
              }}
            >
              Join Community
            </Button>
            <Button
              {...({
                as: "a",
                href: "https://leaders.hackclub.com/",
                target: "_blank",
                rel: "noopener"
              } as any)}
              sx={{
                bg: 'rgba(236, 55, 80, 0.9)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.5rem)',
                fontWeight: 700,
                py: 'clamp(0.75rem, 2vh, 1.25rem)',
                px: 'clamp(1.5rem, 4vw, 2.5rem)',
                borderRadius: 'clamp(12px, 2vw, 16px)',
                border: '2px solid rgba(236, 55, 80, 0.6)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: ['100%', 'auto'],
                minWidth: ['100%', 'clamp(180px, 20vw, 220px)'],
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                '&:hover': {
                  bg: 'rgba(236, 55, 80, 1)',
                  borderColor: 'rgba(236, 55, 80, 0.8)',
                  transform: 'translateY(-3px) scale(1.02)',
                  boxShadow: '0 8px 25px rgba(236, 55, 80, 0.4)'
                }
              }}
            >
              Clubs Portal
            </Button>
          </Box>
        </FadeIn>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: [2, 3],
          right: [2, 3, 4],
          zIndex: 3
        }}
      >
        <Badge
          {...({
            as: "a",
            href: "https://www.youtube.com/watch?v=PnK4gzO6S3Q"
          } as any)}
          variant="pill"
          sx={{
            bg: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            opacity: 0.8,
            textDecoration: 'none',
            fontWeight: 'normal',
            ':hover': { opacity: 1 },
            transition: '0.3s ease'
          }}
          title="Photo by Kunal Botla, Hack Clubber in MA!"
        >
          Hackers at Assemble in SF
        </Badge>
      </Box>
    </Box>

    <Box as="section" sx={{ py: [4, 5, 6], bg: 'sunken', position: 'relative' }}>
      <Container sx={{ px: [2, 3], maxWidth: '1600px', mx: 'auto' }}>
        <Box sx={{ textAlign: 'center', mb: [4, 5] }}>
          <Text
            as="p"
            sx={{
              fontSize: [2, 3],
              fontWeight: 700,
              color: 'primary',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              mb: 3
            }}
          >
            The rundown
          </Text>
          <Heading
            as="h2"
            sx={{
              fontSize: [5, 6, 7],
              fontWeight: 900,
              lineHeight: 1.3,
              letterSpacing: '-0.03em',
              color: 'text',
              mb: 4,
              pb: 2,
              maxWidth: '900px',
              mx: 'auto',
              overflow: 'visible'
            }}
          >
            Clubs discovering the{' '}
            <Text
              as="span"
              sx={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block'
              }}
            >
              joy of code
            </Text>
          </Heading>
          <Text
            as="p"
            sx={{
              fontSize: [3, 4],
              lineHeight: 1.6,
              color: 'muted',
              maxWidth: '700px',
              mx: 'auto',
              mb: 3
            }}
          >
            Hack Club is a global nonprofit network of high school coding clubs and makers.
            We're fostering a new generation of young people who are the builders, creators,
            and leaders our world needs.
          </Text>
          <Button
            {...({
              as: "a",
              href: "/rundown"
            } as any)}
            sx={{
              bg: 'primary',
              color: 'white',
              fontSize: [2, 3],
              fontWeight: 700,
              py: [3, 4],
              px: [5, 6],
              borderRadius: '14px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
              letterSpacing: '0.02em',
              '&:hover': {
                transform: 'translateY(-3px) scale(1.02)',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
                bg: '#5a6fd8'
              }
            }}
          >
            How to start your club →
          </Button>
        </Box>

        <Grid
          columns={[1, null, '2fr 3fr']}
          gap={[3, 4, 5]}
          sx={{
            alignItems: 'center',
            mt: [3, 4]
          }}
        >
          <Box sx={{ mt: [0, 0], pr: [0, 4], textAlign: 'center' }}>
            <Heading as="h3" sx={{ fontSize: [4, 5], mb: 4, color: 'text', fontWeight: 800, lineHeight: 1.2 }}>
              How Hack Clubs work
            </Heading>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: [3, 4] }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                <Box sx={{
                  bg: 'green',
                  color: 'white',
                  width: ['40px', '48px'],
                  height: ['40px', '48px'],
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: [1, 2],
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>
                  1
                </Box>
                <Text as="p" sx={{ fontSize: [1, 2], lineHeight: 1.5, mt: 1 }}>
                  <Text as="span" sx={{ fontWeight: 'bold', display: 'block', mb: 1 }}>
                    A group of teens, many beginners, gather to start coding.
                  </Text>
                  The leader (that's you!) presents for a few minutes, getting the
                  group started building something new.
                </Text>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                <Box sx={{
                  bg: 'cyan',
                  color: 'white',
                  width: ['40px', '48px'],
                  height: ['40px', '48px'],
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: [1, 2],
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>
                  2
                </Box>
                <Text as="p" sx={{ fontSize: [1, 2], lineHeight: 1.5, mt: 1, a: { color: 'primary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } } }}>
                  <Text as="span" sx={{ fontWeight: 'bold', display: 'block', mb: 1 }}>
                    Everyone gets hacking, individually.
                  </Text>
                  Not hacking bank accounts, but rather being creative and{' '}
                  <Link href="https://hackclub.com/ship">making something awesome</Link>.
                </Text>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                <Box sx={{
                  bg: 'blue',
                  color: 'white',
                  width: ['40px', '48px'],
                  height: ['40px', '48px'],
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: [1, 2],
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>
                  3
                </Box>
                <Text as="p" sx={{ fontSize: [1, 2], lineHeight: 1.5, mt: 1 }}>
                  <Text as="span" sx={{ fontWeight: 'bold', display: 'block', mb: 1 }}>
                    To end, everyone demos their work.
                  </Text>
                  As a leader, you're cultivating a community of makers. Each member
                  showing off their work builds momentum & motivation.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '24px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
              border: '2px solid',
              borderColor: 'elevated',
              transform: 'rotate(2deg)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'rotate(0deg) scale(1.02)',
                boxShadow: '0 25px 70px rgba(0, 0, 0, 0.25)'
              },
              iframe: {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/xXIxwV7bQTw?si=gmhvvHTcUxKTVMjt"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </Box>
        </Grid>
      </Container>
    </Box>

    {/* Go Beyond Club Meetings Section */}
    <Box as="section" sx={{ py: [4, 5], bg: 'primary', color: 'background', position: 'relative', overflow: 'hidden' }}>
      <Container sx={{ px: [2, 3], maxWidth: '1600px', position: 'relative', zIndex: 1, mx: 'auto' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Heading as="h2" sx={{ fontSize: [5, 6, 7], mb: 3, color: 'background', fontWeight: 900, letterSpacing: '-0.02em' }}>
            Go beyond club meetings
          </Heading>
          <Text
            as="p"
            sx={{
              fontSize: [3, 4],
              lineHeight: 1.6,
              color: 'background',
              opacity: 0.9,
              maxWidth: '700px',
              mx: 'auto',
              a: { color: 'background', textDecoration: 'underline', '&:hover': { opacity: 0.8 } }
            }}
          >
            Hack Clubs attend and run{' '}
            <NextLink href="/hackathons">
              hackathons
            </NextLink>{' '}
            like <a href="https://lioncityhacks.com">Lion City Hacks</a> &{' '}
            <a href="https://www.youtube.com/watch?v=Hs-hMMeHXaY">HackOC</a>,
            take part in year long programs like{' '}
            <a href="https://blueprint.hackclub.com" target="_blank" rel="noopener">
              Blueprint
            </a>, and compete in events
            like the{' '}
            <a href="http://www.congressionalappchallenge.us">
              Congressional App Challenge
            </a>
            . The hack's the limit.
          </Text>
        </Box>
      </Container>
    </Box>

    {/* Welcome to the Club - By the students, for the students Section */}
    <Box
      as="section"
      sx={{
        py: [3, 4],
        bg: 'dark',
        color: 'white',
        'h2,p': { textShadow: 'text' },
        textAlign: [null, 'center'],
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <BGImg
        gradient="linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.625))"
        src="/slack_ama.webp"
        alt="Hack Clubbers gather at the Elon Musk AMA in 2020"
      />
      <Container sx={{ mx: 'auto', textAlign: 'center' }}>
        <Text as="p" variant="eyebrow" sx={{ color: 'white', opacity: 0.75 }}>
          ~ Welcome to the club ~
        </Text>
        <Heading as="h2" variant="title">
          By the students, for the students.
        </Heading>
        <Text as="p" variant="lead" sx={{ maxWidth: 'copyPlus', mx: 'auto' }}>
          We believe teenagers can build the future, but they need the right environment
          to do it. That's why{' '}
          <Highlight>every&nbsp;Hack&nbsp;Club is student-led</Highlight> —
          no teachers, no curriculum, no lectures. Just teenagers learning to code
          by building things they care about, supported by a global community of
          peers and mentors who believe in their potential.
        </Text>
        <Button
          {...({
            as: NextLink,
            href: "/philosophy",
            variant: "ctaLg"
          } as any)}
          sx={{
            bg: 'purple'
          }}
        >
          Our philosophy →
        </Button>
      </Container>
    </Box>

    {/* club stories section */}
    <Box
      as="section"
      sx={{
        py: [5, 6, 7],
        bg: 'primary',
        color: 'background',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1, textAlign: 'center', mx: 'auto' }}>
        <Text
          as="p"
          variant="eyebrow"
          sx={{
            color: 'background',
            opacity: 0.9,
            fontSize: [2, 3],
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            mb: 3
          }}
        >
          New System
        </Text>
        <Heading
          as="h2"
          sx={{
            color: 'background',
            fontSize: [6, 7, 8],
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            mb: 4
          }}
        >
          Club Levels System
        </Heading>
        <Text
          as="p"
          sx={{
            color: 'background',
            fontSize: [3, 4, 5],
            lineHeight: 1.5,
            maxWidth: '800px',
            mx: 'auto',
            mb: 5,
            opacity: 0.95
          }}
        >
          Advance through our tiered system to unlock exclusive perks and resources for your club.
        </Text>

        <Box sx={{ maxWidth: '600px', mx: 'auto', mb: 5 }}>
          <Box sx={{
            bg: 'elevated',
            p: 4,
            borderRadius: '16px',
            border: '2px solid',
            borderColor: '#cd7f32',
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            mb: 4,
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle, rgba(205, 127, 50, 0.1) 0%, transparent 70%)',
              animation: 'pulse-bronze 3s ease-in-out infinite'
            },
            '@keyframes pulse-bronze': {
              '0%, 100%': { transform: 'scale(1)', opacity: 0.5 },
              '50%': { transform: 'scale(1.2)', opacity: 0.8 }
            },
            '&:hover': {
              transform: 'translateY(-8px) scale(1.02)',
              boxShadow: '0 20px 40px rgba(205, 127, 50, 0.3)',
              borderColor: '#b8860b'
            }
          }}>
            <Box sx={{
              bg: '#cd7f32',
              color: 'white',
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 4,
              fontWeight: 'bold',
              mx: 'auto',
              mb: 3,
              boxShadow: '0 4px 15px rgba(205, 127, 50, 0.4)',
              position: 'relative',
              zIndex: 1,
              animation: 'bounce-subtle 2s ease-in-out infinite',
              '@keyframes bounce-subtle': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-5px)' }
              }
            }}>
              1
            </Box>
            <Heading as="h3" sx={{ fontSize: 4, mb: 2, color: 'text', position: 'relative', zIndex: 1 }}>Level One</Heading>
            <Text sx={{ color: 'muted', position: 'relative', zIndex: 1 }}>Foundation level for all new clubs</Text>
          </Box>

          <Box sx={{
            bg: 'elevated',
            p: 4,
            borderRadius: '16px',
            border: '2px solid',
            borderColor: '#c0c0c0',
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle, rgba(192, 192, 192, 0.15) 0%, transparent 70%)',
              animation: 'pulse-silver 3s ease-in-out infinite 0.5s'
            },
            '@keyframes pulse-silver': {
              '0%, 100%': { transform: 'scale(1)', opacity: 0.5 },
              '50%': { transform: 'scale(1.2)', opacity: 0.9 }
            },
            '&:hover': {
              transform: 'translateY(-8px) scale(1.02)',
              boxShadow: '0 20px 40px rgba(192, 192, 192, 0.4)',
              borderColor: '#a8a8a8'
            }
          }}>
            <Box sx={{
              bg: '#c0c0c0',
              color: '#333',
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 4,
              fontWeight: 'bold',
              mx: 'auto',
              mb: 3,
              boxShadow: '0 4px 15px rgba(192, 192, 192, 0.4)',
              position: 'relative',
              zIndex: 1,
              animation: 'bounce-subtle 2s ease-in-out infinite 0.3s',
              '@keyframes bounce-subtle': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-5px)' }
              }
            }}>
              2
            </Box>
            <Heading as="h3" sx={{ fontSize: 4, mb: 2, color: 'text', position: 'relative', zIndex: 1 }}>Level Two</Heading>
            <Text sx={{ color: 'muted', position: 'relative', zIndex: 1 }}>Advanced level for active and engaged clubs</Text>
          </Box>
        </Box>

        <Button
          {...({
            as: "a",
            href: "/levels"
          } as any)}
          sx={{
            bg: 'background',
            color: 'primary',
            fontSize: [3, 4],
            fontWeight: 700,
            py: [3, 4],
            px: [5, 6],
            borderRadius: '12px',
            border: '2px solid',
            borderColor: 'background',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              transform: 'translateY(-4px) scale(1.05)',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)'
            }
          }}
        >
          Learn More About Levels →
        </Button>
      </Container>
    </Box>

    {/* Clubs Portal Section */}
    <Box as="section" sx={{ py: [6, 7], bg: 'background', position: 'relative', overflow: 'hidden' }}>
      <Container sx={{ maxWidth: '900px', mx: 'auto', textAlign: 'center' }}>
        <Box>
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
              as="h2"
              sx={{
                fontSize: [5, 6],
                fontWeight: 800,
                mb: 3,
                lineHeight: 1.1
              }}
            >
              Clubs Portal
            </Heading>
            <Text
              sx={{
                fontSize: [2, 3],
                color: 'muted',
                mb: 4,
                lineHeight: 1.6,
                maxWidth: '700px',
                mx: 'auto'
              }}
            >
              The Clubs Portal is the place where club leaders can easily find YSWS's (You Ship, We Ship) and explore workshops they can run with their Hack Club. It serves as a central hub that helps leaders access the activities and resources they need to support and grow their clubs.
            </Text>
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center', mt: [4, 5] }}>
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
                  px: 4,
                  py: 3,
                  fontSize: 2,
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
              <Button
                {...({
                  as: "a",
                  href: "/clubs-portal"
                } as any)}
                sx={{
                  bg: 'transparent',
                  color: 'text',
                  px: 4,
                  py: 3,
                  fontSize: 2,
                  fontWeight: 700,
                  borderRadius: '12px',
                  cursor: 'pointer',
                  border: '2px solid',
                  borderColor: 'muted',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#ec3750',
                    color: '#ec3750'
                  }
                }}
              >
                Learn More
              </Button>
            </Box>
        </Box>
      </Container>
    </Box>

    <Box as="section" sx={{ py: [5, 6], bg: 'elevated', color: 'text' }}>
      <Container
        sx={{
          maxWidth: [null, 'copyUltra'],
          svg: { filter: 'drop-shadow(0 2px 3px rgba(0,0,0,.125))' },
          mx: 'auto'
        }}
      >
        <Box as="header" sx={{ textAlign: 'center', pb: [4, 5], maxWidth: '900px', mx: 'auto' }}>
          <Text as="p" variant="eyebrow" sx={{ fontSize: [1, 2], fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Hit the ground running
          </Text>
          <Heading as="h2" sx={{ fontSize: 'clamp(2rem, 4vw + 1rem, 4rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', mb: 3, textAlign: 'center', width: '100%' }}>
            Get your club <Text
              as="span"
              sx={{
                borderRadius: '12px',
                px: 2,
                py: 0.5,
                mx: 0,
                bg: 'cyan',
                color: 'white',
                display: 'inline',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 8px rgba(0, 188, 212, 0.3)',
                verticalAlign: 'baseline',
                fontSize: '0.85em'
              }}
            >
              going & growing
            </Text>
          </Heading>
          <Text sx={{ fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.5rem)', color: 'muted', lineHeight: 1.6, textAlign: 'center' }}>
            Everything you need to run an amazing coding club
          </Text>
        </Box>
        <Box>
          <Grid
            columns={[1, 2, 3]}
            gap={[3, 4]}
            sx={{
              alignItems: 'stretch',
              span: { color: 'white' },
              '> *': {
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }
            }}
          >
            <Feature
              icon="slack-fill"
              color="#5d114c"
              name="Chat with thousands of club leaders"
              desc={
                <>
                  In our <Link href="https://hackclub.com/slack/">Slack community</Link>, you'll be
                  invited to a space for Hack&nbsp;Club leaders to ask questions & 
                  chat, share projects, & attend weekly live events.
                </>
              }
            />
            <Feature
              icon="bolt"
              color="green"
              name="Tools to hack on"
              desc={
                <>
                  We build tools, such as{' '}
                  <a href="https://sprig.hackclub.com">Sprig</a>, that your
                  members can use to make projects with in meetings! Build more of
                  them with us in our <Link href="https://hackclub.com/slack/">Slack community</Link>.
                </>
              }
            />
            <Feature
              icon="docs"
              color="red"
              name="Meeting content"
              desc={
                <>
                  Come prepared to every meeting with over 100{' '}
                  <a href="https://workshops.hackclub.com">workshops</a> (3 years'
                  worth!) and 19 <a href="https://jams.hackclub.com">Jams</a> that
                  guide your club members through making fun, creative projects.
                </>
              }
            />
            <Feature
              name="Stickers"
              desc={
                <>
                  Get <Link href="/stickers">amazing stickers</Link> for marketing
                  your club shipped directly to you & your club members.
                </>
              }
              color="purple"
              icon="sticker"
            />
            <Feature
              icon="bank-account"
              color="#252429"
              name="A nonprofit fund"
              desc={
                <>
                  Use our 501(c)(3) status and a restricted fund with{' '}
                  <Link href="/fiscal-sponsorship">HCB</Link> to fundraise, accept donations, and
                  buy things!
                </>
              }
            />
            <Feature
              name="Weekly events"
              desc={
                <>
                  From <Link href="/night">Hack Night</Link> to{' '}
                  <Link href="/amas">AMAs</Link>
                  {' to '}
                  <a href="https://twitter.com/hackclub/status/1300494921997193217?s=21">
                    weirder events
                  </a>
                  , the Slack community has live events for leaders & members
                  alike every week.
                </>
              }
              icon="event-code"
              color="blue"
            />
            <Feature
              icon="purse"
              color="orange"
              name="A basket of free tools"
              desc={
                <>
                  We're always building new tools for leaders, such as{' '}
                  <a href="https://dashboard.hackclub.com">The Dashboard</a>! A place to manage your club! We've also got
                  free subscriptions to Figma Pro, Postman, and more for running a
                  great computer science club.
                </>
              }
            />
            <Feature
              icon="sam"
              color="blue"
              name="Free Zoom Pro"
              desc="24/7 access to Zoom Pro enabled meeting rooms for your club (that means no time limit)."
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                bg: 'background',
                p: [4, 5],
                borderRadius: '16px',
                border: '1px solid',
                borderColor: 'muted',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                maxWidth: 'none',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  borderColor: 'primary'
                }
              }}
            >
              <Heading
                as="h3"
                sx={{
                  fontSize: 3,
                  fontWeight: 700,
                  mb: 3,
                  mt: 0,
                  color: 'text',
                  lineHeight: 1.3
                }}
              >
                Hack Club Spaces
              </Heading>
              <Text
                as="p"
                sx={{
                  mt: 0,
                  flex: 1,
                  fontSize: 2,
                  lineHeight: 1.5,
                  color: 'muted',
                  a: { color: 'primary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }
                }}
              >
                Free beginner friendly all-in-one platform to create, host and collaborate in our <a href="https://spaces.hackclub.com/">web IDE</a> with over 500 supported languages and a variety of templates to use.
              </Text>
            </Box>
          </Grid>
        </Box>
        <Feature
          icon="welcome"
          color="rgb(255,88,88)"
          name="Existing clubs welcome"
          desc={
            <>
              When established Computer Science clubs join, they get all the Hack&nbsp;Club
              benefits: Zoom&nbsp;Pro, stickers, our Slack community,{' '}
              <a href="https://workshops.hackclub.com/">workshops</a>, the
              works. They're welcome to use the "Hack&nbsp;Club" name or keep
              their existing one.
            </>
          }
          as="aside"
          sx={{
            display: 'grid',
            gridGap: [0, 4],
            gridTemplateColumns: [null, 'auto 1fr'],
            alignItems: 'start',
            justifyContent: 'start',
            bg: 'rgba(255,88,88,0.125)',
            p: [3, 4],
            mt: [3, 4],
            borderRadius: 'extra',
            span: { transform: 'none', width: 'min-intrinsic' },
            svg: { color: 'white' }
          }}
        />
        <Box sx={{ textAlign: 'center', mt: [4, 5] }}>
          <Button
            {...({
              as: "a",
              href: "/resources"
            } as any)}
            sx={{
              bg: 'primary',
              color: 'white',
              px: 4,
              py: 3,
              fontSize: 2,
              fontWeight: 700,
              borderRadius: '12px',
              cursor: 'pointer',
              border: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
              }
            }}
          >
            View All Resources →
          </Button>
        </Box>
      </Container>
    </Box>

    {/* What You'll Gain Section */}
    <Box as="section" sx={{ py: [5, 6], bg: 'sunken' }}>
      <Container sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <Box sx={{ textAlign: 'center', mb: [4, 5] }}>
          <Text
            as="p"
            sx={{
              fontSize: [2, 3],
              fontWeight: 700,
              color: 'primary',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              mb: 3
            }}
          >
            More than just coding
          </Text>
          <Heading
            as="h2"
            sx={{
              fontSize: [5, 6, 7],
              fontWeight: 900,
              color: 'text',
              mb: 3,
              maxWidth: '900px',
              mx: 'auto',
              lineHeight: 1.1
            }}
          >
            What you'll{' '}
            <Text
              as="span"
              sx={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
            >
              gain
            </Text>
            {' '}as a leader
          </Heading>
          <Text sx={{ fontSize: [2, 3], color: 'muted', maxWidth: '700px', mx: 'auto', lineHeight: 1.6 }}>
            Leading a Hack Club isn't just about teaching code - it's about developing skills that will serve you for life
          </Text>
        </Box>

        <Grid columns={[1, 2, 3]} gap={[3, 4]}>
          {[
            {
              icon: 'bolt',
              title: 'Leadership Skills',
              description: 'Learn to inspire, organize, and guide a team. These are skills colleges and employers actively look for.',
              color: '#667eea'
            },
            {
              icon: 'slack-fill',
              title: 'Build Your Network',
              description: 'Connect with thousands of student leaders, mentors, and the broader tech community.',
              color: '#06b6d4'
            },
            {
              icon: 'code',
              title: 'Deepen Your Skills',
              description: 'Teaching is the best way to learn. You\'ll become a better coder by helping others.',
              color: '#10b981'
            },
            {
              icon: 'docs',
              title: 'Portfolio Projects',
              description: 'Build impressive projects and document your leadership journey for college applications.',
              color: '#8b5cf6'
            },
            {
              icon: 'welcome',
              title: 'Public Speaking',
              description: 'Get comfortable presenting and speaking in front of groups - a crucial life skill.',
              color: '#ec4899'
            },
            {
              icon: 'event-code',
              title: 'Event Planning',
              description: 'Learn to organize hackathons, workshops, and events that bring people together.',
              color: '#3b82f6'
            }
          ].map((skill, i) => (
            <Box
              key={i}
              sx={{
                bg: 'background',
                p: [4, 5],
                borderRadius: '16px',
                border: '2px solid',
                borderColor: 'muted',
                transition: 'all 0.3s ease',
                animation: `fade-in-up 0.6s ease-out ${i * 0.1}s both`,
                '@keyframes fade-in-up': {
                  '0%': { opacity: 0, transform: 'translateY(30px)' },
                  '100%': { opacity: 1, transform: 'translateY(0)' }
                },
                '&:hover': {
                  transform: 'translateY(-8px)',
                  borderColor: skill.color,
                  boxShadow: `0 20px 40px ${skill.color}30`
                }
              }}
            >
              <Box
                sx={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  bg: skill.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                  boxShadow: `0 8px 20px ${skill.color}40`
                }}
              >
                <Icon glyph={skill.icon} size={24} sx={{ color: 'white !important' }} />
              </Box>
              <Heading
                as="h3"
                sx={{
                  fontSize: [2, 3],
                  fontWeight: 700,
                  color: 'text',
                  mb: 2
                }}
              >
                {skill.title}
              </Heading>
              <Text sx={{ fontSize: [1, 2], color: 'muted', lineHeight: 1.6 }}>
                {skill.description}
              </Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* What Makes a Great Club Section */}
    <Box as="section" sx={{ py: [5, 6], bg: 'background' }}>
      <Container sx={{ px: [2, 3], maxWidth: '1600px', mx: 'auto' }}>
        <Box sx={{ textAlign: 'center', mb: [3, 4] }}>
          <Text
            as="p"
            sx={{
              fontSize: [1, 2],
              fontWeight: 600,
              color: 'primary',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              mb: 2
            }}
          >
            Club essentials
          </Text>
          <Heading
            as="h2"
            sx={{
              fontSize: [5, 6, 7],
              fontWeight: 800,
              mb: 4,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'text',
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            What makes a{' '}
            <Text
              as="span"
              sx={{
                background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block'
              }}
            >
              great club
            </Text>
            ?
          </Heading>
        </Box>
        <Grid columns={[1, null, 2]} gap={[2, 3]} sx={{ alignItems: 'stretch', width: '100%' }}>
          <Card sx={{
            p: [5, 6],
            bg: 'background',
            border: '1px solid',
            borderColor: 'muted',
            borderRadius: '16px',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Heading as="h3" sx={{ fontSize: [3, 4], mb: 4, color: 'text', fontWeight: 700 }}>
              The perfect meeting formula
            </Heading>
            <Box sx={{ mb: 4, flex: 1 }}>
              <Box sx={{ mb: 4, p: 4, bg: 'sunken', borderRadius: '12px', border: '1px solid', borderColor: 'muted' }}>
                <Text sx={{ fontWeight: 700, color: 'green', mb: 2, fontSize: 2 }}>
                  1. Start with a demo (5-10 minutes)
                </Text>
                <br />
                <Text sx={{ color: 'muted', fontSize: 2, lineHeight: 1.5 }}>
                  Show something cool you built or found. Get everyone excited about what's possible.
                </Text>
              </Box>

              <Box sx={{ mb: 4, p: 4, bg: 'sunken', borderRadius: '12px', border: '1px solid', borderColor: 'muted' }}>
                <Text sx={{ fontWeight: 700, color: 'blue', mb: 2, fontSize: 2 }}>
                  2. Hack time (40-45 minutes)
                </Text>
                <br />
                <Text sx={{ color: 'muted', fontSize: 2, lineHeight: 1.5 }}>
                  Everyone works on their own projects. Leaders help debug and answer questions.
                </Text>
              </Box>

              <Box sx={{ mb: 0, p: 4, bg: 'sunken', borderRadius: '12px', border: '1px solid', borderColor: 'muted' }}>
                <Text sx={{ fontWeight: 700, color: 'purple', mb: 2, fontSize: 2 }}>
                  3. Show & tell (5-10 minutes)
                </Text>
                <br />
                <Text sx={{ color: 'muted', fontSize: 2, lineHeight: 1.5 }}>
                  Members share what they worked on. Celebrate progress, no matter how small.
                </Text>
              </Box>
            </Box>
          </Card>

          <Card sx={{
            p: [5, 6],
            bg: 'background',
            border: '1px solid',
            borderColor: 'muted',
            borderRadius: '16px',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Heading as="h3" sx={{ fontSize: [3, 4], mb: 4, color: 'text', fontWeight: 700 }}>
              Creating the right environment
            </Heading>
            <Box as="ul" sx={{ listStyle: 'none', p: 0, flex: 1 }}>
              <Box as="li" sx={{ mb: 3, display: 'flex', alignItems: 'flex-start', p: 4, py: 5, bg: 'sunken', borderRadius: '8px', border: '1px solid', borderColor: 'muted' }}>
                <Text sx={{ color: 'green', mr: 3, fontSize: 3, fontWeight: 'bold' }}>✓</Text>
                <Box>
                  <Text sx={{ fontWeight: 700, fontSize: 2, mb: 1 }}>Inclusive & welcoming</Text>
                  <br />
                  <Text sx={{ color: 'muted', fontSize: 1 }}>Everyone belongs, regardless of experience level</Text>
                </Box>
              </Box>
              <Box as="li" sx={{ mb: 3, display: 'flex', alignItems: 'flex-start', p: 4, py: 5, bg: 'sunken', borderRadius: '8px', border: '1px solid', borderColor: 'muted' }}>
                <Text sx={{ color: 'green', mr: 3, fontSize: 3, fontWeight: 'bold' }}>✓</Text>
                <Box>
                  <Text sx={{ fontWeight: 700, fontSize: 2, mb: 1 }}>Project-focused</Text>
                  <br />
                  <Text sx={{ color: 'muted', fontSize: 1 }}>Learning happens through building real things</Text>
                </Box>
              </Box>
              <Box as="li" sx={{ mb: 3, display: 'flex', alignItems: 'flex-start', p: 4, py: 5, bg: 'sunken', borderRadius: '8px', border: '1px solid', borderColor: 'muted' }}>
                <Text sx={{ color: 'green', mr: 3, fontSize: 3, fontWeight: 'bold' }}>✓</Text>
                <Box>
                  <Text sx={{ fontWeight: 700, fontSize: 2, mb: 1 }}>Student-driven</Text>
                  <br />
                  <Text sx={{ color: 'muted', fontSize: 1 }}>Members choose what they want to learn and build</Text>
                </Box>
              </Box>
              <Box as="li" sx={{ mb: 0, display: 'flex', alignItems: 'flex-start', p: 4, py: 5, bg: 'sunken', borderRadius: '8px', border: '1px solid', borderColor: 'muted' }}>
                <Text sx={{ color: 'green', mr: 3, fontSize: 3, fontWeight: 'bold' }}>✓</Text>
                <Box>
                  <Text sx={{ fontWeight: 700, fontSize: 2, mb: 1 }}>Collaborative</Text>
                  <br />
                  <Text sx={{ color: 'muted', fontSize: 1 }}>Help each other, share knowledge, celebrate wins</Text>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Button
            {...({
              as: "a",
              href: "/club-essentials"
            } as any)}
            sx={{
              bg: 'red',
              color: 'white',
              fontSize: 2,
              fontWeight: 600,
              py: 3,
              px: 6,
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
              }
            }}
          >
            Learn More About Running Great Clubs →
          </Button>
        </Box>
      </Container>
    </Box>

    {/* Club Activities Section */}
    <Box as="section" sx={{ py: [4, 5], bg: 'background', color: 'text' }}>
      <Container sx={{ mx: 'auto', textAlign: 'center' }}>
        <Text as="p" variant="eyebrow">
          Beyond meetings
        </Text>
        <Heading as="h2" variant="title" sx={{ mb: 4, textAlign: 'center' }}>
          Activities that <Text
            as="span"
            sx={{
              borderRadius: 'default',
              px: 2,
              mx: 0,
              whiteSpace: 'nowrap',
              color: 'background',
              bg: 'red',
              display: 'inline-block',
              verticalAlign: 'baseline',
              lineHeight: 'inherit'
            }}
          >
            energize
          </Text> your club.
        </Heading>
        <Grid columns={[1, 2, 4]} gap={3} sx={{ width: '100%' }}>
          <Card sx={{ p: 4, textAlign: 'center', bg: 'background', border: '1px solid', borderColor: 'muted', borderRadius: '12px', width: '100%' }}>
            <Heading as="h4" sx={{ fontSize: 2, mb: 2, color: 'primary' }}>Hackathons</Heading>
            <Text sx={{ fontSize: 1, color: 'text' }}>
              Organize weekend coding competitions or attend regional hackathons as a group
            </Text>
          </Card>
          <Card sx={{ p: 4, textAlign: 'center', bg: 'background', border: '1px solid', borderColor: 'muted', borderRadius: '12px', width: '100%' }}>
            <Heading as="h4" sx={{ fontSize: 2, mb: 2, color: 'purple' }}>Game Jams</Heading>
            <Text sx={{ fontSize: 1, color: 'text' }}>
              Build games together in short sprints using tools like Scratch or JavaScript
            </Text>
          </Card>
          <Card sx={{ p: 4, textAlign: 'center', bg: 'background', border: '1px solid', borderColor: 'muted', borderRadius: '12px', width: '100%' }}>
            <Heading as="h4" sx={{ fontSize: 2, mb: 2, color: 'blue' }}>Tech Talks</Heading>
            <Text sx={{ fontSize: 1, color: 'text' }}>
              Invite local developers or have members present on topics they're passionate about
            </Text>
          </Card>
          <Card sx={{ p: 4, textAlign: 'center', bg: 'background', border: '1px solid', borderColor: 'muted', borderRadius: '12px', width: '100%' }}>
            <Heading as="h4" sx={{ fontSize: 2, mb: 2, color: 'green' }}>Demo Days</Heading>
            <Text sx={{ fontSize: 1, color: 'text' }}>
              Showcase member projects to parents, teachers, and the broader school community
            </Text>
          </Card>
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button 
            {...({
              as: "a",
              href: "/activities",
              variant: "outline"
            } as any)}>
            Explore More Club Activities →
          </Button>
        </Box>
      </Container>
    </Box>

    <Slack />

    {/* Testimonials Section */}
    <Box as="section" sx={{ py: [5, 6], bg: 'elevated', position: 'relative', overflow: 'hidden' }}>
      <Container sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <Box sx={{ textAlign: 'center', mb: [4, 5] }}>
          <Text
            as="p"
            sx={{
              fontSize: [2, 3],
              fontWeight: 700,
              color: 'primary',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              mb: 3
            }}
          >
            Hear from leaders
          </Text>
          <Heading
            as="h2"
            sx={{
              fontSize: [5, 6, 7],
              fontWeight: 900,
              color: 'text',
              mb: 3,
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            What club leaders are saying
          </Heading>
        </Box>

        <Grid columns={[1, 2, 3]} gap={[3, 4]} sx={{ mb: 4 }}>
          {[
            {
              quote: "Starting a Hack Club was the best decision I made in high school. I went from barely knowing how to code to building real projects and leading a community.",
              author: "Sarah Chen",
              role: "Club Leader, California"
            },
            {
              quote: "The support from Hack Club HQ is incredible. They gave us everything we needed - from workshops to funding to a community of other leaders.",
              author: "Marcus Johnson",
              role: "Club Leader, Texas"
            },
            {
              quote: "Our club started with 5 members and grew to 40+ in one semester. Seeing students discover their passion for coding is the most rewarding experience.",
              author: "Priya Patel",
              role: "Club Leader, New York"
            }
          ].map((testimonial, i) => (
            <Card
              key={i}
              sx={{
                p: [4, 5],
                bg: 'background',
                border: '2px solid',
                borderColor: 'muted',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
                animation: `fade-in-up 0.6s ease-out ${i * 0.15}s both`,
                '@keyframes fade-in-up': {
                  '0%': { opacity: 0, transform: 'translateY(30px)' },
                  '100%': { opacity: 1, transform: 'translateY(0)' }
                },
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  borderColor: 'primary'
                }
              }}
            >
              <Text
                sx={{
                  fontSize: [2, 3],
                  lineHeight: 1.6,
                  color: 'text',
                  mb: 4,
                  fontStyle: 'italic',
                  textAlign: 'center'
                }}
              >
                "{testimonial.quote}"
              </Text>
              <Box sx={{ textAlign: 'center' }}>
                <Text sx={{ fontWeight: 700, color: 'text', fontSize: 2, display: 'block', mb: 2 }}>
                  {testimonial.author}
                </Text>
                <Text sx={{ color: 'muted', fontSize: 1, display: 'block' }}>
                  {testimonial.role}
                </Text>
              </Box>
            </Card>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* FAQ Section */}
    <Box as="section" sx={{ py: [5, 6], bg: 'background' }}>
      <Container sx={{ maxWidth: '900px', mx: 'auto' }}>
        <Box sx={{ textAlign: 'center', mb: [4, 5] }}>
          <Text
            as="p"
            sx={{
              fontSize: [2, 3],
              fontWeight: 700,
              color: 'primary',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              mb: 3
            }}
          >
            Got questions?
          </Text>
          <Heading
            as="h2"
            sx={{
              fontSize: [5, 6, 7],
              fontWeight: 900,
              color: 'text',
              mb: 3
            }}
          >
            Frequently Asked Questions
          </Heading>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {[
            {
              question: "Do I need to be an expert coder to start a club?",
              answer: "Not at all! Many successful club leaders started as beginners. You just need enthusiasm and a willingness to learn alongside your members. We provide all the resources and support you need."
            },
            {
              question: "How much time does running a club take?",
              answer: "Most clubs meet for 1-2 hours per week. As a leader, you'll spend an additional 1-2 hours preparing. It's a manageable commitment that fits around your schedule."
            },
            {
              question: "What if my school already has a coding club?",
              answer: "That's great! Hack Clubs have a unique student-led, project-based approach. Many schools have both, and they complement each other well. We can help you differentiate your club."
            },
            {
              question: "Is there any cost to start a Hack Club?",
              answer: "Nope! Starting a Hack Club is completely free. We provide resources, workshops, stickers, and even help with funding through HCB if you need it."
            },
            {
              question: "How do I get members to join?",
              answer: "We'll help you with marketing strategies, provide awesome stickers and posters, and give you tips from successful clubs. Most clubs start small and grow organically through word of mouth."
            }
          ].map((faq, i) => (
            <Box
              key={i}
              sx={{
                bg: 'background',
                p: [4, 5],
                borderRadius: '12px',
                border: '2px solid',
                borderColor: 'muted',
                transition: 'all 0.3s ease',
                textAlign: 'center',
                '&:hover': {
                  borderColor: 'primary',
                  transform: 'scale(1.02)'
                }
              }}
            >
              <Heading
                as="h3"
                sx={{
                  fontSize: [2, 3],
                  fontWeight: 700,
                  color: 'text',
                  mb: 2
                }}
              >
                {faq.question}
              </Heading>
              <Text sx={{ fontSize: [1, 2], color: 'muted', lineHeight: 1.6 }}>
                {faq.answer}
              </Text>
            </Box>
          ))}
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: ['column', 'row'],
          alignItems: 'center',
          justifyContent: 'center',
          gap: [3, 4],
          mt: 5
        }}>
          <Text sx={{ fontSize: [2, 3], color: 'muted' }}>
            Still have questions?
          </Text>
          <Button
            {...({
              as: "a",
              href: "https://hackclub.com/slack/",
              target: "_blank",
              rel: "noopener"
            } as any)}
            sx={{
              bg: 'primary',
              color: 'white',
              fontSize: [2, 3],
              fontWeight: 700,
              py: [3, 4],
              px: [5, 6],
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)'
              }
            }}
          >
            Ask in our Slack community
          </Button>
        </Box>
      </Container>
    </Box>

    {/* Your Journey Section */}
    <Box as="section" sx={{ py: [5, 6], bg: 'sunken', position: 'relative' }}>
      <Container sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <Box sx={{ textAlign: 'center', mb: [4, 5] }}>
          <Heading
            as="h2"
            sx={{
              fontSize: [5, 6, 7],
              fontWeight: 900,
              color: 'text',
              mb: 3
            }}
          >
            Your{' '}
            <Text
              as="span"
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
            >
              journey
            </Text>
            {' '}starts here
          </Heading>
          <Text sx={{ fontSize: [2, 3], color: 'muted', maxWidth: '700px', mx: 'auto' }}>
            From your first meeting to building a thriving community
          </Text>
        </Box>

        <Box sx={{ maxWidth: '800px', mx: 'auto', position: 'relative' }}>
          {/* Timeline line */}
          <Box
            sx={{
              position: 'absolute',
              left: ['20px', '50%'],
              top: 0,
              bottom: 0,
              width: '2px',
              bg: 'muted',
              transform: ['none', 'translateX(-50%)']
            }}
          />

          {[
            {
              title: "Week 1: Apply & Get Approved",
              description: "Fill out a quick application and hear back within 24 hours. We'll set up an onboarding call to get you started."
            },
            {
              title: "Week 2: Plan Your First Meeting",
              description: "Choose a workshop, book a room, and spread the word. We'll help you with everything from posters to announcements."
            },
            {
              title: "Week 3: Host Your First Meeting",
              description: "Run your first meeting! Start with introductions, dive into a project, and end with demos. You've got this!"
            },
            {
              title: "Month 2+: Build Momentum",
              description: "Keep the energy going with weekly meetings, special events, and hackathons. Watch your club grow and thrive!"
            }
          ].map((step, i) => (
            <Box
              key={i}
              sx={{
                position: 'relative',
                mb: 5,
                textAlign: 'center'
              }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  top: 0,
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  bg: 'primary',
                  border: '3px solid',
                  borderColor: 'background',
                  transform: 'translateX(-50%)',
                  zIndex: 1
                }}
              />

              <Box
                sx={{
                  bg: 'elevated',
                  p: 4,
                  borderRadius: '12px',
                  border: '2px solid',
                  borderColor: 'muted',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary',
                    transform: 'scale(1.02)'
                  }
                }}
              >
                <Heading as="h3" sx={{ fontSize: [2, 3], fontWeight: 700, color: 'text', mb: 2 }}>
                  {step.title}
                </Heading>
                <Text sx={{ fontSize: [1, 2], color: 'muted', lineHeight: 1.6 }}>
                  {step.description}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>

    <Box sx={{ py: [5, 6], bg: 'background' }}>
      <Container sx={{ textAlign: 'center', px: [2, 3], maxWidth: '1200px' }}>
        <Heading
          as="h2"
          sx={{
            fontSize: [5, 6, 7],
            fontWeight: 800,
            mb: 4,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'text',
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          Ready to <Text
            as="span"
            sx={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              display: 'inline'
            }}
          >
            start your club
          </Text>?
        </Heading>
        <Text
          as="p"
          sx={{
            fontSize: [3, 4],
            lineHeight: 1.6,
            color: 'muted',
            maxWidth: '600px',
            mx: 'auto',
            mb: 6
          }}
        >
          Starting a Hack Club is easier than you think. Here's how to get started.
        </Text>

        <Grid columns={[1, null, 3]} gap={[2, 3]} sx={{ mb: 4, width: '100%', maxWidth: '1000px', ml: 'auto', mr: ['auto', 'auto', 'auto'], transform: 'translateX(60px)', justifyContent: 'center' }}>
          <Card
            sx={{
              bg: 'sunken',
              color: 'text',
              p: [3, 4],
              borderRadius: '12px',
              border: '1px solid',
              borderColor: 'muted',
              boxShadow: 'none',
              width: '100%',
              minWidth: '300px'
            }}
          >
            <Box sx={{
              bg: 'primary',
              color: 'white',
              borderRadius: '8px',
              p: 2,
              mb: 3,
              display: 'inline-block',
              fontSize: 3,
              fontWeight: 'bold'
            }}>
              1
            </Box>
            <Heading as="h3" sx={{ fontSize: 2, fontWeight: 700, mb: 2, color: 'text' }}>
              Apply
            </Heading>
            <Text sx={{ fontSize: 1, lineHeight: 1.4, color: 'muted' }}>
              Tell us about yourself & why you want to start a Hack Club. We'll get back to you within 24 hours.
            </Text>
          </Card>

          <Card
            sx={{
              bg: 'sunken',
              color: 'text',
              p: [3, 4],
              borderRadius: '12px',
              border: '1px solid',
              borderColor: 'muted',
              boxShadow: 'none',
              width: '100%',
              minWidth: '300px'
            }}
          >
            <Box sx={{
              bg: 'orange',
              color: 'white',
              borderRadius: '8px',
              p: 2,
              mb: 3,
              display: 'inline-block',
              fontSize: 3,
              fontWeight: 'bold'
            }}>
              2
            </Box>
            <Heading as="h3" sx={{ fontSize: 2, fontWeight: 700, mb: 2, color: 'text' }}>
              Onboarding call
            </Heading>
            <Text sx={{ fontSize: 1, lineHeight: 1.4, color: 'muted' }}>
              Hop on a quick Zoom with someone from Hack Club HQ to get you started.
            </Text>
          </Card>

          <Card
            sx={{
              bg: 'sunken',
              color: 'text',
              p: [3, 4],
              borderRadius: '12px',
              border: '1px solid',
              borderColor: 'muted',
              boxShadow: 'none',
              width: '100%',
              minWidth: '300px'
            }}
          >
            <Box sx={{
              bg: 'purple',
              color: 'white',
              borderRadius: '8px',
              p: 2,
              mb: 3,
              display: 'inline-block',
              fontSize: 3,
              fontWeight: 'bold'
            }}>
              3
            </Box>
            <Heading as="h3" sx={{ fontSize: 2, fontWeight: 700, mb: 2, color: 'text' }}>
              Launch your club
            </Heading>
            <Text sx={{ fontSize: 1, lineHeight: 1.4, color: 'muted' }}>
              We'll help you get your first meeting scheduled & make sure you have everything you need.
            </Text>
          </Card>
        </Grid>

        <Button
          {...({
            as: "a",
            href: "https://apply.hackclub.com/",
            target: "_blank",
            rel: "noopener noreferrer"
          } as any)}
          sx={{
            bg: 'primary',
            color: 'white',
            fontSize: [3, 4],
            fontWeight: 600,
            py: [4, 5],
            px: [6, 8],
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            display: 'inline-block',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
            }
          }}
        >
          Start Your Club
        </Button>
      </Container>
    </Box>

    <Footer />
  </>
)

export default Page

