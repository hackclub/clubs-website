/**
 * Content configuration file
 * Centralized place to manage all website content
 * Makes it easy to add new sections, pages, and update content
 */

// Navigation configuration
export const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '/rundown' },
    { name: 'Philosophy', href: '/philosophy' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Club Essentials', href: '/club-essentials' },
    { name: 'Activities', href: '/activities' }
  ]
}

// Page metadata
export const pageMetadata = {
  home: {
    title: 'Coding / Computer Science Clubs - Hack Club',
    description: 'Hack Club is a global nonprofit network of high school makers & student-led computer science clubs where young people build the agency, the network, & the technical talent to think big & do big things in the world.'
  },
  rundown: {
    title: 'The Rundown - Hack Club',
    description: 'Learn how Hack Club works and what makes our coding clubs special.'
  },
  philosophy: {
    title: 'Our Philosophy - Hack Club',
    description: 'By the students, for the students. Learn about Hack Club\'s student-led approach.'
  },
  successStories: {
    title: 'Success Stories - Hack Club',
    description: 'See the amazing impact Hack Clubs are making around the world.'
  },
  clubEssentials: {
    title: 'Club Essentials - Hack Club',
    description: 'Learn what makes a great Hack Club and how to run successful meetings.'
  },
  activities: {
    title: 'Club Activities - Hack Club',
    description: 'Discover the exciting activities and events that make Hack Clubs special.'
  }
}

// CTA Cards configuration (for the application flow)
export const ctaCards = [
  {
    title: '1. Apply',
    description: 'Tell us about yourself & why you want to start a Hack Club. We\'ll get back to you within 24 hours.',
    color: '#3b82f6',
    colorEnd: '#1d4ed8',
    href: 'https://apply.hackclub.com/'
  },
  {
    title: '2. Onboarding call',
    description: 'Hop on a quick Zoom with someone from Hack Club HQ.',
    color: '#f97316',
    colorEnd: '#ea580c',
    href: 'https://hackclub.slack.com'
  },
  {
    title: '3. Get your first meeting scheduled',
    description: 'We\'ll help you get your first meeting scheduled & make sure you have everything you need.',
    color: '#a855f7',
    colorEnd: '#7c3aed',
    href: 'https://workshops.hackclub.com'
  }
]

// Success stories data
export const successStories = [
  {
    title: '500+ Active Clubs',
    description: 'From small rural schools to large urban districts, Hack Clubs are thriving in communities worldwide, reaching thousands of students every week.',
    color: 'primary'
  },
  {
    title: 'Student-Led Innovation',
    description: 'Club members have built everything from mobile apps solving local problems to hardware projects that help their communities.',
    color: 'green'
  },
  {
    title: 'College & Career Ready',
    description: 'Hack Club alumni go on to study computer science at top universities and land internships at leading tech companies.',
    color: 'blue'
  }
]

// Activities data
export const activities = [
  {
    icon: 'bolt',
    iconColor: 'cyan',
    title: 'Hackathons',
    description: 'Weekend-long coding events where students build projects, learn new skills, and compete for prizes'
  },
  {
    icon: 'event-code',
    iconColor: 'green',
    title: 'Game Jams',
    description: 'Create games in a short time frame, exploring creativity and game development'
  },
  {
    icon: 'welcome',
    iconColor: 'orange',
    title: 'Tech Talks',
    description: 'Students and industry professionals share knowledge about cutting-edge technology'
  },
  {
    icon: 'star-fill',
    iconColor: 'purple',
    title: 'Demo Days',
    description: 'Showcase member projects to parents, teachers, and the broader school community'
  }
]

// Meeting formula steps
export const meetingFormula = [
  {
    number: '1',
    color: 'blue',
    title: 'Arrive & build',
    description: 'The leader presents for a few minutes, getting the group started building something new.'
  },
  {
    number: '2',
    color: 'orange',
    title: 'Everyone gets hacking',
    description: 'Not hacking bank accounts, but rather being creative and making something awesome.'
  },
  {
    number: '3',
    color: 'green',
    title: 'Demo time',
    description: 'Everyone demos their work. As a leader, you\'re cultivating a community of makers.'
  }
]

// Club environment principles
export const clubPrinciples = [
  {
    icon: '✓',
    color: 'blue',
    title: 'Inclusive',
    description: 'Welcome everyone, regardless of experience level'
  },
  {
    icon: '✓',
    color: 'orange',
    title: 'Project-based',
    description: 'Learn by building real things, not through lectures'
  },
  {
    icon: '✓',
    color: 'green',
    title: 'Collaborative',
    description: 'Help each other, share knowledge, celebrate wins'
  }
]

export default {
  navigation,
  pageMetadata,
  ctaCards,
  successStories,
  activities,
  meetingFormula,
  clubPrinciples
}

