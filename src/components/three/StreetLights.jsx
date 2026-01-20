import React, { useMemo } from 'react';
import * as THREE from 'three';

// Create a soft glow texture for the ground
function generateGlowTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, 'rgba(255, 200, 100, 1)'); // Bright center
    gradient.addColorStop(0.4, 'rgba(255, 150, 50, 0.3)'); // Soft edge
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)'); // Wipe

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);

    const tex = new THREE.CanvasTexture(canvas);
    return tex;
}

// Gradient texture for the volumetric beam (fade out at bottom)
function generateBeamTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 128; // Taller for smooth gradient
    const ctx = canvas.getContext('2d');

    // Linear gradient from top to bottom
    const gradient = ctx.createLinearGradient(0, 0, 0, 128);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)'); // Top: visible
    gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');   // Bottom: invisible

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 128);

    const tex = new THREE.CanvasTexture(canvas);
    return tex;
}

function LightPole({ position, rotationY, glowTexture, beamTexture }) {
    return (
        <group position={position} rotation={[0, rotationY, 0]}>
            {/* Pole Base */}
            <mesh position={[0, 5, 0]}>
                <cylinderGeometry args={[0.2, 0.3, 10]} />
                <meshStandardMaterial color="#111" roughness={0.5} />
            </mesh>
            {/* Arm */}
            <mesh position={[1.5, 9.5, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.15, 0.15, 3]} />
                <meshStandardMaterial color="#111" roughness={0.5} />
            </mesh>
            {/* Bulb / Fixture */}
            <mesh position={[3, 9.3, 0]}>
                <boxGeometry args={[0.8, 0.2, 0.4]} />
                <meshStandardMaterial color="#000" />
            </mesh>
            {/* Emissive Source */}
            <mesh position={[3, 9.2, 0]} rotation={[Math.PI, 0, 0]}>
                <planeGeometry args={[0.6, 0.3]} />
                <meshStandardMaterial
                    color="#ffaa00"
                    emissive="#ffaa00"
                    emissiveIntensity={10}
                    toneMapped={false}
                />
            </mesh>

            {/* FAKE VOLUMETRIC BEAM (Mesh) */}
            {/* Cylinder tapered to look like a cone */}
            <mesh position={[3, 4.5, 0]}>
                {/* openEnded=true to avoid caps issue with transparency */}
                <cylinderGeometry args={[0.2, 2.8, 9, 32, 1, true]} />
                <meshBasicMaterial
                    map={beamTexture}
                    color="#ffaa00"
                    transparent
                    opacity={0.8}
                    depthWrite={false}
                    side={THREE.DoubleSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* FLOOR GLOW (Plane) */}
            <mesh position={[3, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[12, 12]} />
                <meshBasicMaterial
                    map={glowTexture}
                    transparent
                    opacity={0.5}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                    color="#ffaa00"
                />
            </mesh>
        </group>
    );
}

export default function StreetLights() {
    const count = 60; // Increased density for cinematic feel
    const spacing = 40; // Closer together
    const offset = 9.5;

    const glowTex = useMemo(() => generateGlowTexture(), []);
    const beamTex = useMemo(() => generateBeamTexture(), []);

    // Transform data
    const lights = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const isLeft = i % 2 === 0;
            const side = isLeft ? -1 : 1;
            const zIndex = Math.floor(i / 2);

            const x = offset * side;
            const z = (zIndex * spacing) - 500;
            const y = 0;

            // Fix Rotation: Left (Side -1) needs to face Right (+1) -> 0 deg (Arm along +X)
            // Right (Side +1) needs to face Left (-1) -> 180 deg (Arm along -X)
            const rotationY = isLeft ? 0 : Math.PI;

            temp.push({ x, y, z, rotationY });
        }
        return temp;
    }, []);

    return (
        <group position={[0, -0.6, 0]}>
            {lights.map((light, i) => (
                <LightPole
                    key={i}
                    position={[light.x, light.y, light.z]}
                    rotationY={light.rotationY}
                    glowTexture={glowTex}
                    beamTexture={beamTex}
                />
            ))}
        </group>
    );
}
