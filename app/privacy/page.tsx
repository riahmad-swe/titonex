import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description:
		"Understand how Titonex collects, uses, and protects personal data across its platforms and services.",
	alternates: {
		canonical: "https://titonex.com/privacy",
	},
	openGraph: {
		title: "Privacy Policy | Titonex",
		description:
			"Details on data collection, usage, security practices, and user rights at Titonex.",
		url: "https://titonex.com/privacy",
		siteName: "Titonex",
		type: "article",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function PrivacyPolicy() {
	return (
		<main className="mx-auto 2xl:px-96 lg:px-64 md:px-24 px-6 pt-16 md:pt-24 pb-24 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 text-gray-300">
			<h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
				Privacy Policy
			</h1>

			<p className="text-sm text-gray-400 mb-10">
				Last Updated: 1/1/2026
			</p>

			{/* 1. Introduction */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					1. Introduction
				</h2>
				<p className="leading-relaxed text-justify">
					Titonex (&#34;we&#34;, &#34;our&#34;, &#34;us&#34;) is a
					software development company operating multiple digital
					services including SaaS platforms, emergency transportation
					(Gari-X), healthcare and medical support services (Sustho),
					and water purification technology services. We are committed
					to protecting user privacy and handling personal data
					responsibly, transparently, and lawfully.
				</p>
			</section>

			{/* 2. Information We Collect */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					2. Information We Collect
				</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						Personal identification data (name, phone number, email
						address)
					</li>
					<li>Account and service-related information</li>
					<li>
						Location data (only when required for emergency or
						service delivery)
					</li>
					<li>
						Health-related information (only for Sustho services and
						only with user consent)
					</li>
					<li>Usage data, logs, and device information</li>
					<li>
						Payment-related information (processed via licensed
						third-party payment providers)
					</li>
				</ul>
			</section>

			{/* 3. How We Use Information */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					3. How We Use Information
				</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Provide, operate, and improve our services</li>
					<li>Respond to emergencies and service requests</li>
					<li>Verify user identity and prevent fraud</li>
					<li>Comply with legal and regulatory obligations</li>
					<li>
						Communicate important updates and service-related
						notices
					</li>
				</ul>
			</section>

			{/* 4. Legal Basis */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					4. Legal Basis for Processing
				</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>User consent</li>
					<li>Contractual necessity</li>
					<li>Legal obligations under Bangladesh law</li>
					<li>
						Legitimate business interests without overriding user
						rights
					</li>
				</ul>
			</section>

			{/* 5. Data Sharing */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					5. Data Sharing & Disclosure
				</h2>
				<p className="mb-3">
					We do not sell personal data. Data may be shared only with:
				</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						Authorized service partners strictly for service
						delivery
					</li>
					<li>
						Government or regulatory authorities when legally
						required
					</li>
					<li>
						Licensed third-party service providers under strict
						confidentiality agreements
					</li>
				</ul>
			</section>

			{/* 6. Data Security */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					6. Data Security
				</h2>
				<p>
					We implement appropriate technical and organizational
					safeguards, including access control, encryption where
					applicable, and secure infrastructure, to protect data from
					unauthorized access, loss, or misuse.
				</p>
			</section>

			{/* 7. Data Retention */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					7. Data Retention
				</h2>
				<p>
					We retain personal data only for as long as necessary to
					fulfill service purposes or legal requirements. Data is
					securely deleted or anonymized when no longer required.
				</p>
			</section>

			{/* 8. User Rights */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					8. User Rights
				</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Access, correct, or update personal data</li>
					<li>Withdraw consent (where applicable)</li>
					<li>
						Request deletion of data, subject to legal obligations
					</li>
					<li>Raise concerns or complaints regarding data usage</li>
				</ul>
			</section>

			{/* 9. Cookies */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					9. Cookies & Tracking
				</h2>
				<p>
					Our platforms may use cookies or similar technologies to
					improve user experience and system performance. Users can
					control cookie preferences through their device or browser
					settings.
				</p>
			</section>

			{/* 10. Children */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					10. Children&#39;s Privacy
				</h2>
				<p>
					Our services are not intentionally directed at children
					under 18 without parental or legal guardian consent.
				</p>
			</section>

			{/* 11. Compliance */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					11. Compliance with Bangladesh Laws
				</h2>
				<p>
					This Privacy Policy is governed by the laws of Bangladesh,
					including but not limited to the Digital Personal Data
					Protection Act, 2023, ICT Act, and other applicable
					regulations.
				</p>
			</section>

			{/* 12. Changes */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					12. Changes to This Policy
				</h2>
				<p>
					We may update this Privacy Policy periodically. Changes will
					be posted on our official platforms.
				</p>
			</section>

			{/* 13. Contact */}
			<section>
				<h2 className="text-xl font-semibold mb-3 text-white">
					13. Contact Us
				</h2>
				<p>
					For privacy-related inquiries, contact:
					<br />
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
