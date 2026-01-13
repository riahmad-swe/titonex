"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "Platforms", href: "/platforms" },
	{ name: "Industries", href: "/industries" },
	{ name: "Engineering", href: "/engineering" },
	{ name: "Contact", href: "/contact" },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	const drawerRef = useRef<HTMLDivElement>(null);

	const isActive = (href: string) =>
		href === "/" ? pathname === "/" : pathname.startsWith(href);

	/* ===== Close on outside click ===== */
	useEffect(() => {
		if (!open) return;

		const handleClickOutside = (e: MouseEvent) => {
			if (
				drawerRef.current &&
				!drawerRef.current.contains(e.target as Node)
			) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, [open]);

	return (
		<header className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
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
					<span className="text-lg font-semibold tracking-wide">
						Titonex
					</span>
				</div>

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className={`
                relative transition-all
                ${
					isActive(link.href)
						? "text-white after:w-full"
						: "text-gray-300 hover:text-white"
				}
                after:absolute after:left-0 after:-bottom-1
                after:h-0.5 after:bg-accent
                after:transition-all after:duration-300
                after:w-0 hover:after:w-full
              `}
						>
							{link.name}
						</a>
					))}
				</nav>

				{/* Desktop CTA */}
				<button className="hidden md:inline-flex rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-500 hover:shadow-lg transition active:scale-95">
					Get In Touch
				</button>

				{/* Mobile Toggle */}
				<button
					onClick={() => setOpen(true)}
					className="md:hidden text-2xl text-white"
					aria-label="Open menu"
				>
					☰
				</button>
			</div>

			{/* ===== Mobile Drawer ===== */}
			<aside
				ref={drawerRef}
				className={`
          fixed top-0 right-0 z-50 h-full w-72
          bg-slate-950/90
          border-l border-slate-800
          shadow-2xl
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
			>
				<div className="px-6 py-5 flex items-center justify-between border-b border-slate-800">
					<span className="text-lg font-semibold">Go to</span>
					<button
						onClick={() => setOpen(false)}
						className="text-xl text-gray-400 hover:text-white transition"
						aria-label="Close menu"
					>
						✕
					</button>
				</div>

				<nav className="flex flex-col px-6 py-6 gap-5 bg-slate-950/95 text-sm">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							onClick={() => setOpen(false)}
							className={`
                transition-all
                ${
					isActive(link.href)
						? "text-white translate-x-1"
						: "text-gray-400 hover:text-white hover:translate-x-1"
				}
              `}
						>
							{link.name}
						</a>
					))}

					<button
						className="
              mt-6 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white
              shadow-md hover:bg-blue-500 hover:shadow-lg transition active:scale-95
            "
					>
						Get In Touch
					</button>
				</nav>
			</aside>
		</header>
	);
}
