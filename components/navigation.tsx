import { useState, useEffect } from 'react'
import { Button, Flex } from 'theme-ui'

const Navigation: React.FC = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const scrollToSection = (sectionId: string): void => {
        if (isClient && typeof document !== 'undefined') {
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <Flex
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                pt: 1,
                pb: 1,
                px: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: '1px solid',
                borderColor: 'border',
                zIndex: 100,
                flexWrap: 'wrap',
                '@supports not (backdrop-filter: blur(20px))': {
                    backgroundColor: 'rgba(255, 255, 255, 0.7)'
                }
            }}
        >
            <Button
                sx={{
                    fontSize: 1,
                    cursor: 'pointer',
                    borderRadius: 'circle',
                    px: 3,
                    py: 2,
                    bg: 'dark',
                    color: 'white',
                    fontWeight: 'body',
                    border: 'none',
                    ':hover': {
                        bg: 'blue',
                        transform: 'scale(1.05)'
                    }
                }}
                onClick={() => scrollToSection('about')}
            >
                The Rundown
            </Button>
            <Button
                sx={{
                    fontSize: 1,
                    cursor: 'pointer',
                    borderRadius: 'circle',
                    px: 3,
                    py: 2,
                    bg: 'dark',
                    color: 'white',
                    fontWeight: 'body',
                    border: 'none',
                    ':hover': {
                        bg: 'green',
                        transform: 'scale(1.05)'
                    }
                }}
                onClick={() => scrollToSection('how-to')}
            >
                Get Started
            </Button>
            <Button
                sx={{
                    fontSize: 1,
                    cursor: 'pointer',
                    borderRadius: 'circle',
                    px: 3,
                    py: 2,
                    bg: 'dark',
                    color: 'white',
                    fontWeight: 'body',
                    border: 'none',
                    ':hover': {
                        bg: 'purple',
                        transform: 'scale(1.05)'
                    }
                }}
                onClick={() => scrollToSection('workshops')}
            >
                Resources
            </Button>
            <Button
                sx={{
                    fontSize: 1,
                    cursor: 'pointer',
                    borderRadius: 'circle',
                    px: 3,
                    py: 2,
                    bg: 'dark',
                    color: 'white',
                    fontWeight: 'body',
                    border: 'none',
                    ':hover': {
                        bg: 'orange',
                        transform: 'scale(1.05)'
                    }
                }}
                onClick={() => scrollToSection('faq')}
            >
                FAQ
            </Button>
            <Button
                as="a"
                href="https://apply.hackclub.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    fontSize: 1,
                    bg: 'red',
                    color: 'white',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    borderRadius: 'circle',
                    px: 3,
                    py: 2,
                    border: 'none',
                    fontWeight: 'bold',
                    ':hover': {
                        bg: 'red',
                        transform: 'scale(1.05)'
                    }
                }}
            >
                Apply
            </Button>
        </Flex>
    )
}

export default Navigation

