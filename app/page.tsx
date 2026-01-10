import AnimatedWaves from "./components/AnimatedWaves";
import ServiceCard from "./components/ServiceCard";

export default function Home() {
	return (
		<main className="relative min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-gray-200 overflow-hidden">
			{/* HERO */}
			<section className="relative isolate">
				{/* Background Banner Image */}
				<div className="absolute inset-0 -z-10">
					<img
						src="/banner.png"
						alt="Titonex Banner"
						className="w-full h-full object-cover"
					/>

					{/* Overlay for readability */}
					<div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/80 to-slate-900/60" />
				</div>

				{/* Hero Content */}
				<div className="max-w-7xl mx-auto px-6 pt-32 pb-40">
					<div className="max-w-3xl">
						<h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
							Building Software
							<br />
							<span className="text-accent">
								That Performs Under Pressure
							</span>
						</h1>

						<p className="text-gray-300 text-lg mb-8">
							Titonex is a software development company building
							scalable technology for essential, real-world
							services across logistics, mobility, healthcare, and
							water infrastructure - where reliability and speed
							are non-negotiable.
						</p>

						<div className="flex flex-wrap gap-4">
							<button
								className="
                inline-flex items-center justify-center
                px-8 py-3 rounded-full
                bg-accent text-white font-semibold
                shadow-lg shadow-blue-600/30
                hover:bg-blue-500 hover:shadow-blue-500/40
                transition-all duration-200
                active:scale-95
                "
							>
								Explore Our Platforms
							</button>

							<button
								className="
                inline-flex items-center justify-center
                px-8 py-3 rounded-full
                bg-accent text-white font-semibold
                shadow-lg shadow-blue-600/30
                hover:bg-blue-500 hover:shadow-blue-500/40
                transition-all duration-200
                active:scale-95
                "
							>
								Contact Us
							</button>
						</div>
					</div>
				</div>

				<AnimatedWaves />
			</section>

			{/* SERVICES */}
			<section className="relative z-10 bg-slate-950 py-24">
				<div className="max-w-7xl mx-auto px-6">
					<h2 className="text-3xl font-bold mb-12 text-center">
						Our Core Platforms
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<ServiceCard
							title="Cold Storage"
							description="Operational efficiency, inventory tracking, and data-driven decision-making for cold storage logistics with high reliability."
						/>

						<ServiceCard
							title="Gari-X"
							description="An on-demand emergency mobility platform connecting people to rapid transportation when time is critical."
						/>

						<ServiceCard
							title="Sustho"
							description="Digital infrastructure enabling faster access to emergency medical care with secure, high-availability systems."
						/>

						<ServiceCard
							title="Water Technology"
							description="An essential pure water solution for water treatment plants, drinkable purification systems, and critical water infrastructure management with lifetime services."
						/>
					</div>
				</div>
			</section>

			{/* FOOTER */}
			<footer className="border-t border-slate-800 py-6 text-center text-xs text-gray-400">
				© 2026 Titonex: Software Solutions
			</footer>
		</main>
	);
}
