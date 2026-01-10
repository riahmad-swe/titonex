"use client";

import Image from "next/image";

export default function Navbar() {
	return (
		<header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-slate-900/80 border-b border-slate-800">
			<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
				{/* Logo + Title */}
				<div className="flex items-center gap-2 cursor-default">
					<Image
						src="/logo.png"
						alt="Logo"
						width={36}
						height={36}
						className="rounded-full"
					/>
					<span className="text-lg font-semibold tracking-wide">Titonex</span>
				</div>

				{/* Links */}
				<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
					<a
						href="#"
						className="
    relative text-gray-300
    transition-all duration-200
    hover:text-white
    after:absolute after:left-0 after:-bottom-1
    after:h-0.5 after:w-0
    after:bg-accent
    after:transition-all after:duration-300
    hover:after:w-full"
					>
						Home
					</a>

					<a
						href="#"
						className="
    relative text-gray-300
    transition-all duration-200
    hover:text-white
    after:absolute after:left-0 after:-bottom-1
    after:h-0.5 after:w-0
    after:bg-accent
    after:transition-all after:duration-300
    hover:after:w-full"
					>
						Platforms
					</a>
					<a
						href="#"
						className="
    relative text-gray-300
    transition-all duration-200
    hover:text-white
    after:absolute after:left-0 after:-bottom-1
    after:h-0.5 after:w-0
    after:bg-accent
    after:transition-all after:duration-300
    hover:after:w-full"
					>
						Industries
					</a>
					<a
						href="#"
						className="
    relative text-gray-300
    transition-all duration-200
    hover:text-white
    after:absolute after:left-0 after:-bottom-1
    after:h-0.5 after:w-0
    after:bg-accent
    after:transition-all after:duration-300
    hover:after:w-full"
					>
						Engineering
					</a>
					<a
						href="#"
						className="
    relative text-gray-300
    transition-all duration-200
    hover:text-white
    after:absolute after:left-0 after:-bottom-1
    after:h-0.5 after:w-0
    after:bg-accent
    after:transition-all after:duration-300
    hover:after:w-full"
					>
						Contact
					</a>
				</nav>

				{/* CTA */}
				<button className="hidden md:inline-flex items-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-500 hover:shadow-lg transition active:scale-95">
					Get in Touch
				</button>
			</div>
		</header>
	);
}
