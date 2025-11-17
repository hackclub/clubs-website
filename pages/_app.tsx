import * as React from 'react'
import NextApp, { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'

// import '@hackclub/theme/fonts/reg-bold.css'
import theme from '@hackclub/theme'
import { ThemeProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'

export default class App extends NextApp<AppProps> {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme as any}>
        <Global
          styles={(theme: any) => css`
            /* Global background that respects theme */
            html, body {
              background-color: ${theme.colors.background};
              margin: 0;
              padding: 0;
              transition: background-color 0.2s ease;
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            
            /* Ensure root div respects theme background */
            #__next {
              background-color: ${theme.colors.background};
              min-height: 100vh;
              transition: background-color 0.2s ease;
            }
            
            /* Better touch targets for mobile */
            button, a, [role="button"] {
              min-height: 44px;
              min-width: 44px;
            }
            
            /* Prevent horizontal scroll on mobile */
            html, body {
              overflow-x: hidden;
              max-width: 100vw;
            }
            
            /* Better image scaling */
            img {
              max-width: 100%;
              height: auto;
            }
            
            /* Responsive iframe scaling */
            iframe {
              max-width: 100%;
            }
            
            /* Hide scrollbar for webkit browsers */
            ::-webkit-scrollbar {
              display: none;
            }
            
            /* Hide scrollbar for IE, Edge and Firefox */
            html {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
            }
            
            body {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}
        />
        <ColorSwitcher />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

