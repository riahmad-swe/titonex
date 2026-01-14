import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Anti-Discrimination Policy",
	description:
		"Learn about Titonex's commitment to providing a safe, inclusive, and non-discriminatory environment across all platforms and services.",

	alternates: {
		canonical: "https://titonex.com/anti-discrimination",
	},

	openGraph: {
		title: "Anti-Discrimination Policy | Titonex",
		description:
			"Titonex's policy on equal access, professional conduct, and zero tolerance for discrimination or harassment.",
		url: "https://titonex.com/anti-discrimination",
		siteName: "Titonex",
		type: "article",
	},

	robots: {
		index: true,
		follow: true,
	},
};

export default function AntiDiscriminationPolicy() {
	return (
		<main className="mx-auto 2xl:px-96 lg:px-64 md:px-24 px-6 pt-16 md:pt-24 pb-24 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 text-gray-300">
			<h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
				Anti-Discrimination Policy
			</h1>

			<p className="text-sm text-gray-400 mb-10">
				Last Updated: 1/1/2026
			</p>

			{/* 1. Policy Statement */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					1. Policy Statement
				</h2>
				<p className="leading-relaxed">
					Titonex is committed to providing a safe, inclusive, and
					respectful environment for all users, employees, partners,
					and service providers. We strictly prohibit any form of
					discrimination, harassment, or unequal treatment across all
					our platforms and services.
				</p>
			</section>

			{/* 2. Scope */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					2. Scope
				</h2>
				<p className="mb-3">This policy applies to:</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>All users of Titonex services</li>
					<li>
						Employees, contractors, drivers, doctors, vendors, and
						partners
					</li>
					<li>
						All services operated under Titonex, including Gari-X,
						Sustho, SaaS products, and Water Technology services
					</li>
				</ul>
			</section>

			{/* 3. Non-Discrimination */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					3. Non-Discrimination Commitment
				</h2>
				<p className="mb-3">
					Titonex does not tolerate discrimination based on:
				</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Gender, sex, or marital status</li>
					<li>Religion or belief</li>
					<li>Disability or health condition</li>
					<li>Age</li>
					<li>Ethnicity or social background</li>
					<li>Nationality</li>
					<li>
						Any other status protected under the laws of Bangladesh
					</li>
				</ul>
			</section>

			{/* 4. Equal Access */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					4. Equal Access to Services
				</h2>
				<p>
					All users are entitled to equal access to Titonex services.
					Service availability may vary only due to legitimate
					operational, safety, medical, or legal reasons—not personal
					bias or prejudice.
				</p>
			</section>

			{/* 5. Professional Conduct */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					5. Professional Conduct
				</h2>
				<p className="mb-3">
					All employees and service partners are expected to:
				</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Treat everyone with dignity and respect</li>
					<li>Maintain professional behavior at all times</li>
					<li>
						Avoid abusive language, harassment, or discriminatory
						conduct
					</li>
				</ul>
				<p className="mt-3">
					Any violation may result in suspension, termination, or
					legal action.
				</p>
			</section>

			{/* 6. Reporting */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					6. Reporting & Complaints
				</h2>
				<p>
					Users or partners may report discrimination or harassment
					through official Titonex communication channels. All
					complaints will be reviewed seriously and handled
					confidentially.
				</p>
			</section>

			{/* 7. Enforcement */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					7. Enforcement
				</h2>
				<p className="mb-3">
					Confirmed violations of this policy may result in:
				</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Service suspension or termination</li>
					<li>Removal from the Titonex platform</li>
					<li>Disciplinary or legal action where applicable</li>
				</ul>
			</section>

			{/* 8. Legal Compliance */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					8. Legal Compliance
				</h2>
				<p>
					This policy is governed by and aligned with the laws of
					Bangladesh, including constitutional principles of equality
					and applicable labor, consumer, and digital service
					regulations.
				</p>
			</section>

			{/* 9. Updates */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					9. Policy Updates
				</h2>
				<p>
					Titonex reserves the right to update this policy. Continued
					use of services indicates acceptance of the revised policy.
				</p>
			</section>

			{/* 10. Contact */}
			<section>
				<h2 className="text-xl font-semibold mb-3 text-white">
					10. Contact
				</h2>
				<p>
					For concerns related to discrimination:
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
