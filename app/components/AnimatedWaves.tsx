"use client";

export default function AnimatedWaves() {
	return (
		<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
			<svg
				className="relative block w-[200%] h-32"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
			>
				<path
					d="M0,0V46.29c47.79,22,103.59,29.05,158,17.39C230.63,50,284,15.16,339,5.48c54.87-9.64,104.8,7.77,158,22.45C552.64,42.6,610,60.47,667,60.47s113.36-17.87,168-32.54c53.2-14.68,103.13-32.09,158-22.45,55,9.68,108.37,44.52,181,57.2V0Z"
					className="fill-blue-600 opacity-20 animate-wave"
				/>
			</svg>

			<style jsx>{`
				.animate-wave {
					animation: wave 10s linear infinite;
				}
				@keyframes wave {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}
			`}</style>
		</div>
	);
}
