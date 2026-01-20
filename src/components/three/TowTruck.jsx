import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { useGLTF, useScroll, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

export default function TowTruck(props) {
    const group = useRef();
    // Using the path relative to public folder
    const { nodes, materials, scene } = useGLTF('/glb/generic_civil_service_vehicles_pack.glb');

    const clonedScene = React.useMemo(() => scene.clone(), [scene]);

    useEffect(() => {
        clonedScene.traverse((child) => {
            if (child.isMesh) {
                // Default to hidden
                child.visible = false;

                // Check for "Tow" in name
                if (child.name && child.name.toLowerCase().includes('tow')) {
                    child.visible = true;
                    child.castShadow = true;
                    child.receiveShadow = true;

                    // Enhance Material for "4k" look
                    if (child.material) {
                        child.material.envMapIntensity = 2.0; // Stronger reflections
                        child.material.roughness = 0.2; // Shiny paint
                        child.material.metalness = 0.6; // Metallic look
                        child.material.needsUpdate = true;
                    }
                }

                // Fallback: Check parent name
                if (child.parent && child.parent.name && child.parent.name.toLowerCase().includes('tow')) {
                    child.visible = true;
                    child.castShadow = true;
                    child.receiveShadow = true;
                    child.parent.visible = true;

                    // Enhance Material for "4k" look
                    if (child.material) {
                        child.material.envMapIntensity = 2.0;
                        child.material.roughness = 0.2;
                        child.material.metalness = 0.6;
                        child.material.needsUpdate = true;
                    }
                }
            }
        });
    }, [clonedScene]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Truck starts far in the background (-Z) and drives towards camera (+Z)

            // Reset position to center first (handled by Group, but GSAP overwrites)
            // We need to ensure start point is centered on X.

            gsap.fromTo(group.current.position,
                { z: -120, x: 0, y: -0.6 }, // Start position
                {
                    z: 30, // End position (Safety stop before camera at 80)
                    x: 0,
                    y: -0.6,
                    scrollTrigger: {
                        trigger: "#cinematic-section",
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: 1.5,
                    },
                    ease: "power1.inOut"
                }
            );
        });
        return () => ctx.revert();
    }, []);

    useFrame((state) => {
        // const t = state.clock.getElapsedTime();
        // if (group.current) {
        //     // Suspension physics could go here
        // }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            {/* 
          Using Center to fix offset origin of the model. 
          rotation={[0, -Math.PI / 1, 0]} -> If it was facing left (-X), -90 (-PI/2) makes it face Back (-Z)? 
          Let's guess:
          If it faces Left in screenshot, that is likely +X or -X.
          To face Camera (+Z), we need to rotate.
          Let's try Math.PI (180) if it was facing away, but user said "side".
          If it's side, try -Math.PI / 2.
      */}
            <Center top position={[0, 0, 0]}>
                {/* top prop aligns it so it sits on top of the generic ground 0 */}
                {/* Visual adjustment: Shift Right (+X) and Rotate slightly Right (-Y) to fix perceived slant */}
                <primitive object={clonedScene} scale={[2.5, 2.5, 2.5]} rotation={[0, 1.9, 0]} />
            </Center>
        </group>
    );
}

useGLTF.preload('/glb/generic_civil_service_vehicles_pack.glb');
