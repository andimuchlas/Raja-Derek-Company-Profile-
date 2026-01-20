import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Traffic() {
    const count = 200; // Number of "cars"
    const meshRef = useRef();

    // Create dummy object for positioning
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Store car data: speed, lane, position
    const cars = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            // Spread cars far below in the city
            const x = (Math.random() - 0.5) * 400;
            const y = -58; // Just above ground level (ground is approx -60)
            const z = (Math.random() - 0.5) * 800;

            const speed = 0.5 + Math.random() * 1.5;
            // Color: Red for tail lights (away), White/Yellow for head lights (towards)
            // Simple logic: Half move forward (white/yellow), half backward (red)
            const direction = Math.random() > 0.5 ? 1 : -1;
            const color = direction > 0 ? new THREE.Color('#ffccaa') : new THREE.Color('#ff0000');

            temp.push({ position: new THREE.Vector3(x, y, z), speed, direction, color });
        }
        return temp;
    }, []);

    useFrame(() => {
        if (!meshRef.current) return;

        cars.forEach((car, i) => {
            // Move car
            car.position.z += car.speed * car.direction;

            // Loop around
            if (Math.abs(car.position.z) > 400) {
                car.position.z = -400 * Math.sign(car.position.z);
                // Randomize X slightly on respawn
                car.position.x = (Math.random() - 0.5) * 400;
            }

            dummy.position.copy(car.position);
            dummy.scale.set(2, 1, 4); // Box car shape
            dummy.updateMatrix();

            meshRef.current.setMatrixAt(i, dummy.matrix);
            meshRef.current.setColorAt(i, car.color);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
        if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[null, null, count]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial toneMapped={false} /> {/* Emissive-like look */}
        </instancedMesh>
    );
}
