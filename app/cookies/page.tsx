export default function CookiePolicy() {
	return (
		<main className="mx-auto 2xl:px-96 lg:px-64 md:px-24 px-6 pt-16 md:pt-24 pb-24 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 text-gray-300">
			<h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
				Cookie Policy
			</h1>

			<p className="text-sm text-gray-400 mb-10">
				Last Updated: 1/1/2026
			</p>

			{/* What Are Cookies */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					What Are Cookies
				</h2>
				<p>
					Cookies are small text files stored on your device when you
					visit our website or use our applications.
				</p>
			</section>

			{/* How Titonex Uses Cookies */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					How Titonex Uses Cookies
				</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Ensure website and platform functionality</li>
					<li>Maintain secure user sessions</li>
					<li>Improve performance and user experience</li>
					<li>Analyze usage trends and system performance</li>
				</ul>
			</section>

			{/* Types of Cookies */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					Types of Cookies We Use
				</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						<strong>Essential Cookies:</strong> Required for core
						functionality and security
					</li>
					<li>
						<strong>Performance & Analytics Cookies:</strong> Help
						us understand how users interact with our services
					</li>
					<li>
						<strong>Preference Cookies:</strong> Remember user
						settings where applicable
					</li>
				</ul>
				<p className="mt-3">
					We do not use cookies for unauthorized advertising or sell
					cookie data to third parties.
				</p>
			</section>

			{/* Managing Cookies */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					Managing Cookies
				</h2>
				<p>
					You can control or disable cookies through your browser or
					device settings. Disabling essential cookies may affect
					service functionality.
				</p>
			</section>

			{/* Consent */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					Consent
				</h2>
				<p>
					By clicking “Accept” or continuing to use our services, you
					consent to the use of cookies as described in this policy.
				</p>
			</section>

			{/* Contact */}
			<section>
				<h2 className="text-xl font-semibold mb-3 text-white">
					Contact
				</h2>
				<p>
					📧{" "}
					<a
						href="mailto:contact@titonex.com"
						className="text-accent underline"
					>
						contact@titonex.com
					</a>
					<br />
					🏢 Titonex, Bangladesh
				</p>
			</section>
		</main>
	);
}
