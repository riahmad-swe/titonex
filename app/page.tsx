import {
	FaEnvelope,
	FaFacebookF,
	FaInstagram,
	FaTelegram,
	FaWhatsapp,
	FaXTwitter,
	FaYoutube,
} from "react-icons/fa6";
import ServiceCard from "./components/ServiceCard";
import Image from "next/image";
import AnimatedWavesClient from "./components/AnimatedWavesClient";
import Snowfall from "./components/Snowfall";

export default function Home() {
	return (
		<main className="relative min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-gray-200 overflow-hidden">
			<Snowfall />
			{/* HERO */}
			<section className="relative isolate">
				{/* Background Banner Image */}
				<div className="absolute inset-0 -z-10">
					<Image
						src="/banner.png"
						alt="Titonex Banner"
						priority
						fill
						sizes="100vw"
						className="object-cover"
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
							That Performs
							<br />
							Under Pressure
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
								Explore Our Products
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

				<AnimatedWavesClient />
			</section>

			{/* SERVICES */}
			<section className="relative z-10 bg-slate-950 py-24">
				<div className="max-w-7xl mx-auto px-6">
					<h2 className="text-3xl font-bold mb-12 text-center">
						Our Core Products
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<ServiceCard
							title="Cold Storage"
							description="A high-reliability software platform for monitoring inventory, billings, and operations across cold storage facilities with data-driven control."
						/>

						<ServiceCard
							title="Gari-X"
							description="An on-demand emergency mobility platform that enables rapid, reliable transportation when time-critical response is required."
						/>

						<ServiceCard
							title="Sustho"
							description="A digital healthcare solution designed to accelerate access to emergency medical services through secure, high-availability systems."
						/>

						<ServiceCard
							title="Water Technology"
							description="Software solutions for managing water treatment plants, purification systems, RO filters, and critical water infrastructure operations."
						/>
					</div>
				</div>
			</section>

			{/* FOOTER */}
			<footer className="relative bg-slate-950 border-t border-slate-900">
				<div className="max-w-7xl mx-auto px-6 py-16">
					{/* Top Grid */}
					<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
						{/* Brand */}
						<div>
							<h3 className="text-lg font-semibold mb-4">
								Titonex
							</h3>
							<p className="text-sm text-gray-400 leading-relaxed mb-6">
								Streamlining your life. Smarter systems for your
								life.
							</p>

							{/* Social Icons */}
							<div className="flex gap-1.5">
								<a
									href="#"
									className="
        flex h-8 w-8 items-center justify-center
        rounded-full
        border border-slate-700
        text-gray-400
        transition-all duration-200
        hover:text-white hover:border-accent
        hover:bg-accent/10
        hover:shadow-md hover:shadow-blue-600/30
        active:scale-95
      "
								>
									<FaEnvelope />
								</a>
								<a
									href="#"
									className="
        flex h-8 w-8 items-center justify-center
        rounded-full
        border border-slate-700
        text-gray-400
        transition-all duration-200
        hover:text-white hover:border-accent
        hover:bg-accent/10
        hover:shadow-md hover:shadow-blue-600/30
        active:scale-95
      "
								>
									<FaFacebookF />
								</a>
								<a
									href="#"
									className="
        flex h-8 w-8 items-center justify-center
        rounded-full
        border border-slate-700
        text-gray-400
        transition-all duration-200
        hover:text-white hover:border-accent
        hover:bg-accent/10
        hover:shadow-md hover:shadow-blue-600/30
        active:scale-95
      "
								>
									<FaInstagram />
								</a>
								<a
									href="#"
									className="
        flex h-8 w-8 items-center justify-center
        rounded-full
        border border-slate-700
        text-gray-400
        transition-all duration-200
        hover:text-white hover:border-accent
        hover:bg-accent/10
        hover:shadow-md hover:shadow-blue-600/30
        active:scale-95
      "
								>
									<FaXTwitter />
								</a>
								<a
									href="#"
									className="
        flex h-8 w-8 items-center justify-center
        rounded-full
        border border-slate-700
        text-gray-400
        transition-all duration-200
        hover:text-white hover:border-accent
        hover:bg-accent/10
        hover:shadow-md hover:shadow-blue-600/30
        active:scale-95
      "
								>
									<FaWhatsapp />
								</a>
								<a
									href="#"
									className="
        flex h-8 w-8 items-center justify-center
        rounded-full
        border border-slate-700
        text-gray-400
        transition-all duration-200
        hover:text-white hover:border-accent
        hover:bg-accent/10
        hover:shadow-md hover:shadow-blue-600/30
        active:scale-95
      "
								>
									<FaTelegram />
								</a>
								<a
									href="#"
									className="
        flex h-8 w-8 items-center justify-center
        rounded-full
        border border-slate-700
        text-gray-400
        transition-all duration-200
        hover:text-white hover:border-accent
        hover:bg-accent/10
        hover:shadow-md hover:shadow-blue-600/30
        active:scale-95
      "
								>
									<FaYoutube />
								</a>
							</div>
						</div>

						{/* About */}
						<div>
							<h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-gray-300">
								About
							</h4>
							<ul className="space-y-2 text-sm">
								<li>
									<a
										href="#"
										className="
          group inline-flex items-center gap-1
          text-gray-400
          transition-all duration-200
          hover:text-white
        "
									>
										<span
											className="
            relative
            after:absolute after:left-0 after:-bottom-0.5
            after:h-px after:w-0
            after:bg-accent
            after:transition-all after:duration-300
            group-hover:after:w-full
          "
										>
											About Us
										</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="
          group inline-flex items-center gap-1
          text-gray-400
          transition-all duration-200
          hover:text-white
        "
									>
										<span
											className="
            relative
            after:absolute after:left-0 after:-bottom-0.5
            after:h-px after:w-0
            after:bg-accent
            after:transition-all after:duration-300
            group-hover:after:w-full
          "
										>
											Careers
										</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="
          group inline-flex items-center gap-1
          text-gray-400
          transition-all duration-200
          hover:text-white
        "
									>
										<span
											className="
            relative
            after:absolute after:left-0 after:-bottom-0.5
            after:h-px after:w-0
            after:bg-accent
            after:transition-all after:duration-300
            group-hover:after:w-full
          "
										>
											Contact
										</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="
          group inline-flex items-center gap-1
          text-gray-400
          transition-all duration-200
          hover:text-white
        "
									>
										<span
											className="
            relative
            after:absolute after:left-0 after:-bottom-0.5
            after:h-px after:w-0
            after:bg-accent
            after:transition-all after:duration-300
            group-hover:after:w-full
          "
										>
											Sponsorship
										</span>
									</a>
								</li>
							</ul>
						</div>
						{/* Products */}
						<div>
							<h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-gray-300">
								Products
							</h4>
							<ul className="space-y-2 text-sm">
								<li>
									<a
										href="#"
										className="
          group inline-flex items-center gap-1
          text-gray-400
          transition-all duration-200
          hover:text-white
        "
									>
										<span
											className="
            relative
            after:absolute after:left-0 after:-bottom-0.5
            after:h-px after:w-0
            after:bg-accent
            after:transition-all after:duration-300
            group-hover:after:w-full
          "
										>
											Gari-X
										</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="

          group inline-flex items-center gap-1
          text-gray-400
          transition-all duration-200
          hover:text-white
        "
									>
										<span
											className="
            relative
            after:absolute after:left-0 after:-bottom-0.5
            after:h-px after:w-0
            after:bg-accent
            after:transition-all after:duration-300
            group-hover:after:w-full
          "
										>
											Sustho
										</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="
          group inline-flex items-center gap-1
          text-gray-400
          transition-all duration-200
          hover:text-white
        "
									>
										<span
											className="
            relative
            after:absolute after:left-0 after:-bottom-0.5
            after:h-px after:w-0
            after:bg-accent
            after:transition-all after:duration-300
            group-hover:after:w-full
          "
										>
											Cold Storage
										</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="
          group inline-flex items-center gap-1
          text-gray-400
          transition-all duration-200
          hover:text-white
        "
									>
										<span
											className="
            relative
            after:absolute after:left-0 after:-bottom-0.5
            after:h-px after:w-0
            after:bg-accent
            after:transition-all after:duration-300
            group-hover:after:w-full
          "
										>
											Water Technology
										</span>
									</a>
								</li>
							</ul>
						</div>
						{/* Legal */}
						<div>
							<h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-gray-300">
								Legal
							</h4>
							<ul className="space-y-2 text-sm">
								<li>
									<a
										href="/privacy"
										target="_blank"
										className="
          group inline-flex items-center gap-1
          text-gray-400
          transition-all duration-200
          hover:text-white
        "
									>
										<span
											className="
            relative
            after:absolute after:left-0 after:-bottom-0.5
            after:h-px after:w-0
            after:bg-accent
            after:transition-all after:duration-300
            group-hover:after:w-full
          "
										>
											Privacy Policy
										</span>
									</a>
								</li>
								<li>
									<a
										href="/terms"
										target="_blank"
										className="
          group inline-flex items-center gap-1
          text-gray-400
          transition-all duration-200
          hover:text-white
        "
									>
										<span
											className="
            relative
            after:absolute after:left-0 after:-bottom-0.5
            after:h-px after:w-0
            after:bg-accent
            after:transition-all after:duration-300
            group-hover:after:w-full
          "
										>
											Terms of Service
										</span>
									</a>
								</li>
								<li>
									<a
										href="/refund"
										target="_blank"
										className="
          group inline-flex items-center gap-1
          text-gray-400
          transition-all duration-200
          hover:text-white
        "
									>
										<span
											className="
            relative
            after:absolute after:left-0 after:-bottom-0.5
            after:h-px after:w-0
            after:bg-accent
            after:transition-all after:duration-300
            group-hover:after:w-full
          "
										>
											Refund & Cancellation
										</span>
									</a>
								</li>
								<li>
									<a
										href="/anti-discrimination"
										target="_blank"
										className="
          group inline-flex items-center gap-1
          text-gray-400
          transition-all duration-200
          hover:text-white
        "
									>
										<span
											className="
            relative
            after:absolute after:left-0 after:-bottom-0.5
            after:h-px after:w-0
            after:bg-accent
            after:transition-all after:duration-300
            group-hover:after:w-full
          "
										>
											Anti-Discrimination Policy
										</span>
									</a>
								</li>
								<li>
									<a
										href="/cookies"
										target="_blank"
										className="
          group inline-flex items-center gap-1
          text-gray-400
          transition-all duration-200
          hover:text-white
        "
									>
										<span
											className="
            relative
            after:absolute after:left-0 after:-bottom-0.5
            after:h-px after:w-0
            after:bg-accent
            after:transition-all after:duration-300
            group-hover:after:w-full
          "
										>
											Cookies Consent
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>

					{/* Divider */}
					<div className="my-8 h-px bg-slate-900" />

					{/* Bottom */}
					<div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-gray-500">
						<span>
							Titonex © {new Date().getFullYear()} All rights
							reserved
						</span>
					</div>
				</div>
			</footer>
		</main>
	);
}
