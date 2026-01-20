import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Cinematic3D from './components/sections/Cinematic3D';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Footer from './components/layout/Footer';

function App() {
    return (
        <div className="bg-background-dark min-h-screen">
            <Navbar />
            <main>
                {/* Placeholder for content to test scrolling */}
                <section id="home">
                    <Hero />
                </section>
                <section id="services">
                    <Services />
                </section>
                <Cinematic3D />
                <section id="about">
                    <About />
                </section>
                <section id="portfolio">
                    <Portfolio />
                </section>
            </main>
            <section id="contact">
                <Footer />
            </section>
        </div>
    );
}

export default App;
