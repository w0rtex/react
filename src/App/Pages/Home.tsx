import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

// Helmet
import Helmet from 'react-helmet'

// Layout imports

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>&lt;Compote /&gt; React Component Creator</title>
            </Helmet>
            <ParallaxProvider>
            {/* Pages here */}
            </ParallaxProvider>
        </>
    )
}

export default Home
