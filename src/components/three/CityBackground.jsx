import React, { useMemo, useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';

// High-Quality Procedural Texture Generator
function generateBuildingTexture(hue, style = 'modern') {
    const width = 1024;
    const height = 2048; // "4k" vertical resolution for tall buildings
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Base Gradient (Sky reflection/Dark glass)
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, `hsl(${hue}, 40%, 15%)`); // Slightly lighter top
    gradient.addColorStop(1, `hsl(${hue}, 40%, 5%)`);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Grid / Mullions - Thinner relative to size for 'huge scale' look
    ctx.strokeStyle = `hsl(${hue}, 10%, 10%)`;
    ctx.lineWidth = 4; // Distinct frames
    // Verticals
    for (let x = 0; x < width; x += 64) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
    }
    // Horizontals (Floors)
    for (let y = 0; y < height; y += 32) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
    }

    // Windows
    const cols = width / 64;
    const rows = height / 32;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (Math.random() > 0.5) { // 50% lit
                const x = c * 64;
                const y = r * 32;

                const brightness = 50 + Math.random() * 50;
                const winHue = Math.random() > 0.95 ? 45 : hue; // Gold highlights

                ctx.fillStyle = `hsl(${winHue}, 70%, ${brightness}%)`;

                if (style === 'cyber') {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = ctx.fillStyle;
                    ctx.fillRect(x + 10, y + 10, 44, 4); // Thin neon strip
                    ctx.shadowBlur = 0;
                } else {
                    // Modern Office Window
                    ctx.fillRect(x + 8, y + 4, 48, 24);
                }
            }
        }
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.anisotropy = 16; // Sharper at angles
    return tex;
}

export default function CityBackground() {
    // Generate 3 unique high-res texture variants
    const textures = useMemo(() => [
        generateBuildingTexture(210, 'modern'), // Blue Glass
        generateBuildingTexture(190, 'modern'), // Cyan Glass
        generateBuildingTexture(30, 'modern'),  // Warm/Gold Office
    ], []);

    const count = 300;
    // Divide count mostly evenly among 3 textures
    const counts = [100, 100, 100];

    const meshes = [useRef(), useRef(), useRef()];
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Generate particles for each group
    const particlesGroups = useMemo(() => {
        return counts.map(c => {
            const temp = [];
            for (let i = 0; i < c; i++) {
                // Random position: Wide spread, clear the center road
                let x = (Math.random() - 0.5) * 800;
                // Ensure buildings are at least 60 units away from center
                if (Math.abs(x) < 60) x = x > 0 ? 60 + Math.random() * 50 : -60 - Math.random() * 50;

                const z = (Math.random() - 0.5) * 800;
                const y = -60;
                const height = Math.random() * 100 + 50; // Taller buildings
                temp.push({ x, y, z, height, rotation: Math.random() * Math.PI });
            }
            return temp;
        });
    }, []);

    useLayoutEffect(() => {
        particlesGroups.forEach((group, groupIndex) => {
            const meshRef = meshes[groupIndex];
            if (!meshRef.current) return;

            group.forEach((particle, i) => {
                dummy.position.set(particle.x, particle.y + particle.height / 2, particle.z);
                dummy.rotation.set(0, particle.rotation, 0); // Random rotation
                dummy.scale.set(15 + Math.random() * 10, particle.height, 15 + Math.random() * 10);
                dummy.updateMatrix();
                meshRef.current.setMatrixAt(i, dummy.matrix);
            });
            meshRef.current.instanceMatrix.needsUpdate = true;
        });
    }, [dummy, particlesGroups]);

    return (
        <group>
            {textures.map((tex, i) => (
                <instancedMesh key={i} ref={meshes[i]} args={[null, null, counts[i]]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial
                        map={tex}
                        color="#aaa"
                        roughness={0.1}
                        metalness={0.8}
                    />
                </instancedMesh>
            ))}
        </group>
    );
}
