import React, { useMemo } from 'react';
import * as THREE from 'three';

// Generate distinct maps for Color (Dark) and Roughness (Light/Matte)
function generateRoadTextures() {
    const width = 1024;
    const height = 1024;

    // 1. Color Map (Dark Asphalt)
    const canvasColor = document.createElement('canvas');
    canvasColor.width = width;
    canvasColor.height = height;
    const ctxColor = canvasColor.getContext('2d');
    ctxColor.fillStyle = '#222'; // Dark Grey
    ctxColor.fillRect(0, 0, width, height);

    // Add noise to color
    const imgDataColor = ctxColor.getImageData(0, 0, width, height);
    const dataColor = imgDataColor.data;
    for (let i = 0; i < dataColor.length; i += 4) {
        const n = (Math.random() - 0.5) * 40;
        dataColor[i] = Math.min(255, Math.max(0, dataColor[i] + n));
        dataColor[i + 1] = Math.min(255, Math.max(0, dataColor[i + 1] + n));
        dataColor[i + 2] = Math.min(255, Math.max(0, dataColor[i + 2] + n));
    }
    ctxColor.putImageData(imgDataColor, 0, 0);
    const colorMap = new THREE.CanvasTexture(canvasColor);
    colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;
    colorMap.repeat.set(2, 100);
    colorMap.anisotropy = 16;

    // 2. Roughness Map (Light/White -> Matte)
    const canvasRough = document.createElement('canvas');
    canvasRough.width = width;
    canvasRough.height = height;
    const ctxRough = canvasRough.getContext('2d');
    ctxRough.fillStyle = '#999';
    ctxRough.fillRect(0, 0, width, height);

    // Add noise to roughness
    const imgDataRough = ctxRough.getImageData(0, 0, width, height);
    const dataRough = imgDataRough.data;
    for (let i = 0; i < dataRough.length; i += 4) {
        const n = (Math.random() - 0.5) * 50;
        const val = 200 + n;
        dataRough[i] = dataRough[i + 1] = dataRough[i + 2] = Math.min(255, Math.max(0, val));
    }
    ctxRough.putImageData(imgDataRough, 0, 0);
    const roughnessMap = new THREE.CanvasTexture(canvasRough);
    roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping;
    roughnessMap.repeat.set(2, 100);
    roughnessMap.anisotropy = 16;

    return { colorMap, roughnessMap };
}

export default function Road() {
    const { colorMap, roughnessMap } = useMemo(() => generateRoadTextures(), []);

    // Elevated Highway
    return (
        <group position={[0, -0.6, 0]}>
            {/* Road Deck */}
            <mesh receiveShadow position={[0, -0.5, 0]}>
                <boxGeometry args={[20, 1, 1000]} />
                <meshStandardMaterial
                    map={colorMap}
                    roughnessMap={roughnessMap}
                    color="#ffffff"
                    roughness={1}
                    metalness={0}
                />
            </mesh>

            {/* Side Barriers (Concrete Walls) - Thinner and neater */}
            <mesh position={[-9.75, 0.5, 0]}>
                <boxGeometry args={[0.5, 2, 1000]} />
                <meshStandardMaterial color="#777777" roughness={0.5} />
            </mesh>
            <mesh position={[9.75, 0.5, 0]}>
                <boxGeometry args={[0.5, 2, 1000]} />
                <meshStandardMaterial color="#777777" roughness={0.5} />
            </mesh>

            {/* Road Markings (Lines) - Raised slightly above deck */}
            {/* Center Line (Dashed) */}
            {Array.from({ length: 100 }).map((_, i) => (
                <mesh key={i} position={[0, 0.02, (i * 10) - 500]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[0.2, 5]} />
                    <meshBasicMaterial color="#ffffff" opacity={0.6} transparent />
                </mesh>
            ))}

            {/* Side Lines (Solid) */}
            <mesh position={[-4, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[0.2, 1000]} />
                <meshBasicMaterial color="#ffffff" opacity={0.8} transparent />
            </mesh>
            <mesh position={[4, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[0.2, 1000]} />
                <meshBasicMaterial color="#ffffff" opacity={0.8} transparent />
            </mesh>

            {/* Pillars */}
            {Array.from({ length: 20 }).map((_, i) => (
                <group key={i} position={[0, -10, (i * 50) - 500]}>
                    {/* Main Column - Shortened to not protrude */}
                    <mesh>
                        <cylinderGeometry args={[2, 2, 18, 32]} />
                        <meshStandardMaterial color="#444444" />
                    </mesh>
                    {/* Cap - Lowered to support road from bottom */}
                    <mesh position={[0, 8, 0]}>
                        <boxGeometry args={[18, 2, 4]} />
                        <meshStandardMaterial color="#444444" />
                    </mesh>
                </group>
            ))}
        </group>
    );
}

