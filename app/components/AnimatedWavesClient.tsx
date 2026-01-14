"use client";

import dynamic from "next/dynamic";

const AnimatedWave = dynamic(() => import("./AnimatedWaves"), {
	ssr: false,
});

export default function AnimatedWavesClient() {
	return <AnimatedWave />;
}
