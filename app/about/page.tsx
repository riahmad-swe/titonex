import type { Metadata } from "next";
import WhyTitonex from "../components/WhyTitonex";

export const metadata: Metadata = {
	title: "About",
	description:
		"Learn about Titonex, a Bangladesh-based software company building enterprise-grade software, mobility platform, healthcare support system, and water purification solutions.",
};

export default function AboutPage() {
	return (
		<main className="md:px-24 px-6 pt-16 md:pt-20 pb-24 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 text-gray-300">
			{/* Page Header */}
			<header className="mb-12 text-center">
				<h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
					About Titonex
				</h1>
				<p className="text-lg text-gray-300 leading-relaxed">
					Building smarter modern systems for real-world needs
				</p>
			</header>

			{/* Company Overview */}
			<section className="mb-12">
				<h2 className="text-2xl font-semibold text-white mb-4">
					Company Overview
				</h2>
				<p className="leading-relaxed mb-4">
					Titonex is a Bangladesh-based software development and
					technology services company focused on building
					enterprise-grade, real-world solutions. As a parent company,
					Titonex operates across software, mobility, healthcare
					support, and water technology - sectors where reliability,
					responsibility, and long-term trust matter most.
				</p>
				<p className="leading-relaxed">
					We design and deliver scalable digital platforms and
					practical services that solve real operational problems for
					businesses and individuals, while maintaining strong ethical
					and regulatory standards.
				</p>
			</section>

			{/* Mission */}
			<section className="mb-12">
				<h2 className="text-2xl font-semibold text-white mb-4">
					Our Mission
				</h2>
				<p className="leading-relaxed mb-4">
					Our mission is to build secure, scalable, and
					high-availability software and services that address
					real-world challenges across multiple industries.
				</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						Develop enterprise and industry-focused SaaS products,
						including business management systems, logistics
						software, and chain-business platforms.
					</li>
					<li>
						Provide a transparent, platform-based mobility service
						that supports emergency transportation alongside
						everyday travel needs.
					</li>
					<li>
						Simplify access to healthcare through fast, ethical, and
						technology-driven medical support.
					</li>
					<li>
						Deliver reliable water purification solutions combined
						with intelligent software systems.
					</li>
				</ul>
			</section>

			{/* Vision */}
			<section className="mb-12">
				<h2 className="text-2xl font-semibold text-white mb-4">
					Our Vision
				</h2>
				<p className="leading-relaxed mb-4">
					Our vision is to become a trusted technology backbone for
					essential services in Bangladesh, where software, physical
					services, and ethical operations work together to protect
					users from inefficiency, exploitation, and unnecessary
					complexity.
				</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						Businesses operate on reliable, locally-relevant
						enterprise software.
					</li>
					<li>
						Emergency and mobility services function without brokers
						or agents, ensuring fairness and transparency.
					</li>
					<li>
						Healthcare access is faster, more affordable, and
						digitally enabled without compromising ethics.
					</li>
					<li>
						Water technology solutions integrate proven physical
						systems with modern software for monitoring, control,
						and sustainability.
					</li>
				</ul>
			</section>

			{/* What We Do */}
			<section className="mb-12">
				<h2 className="text-2xl font-semibold text-white mb-6">
					What We Do
				</h2>

				{/* Enterprise & SaaS */}
				<div className="mb-10">
					<h3 className="text-xl font-semibold text-white mb-3">
						Enterprise & SaaS Solutions
					</h3>
					<ul className="list-disc pl-6 space-y-2">
						<li>Company and operations management systems.</li>
						<li>
							SaaS platforms for logistics, supply chains, and
							service-based businesses.
						</li>
						<li>
							Custom enterprise solutions designed for scalability
							and long-term use.
						</li>
					</ul>
				</div>

				{/* Gari-X */}
				<div className="mb-12">
					<h3 className="text-xl font-semibold text-white mb-3">
						Gari-X – Mobility & Emergency Platform
					</h3>
					<p className="mb-4 leading-relaxed">
						Gari-X operates strictly as a technology platform, not a
						transport operator. The platform is designed to protect
						users from agent-based exploitation and ensure
						transparent pricing and accountability.
					</p>
					<ul className="list-disc pl-6 space-y-2">
						<li>Emergency transportation services.</li>
						<li>
							Regular ride options similar to ride-sharing
							platforms.
						</li>
						<li>Long-distance and tour bookings.</li>
						<li>Airport pickup and drop-off services.</li>
						<li>School pickup and drop services.</li>
					</ul>
				</div>

				{/* Sustho */}
				<div className="mb-12">
					<h3 className="text-xl font-semibold text-white mb-3">
						Sustho – Digital Healthcare Support
					</h3>
					<p className="mb-4 leading-relaxed">
						Sustho is a digital healthcare coordination platform
						designed to reduce delays, cost barriers, and dependency
						on intermediaries in medical access.
					</p>
					<ul className="list-disc pl-6 space-y-2">
						<li>
							Online consultation with registered and specialty
							doctors.
						</li>
						<li>Prescriptions and immediate treatment guidance.</li>
						<li>
							Access to senior and nationally recognized doctors
							without travel.
						</li>
						<li>Discounted partner diagnostic lab services.</li>
						<li>
							Follow-ups, report reviews, and updated
							prescriptions.
						</li>
						<li>
							Blood bank information, health tips, and medical
							updates.
						</li>
					</ul>
					<p className="mt-3 text-sm text-gray-400">
						Sustho supports healthcare delivery but does not replace
						physical medical treatment or emergency services.
					</p>
				</div>

				{/* Water Technology */}
				<div>
					<h3 className="text-xl font-semibold text-white mb-3">
						Water Technology Solutions
					</h3>
					<ul className="list-disc pl-6 space-y-2">
						<li>Home RO filter installation.</li>
						<li>Water quality testing.</li>
						<li>Iron removal plant installation.</li>
						<li>Swimming pool water treatment.</li>
						<li>Industrial wastewater management systems.</li>
						<li>
							De-mineralized water plants for pharmaceutical and
							industrial use.
						</li>
					</ul>
					<p className="mt-3 leading-relaxed">
						Alongside physical services, we build and integrate
						software systems for monitoring, control, and
						operational efficiency.
					</p>
				</div>
			</section>

			{/* Engineering Philosophy */}
			<section className="mb-12">
				<h2 className="text-2xl font-semibold text-white mb-4">
					Engineering & Operations Philosophy
				</h2>
				<p className="leading-relaxed mb-4">
					Our engineering approach is built on three core principles:
				</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Security-first design.</li>
					<li>Scalable architecture.</li>
					<li>High-availability systems.</li>
				</ul>
				<p className="mt-4 leading-relaxed">
					We design systems that are resilient, maintainable, and
					capable of operating under real-world pressure.
				</p>
			</section>

			{/* Ethics & Compliance */}
			<section className="mb-12">
				<h2 className="text-2xl font-semibold text-white mb-4">
					Ethics, Safety & Compliance
				</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Privacy and data protection.</li>
					<li>Medical ethics and informed consent.</li>
					<li>Non-discrimination and equal access.</li>
					<li>
						Regulatory alignment with Bangladesh laws and applicable
						standards.
					</li>
				</ul>
				<p className="mt-4 leading-relaxed">
					Ethical responsibility is embedded into both our technology
					and service operations.
				</p>
			</section>

			{/* Who We Serve */}
			<section className="mb-12">
				<h2 className="text-2xl font-semibold text-white mb-4">
					Who We Serve
				</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Enterprises and SMEs.</li>
					<li>Service-based businesses.</li>
					<li>Industry operators.</li>
					<li>Individual consumers.</li>
				</ul>
				<p className="mt-3 text-sm text-gray-400">
					(Excluding direct government service at this stage.)
				</p>
			</section>

			{/* Why Titonex */}
			<WhyTitonex />
		</main>
	);
}
