import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

// Helmet
import Helmet from 'react-helmet'

// Layout imports

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>React/Typescript template</title>
            </Helmet>
            <ParallaxProvider>
            {/* Pages here */}
            </ParallaxProvider>
        </>
    )
}

export default Home
