import React from 'react'
import { Box, Container, Grid, Heading, Link, Text } from 'theme-ui'
import NextLink from 'next/link'

interface FooterProps {
  dark?: boolean
  [key: string]: any
}

const Footer: React.FC<FooterProps> = ({ dark = false, ...props }) => (
  <Box
    color={dark ? "muted" : "slate"}
    py={[4, 5]}
    sx={{ 
      textAlign: "left",
      bg: 'background'
    }}
    as="footer"
    {...props}
  >
    <Container px={[3, null, 4]}>
      <Grid
        as="article"
        gap={[2, 4]}
        columns={[2, 3]}
        sx={{
          px: 0,
          a: {
            textDecoration: "none",
            color: "muted",
            transition: "0.125s color ease-in-out",
            ":hover,:focus": { color: "slate", textDecoration: "underline" },
          },
          "> div > a": {
            display: "block",
            mb: 2,
          },
          "h2,p": { color: "muted" },
          h2: { fontSize: 3 },
          "a,p": { fontSize: 2 },
        }}
      >
        <Box>
          <Heading as="h2" variant="subheadline" mb={3}>
            Hack&nbsp;Club
          </Heading>
          <Link href="/philosophy">Philosophy</Link>
          <Link href="/team">Our Team</Link>
          <Link href="/brand">Brand guide</Link>
          <Link href="/press">Press</Link>
        </Box>
        <Box>
          <Heading as="h2" variant="subheadline" mb={3}>
            Resources
          </Heading>
          <Link href="https://workshops.hackclub.com/">Workshops</Link>
          <Link href="https://jams.hackclub.com/">Jams</Link>
          <Link href="/slack">Community</Link>
          <Link href="https://apply.hackclub.com/">Apply</Link>
        </Box>
        <Box>
          <Text my={2}>
            <Link href="mailto:clubs@hackclub.com">clubs@hackclub.com</Link>
          </Text>
        </Box>
      </Grid>
      <Text as="p" variant="caption" sx={{ mt: 3 }}>
        © {new Date().getFullYear()} Hack&nbsp;Club. 501(c)(3) nonprofit
      </Text>
    </Container>
  </Box>
)

export default Footer

