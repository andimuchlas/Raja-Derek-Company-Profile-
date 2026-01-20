import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Sky, useScroll, Sparkles } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import TowTruck from '../three/TowTruck';
import Road from '../three/Road';
import CityBackground from '../three/CityBackground';
import Traffic from '../three/Traffic';
import StreetLights from '../three/StreetLights';

export default function Cinematic3D() {
    return (
        <section id="cinematic-section" className="relative w-full h-screen flex flex-col justify-center items-center bg-[#050403] overflow-hidden border-b border-white/5">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Cinematic Details / HUD */}
            <div className="absolute top-24 left-6 md:left-20 z-20 pointer-events-none">
                <h3 className="text-white/40 text-xs font-mono tracking-[0.2em] uppercase">Fleet Status: Active</h3>
                <div className="mt-1 text-primary text-xs font-mono">UNIT ID: T-800</div>
            </div>

            <div className="absolute bottom-10 right-6 md:right-20 z-20 pointer-events-none text-right">
                <h3 className="text-white/40 text-xs font-mono tracking-[0.2em] uppercase">System</h3>
                <div className="mt-1 text-white text-xs font-mono">Ready for Dispatch</div>
            </div>

            {/* 3D Scene */}
            <div className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing">
                <Canvas
                    shadows
                    dpr={[1, 2]}
                    camera={{ position: [0, 4, 80], fov: 40 }} // Fixed at end of road
                    gl={{ antialias: true, toneMapping: 3 }} // ACESFilmicToneMapping
                >
                    <Suspense fallback={null}>
                        {/* Cinematic Lighting - High Contrast */}
                        <ambientLight intensity={0.5} color="#abcdef" />
                        <directionalLight position={[10, 20, 5]} intensity={3} castShadow color="#ffffff" shadow-bias={-0.0001} />

                        {/* Dramatic Point Lights for City Glow */}
                        <pointLight position={[-20, -10, 20]} intensity={100} color="#ff0000" distance={50} />
                        <pointLight position={[20, -10, 50]} intensity={100} color="#0000ff" distance={50} />

                        {/* Environment */}
                        <fog attach="fog" args={['#1a1a2e', 10, 150]} /> {/* Dark City Fog */}

                        {/* Objects */}
                        <TowTruck />
                        <Road />
                        <StreetLights />
                        <CityBackground />
                        <Traffic />

                        {/* Atmospheric Particles (City Dust/Embers) */}
                        <Sparkles
                            count={200}
                            scale={[40, 20, 100]}
                            size={4}
                            speed={0.4}
                            opacity={0.5}
                            color="#ffcc00"
                            position={[0, 5, 0]} // Floating above road
                        />

                        {/* Post-Processing Effects for Cinematic Realism */}
                        <EffectComposer disableNormalPass>
                            <Bloom
                                luminanceThreshold={1} // Only very bright things glow
                                mipmapBlur
                                intensity={1.5}
                                radius={0.6}
                            />
                            <Noise opacity={0.05} /> {/* Film grain */}
                            <Vignette eskil={false} offset={0.1} darkness={1.1} />
                        </EffectComposer>

                        <ContactShadows resolution={1024} scale={50} blur={4} opacity={0.6} far={10} color="#000000" />
                        <Environment preset="city" background={false} />
                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            enableRotate={false}
                            autoRotate={false} // Explicitly disable
                        />
                    </Suspense>
                </Canvas>
            </div>

            {/* Scanline Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1))] bg-[length:100%_4px]"></div>
        </section>
    );
}
