export default function WhyTitonex() {
	return (
		<section className="py-20 bg-slate-900/40 border-y border-slate-800">
			<div className="max-w-6xl mx-auto">
				{/* Section Header */}
				<div className="mb-8 max-w-3xl">
					<h2 className="text-3xl font-bold text-white mb-4">
						Why Titonex
					</h2>
					<p className="text-gray-300 text-lg leading-relaxed">
						We build technology for real-world responsibility, not
						experiments. Titonex focuses on long-term trust,
						operational clarity, and systems that perform when it
						matters most.
					</p>
				</div>

				{/* Visual Grid */}
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{/* Card 1 */}
					<div
						className="rounded-xl bg-slate-950/60 p-6 transition-all hover:border-accent
        hover:-translate-y-1
        shadow-lg shadow-blue-600/30"
					>
						<div className="text-accent text-3xl mb-4">🛡️</div>
						<h3 className="text-xl font-semibold text-white mb-2">
							Built for Reliability
						</h3>
						<p className="text-gray-400 leading-relaxed">
							Our products are designed for high-availability
							environments where downtime, failure, or
							inconsistency is not acceptable.
						</p>
					</div>

					{/* Card 2 */}
					<div
						className="rounded-xl bg-slate-950/60 p-6  transition-all hover:border-accent
        hover:-translate-y-1
        shadow-lg shadow-blue-600/30"
					>
						<div className="text-accent text-3xl mb-4">⚙️</div>
						<h3 className="text-xl font-semibold text-white mb-2">
							Real-World Engineering
						</h3>
						<p className="text-gray-400 leading-relaxed">
							We design software around actual workflows, physical
							operations, and regulatory constraints—not
							theoretical use cases.
						</p>
					</div>

					{/* Card 3 */}
					<div
						className="rounded-xl bg-slate-950/60 p-6  transition-all hover:border-accent
        hover:-translate-y-1
        shadow-lg shadow-blue-600/30"
					>
						<div className="text-accent text-3xl mb-4">🔐</div>
						<h3 className="text-xl font-semibold text-white mb-2">
							Security & Ethics First
						</h3>
						<p className="text-gray-400 leading-relaxed">
							Privacy, data protection, medical ethics, and
							non-discrimination are built into both our
							technology and operational decisions.
						</p>
					</div>

					{/* Card 4 */}
					<div
						className="rounded-xl bg-slate-950/60 p-6  transition-all hover:border-accent
        hover:-translate-y-1
        shadow-lg shadow-blue-600/30"
					>
						<div className="text-accent text-3xl mb-4">📈</div>
						<h3 className="text-xl font-semibold text-white mb-2">
							Scalable by Design
						</h3>
						<p className="text-gray-400 leading-relaxed">
							Our systems are architected to grow from local
							deployments to nationwide operations without rework
							or instability.
						</p>
					</div>

					{/* Card 5 */}
					<div
						className="rounded-xl bg-slate-950/60 p-6  transition-all hover:border-accent
        hover:-translate-y-1
        shadow-lg shadow-blue-600/30"
					>
						<div className="text-accent text-3xl mb-4">🤝</div>
						<h3 className="text-xl font-semibold text-white mb-2">
							Product, Not Brokerage
						</h3>
						<p className="text-gray-400 leading-relaxed">
							We eliminate agent-based dependency and opaque
							practices through transparent, platform-driven
							service models.
						</p>
					</div>

					{/* Card 6 */}
					<div
						className="rounded-xl bg-slate-950/60 p-6  transition-all hover:border-accent
        hover:-translate-y-1
        shadow-lg shadow-blue-600/30"
					>
						<div className="text-accent text-3xl mb-4">🏗️</div>
						<h3 className="text-xl font-semibold text-white mb-2">
							Long-Term Focus
						</h3>
						<p className="text-gray-400 leading-relaxed">
							We prioritize durability, maintainability, and
							long-term value over short-term features or rapid
							experimentation.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
