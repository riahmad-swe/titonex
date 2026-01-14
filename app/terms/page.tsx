export default function TermsOfService() {
	return (
		<main className="mx-auto 2xl:px-96 lg:px-64 md:px-24 px-6 pt-16 md:pt-24 pb-24 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 text-gray-300">
			<h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Terms of Service</h1>

			<p className="text-sm text-gray-400 mb-10">Last Updated: 1/1/2026</p>

			{/* 1. Acceptance of Terms */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					1. Acceptance of Terms
				</h2>
				<p className="leading-relaxed">
					By accessing or using any service operated by Titonex (&#34;we&#34;,
					&#34;our&#34;, &#34;us&#34;), you agree to be bound by these Terms and
					Conditions. If you do not agree, you must not use our services.
				</p>
				<p className="mt-3">
					These Terms apply to all services under Titonex, including SaaS products,
					Gari-X, Sustho, and Water Technology services.
				</p>
			</section>

			{/* 2. Eligibility */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">2. Eligibility</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Be at least 18 years old, or</li>
					<li>Use the service under supervision or consent of a legal guardian</li>
					<li>
						Confirm that all information provided is accurate, complete, and lawful
					</li>
				</ul>
			</section>

			{/* 3. Scope of Services */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">3. Scope of Services</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Titonex provides technology platforms and digital services only</li>
					<li>
						Gari-X facilitates emergency transportation connections but does not own
						or operate vehicles
					</li>
					<li>
						Sustho provides digital healthcare coordination and information support
						and does not replace professional medical diagnosis or treatment
					</li>
					<li>
						Water Technology provides water purification solutions and related
						technology services
					</li>
					<li>
						SaaS products are provided &#34;as is&#34; based on the agreed service
						scope
					</li>
				</ul>
			</section>

			{/* 4. User Responsibilities */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					4. User Responsibilities
				</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Use services lawfully and ethically</li>
					<li>Not misuse emergency or healthcare-related services</li>
					<li>Not submit false, misleading, or harmful information</li>
					<li>Not attempt to breach system security or misuse data</li>
				</ul>
				<p className="mt-3">
					Any misuse may result in suspension or termination of access.
				</p>
			</section>

			{/* 5. Payments */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">5. Payments & Charges</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Some services may require payment</li>
					<li>All applicable fees are disclosed before confirmation</li>
					<li>
						Payments are processed through licensed third-party payment providers
					</li>
					<li>Titonex is not responsible for third-party payment failures</li>
					<li>Refunds, if applicable, follow service-specific policies</li>
				</ul>
			</section>

			{/* 6. Data & Privacy */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">6. Data & Privacy</h2>
				<p>
					Use of our services is also governed by our Privacy Policy. By using Titonex
					services, you consent to lawful data collection and processing under
					Bangladesh law.
				</p>
			</section>

			{/* 7. Limitation of Liability */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					7. Limitation of Liability
				</h2>
				<p className="mb-3">To the maximum extent permitted by law:</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						Titonex is not liable for indirect, incidental, or consequential damages
					</li>
					<li>
						We are not responsible for service delays caused by network issues,
						third parties, natural disasters, or emergencies
					</li>
					<li>
						Medical and emergency outcomes depend on external factors beyond our
						control
					</li>
				</ul>
			</section>

			{/* 8. Third-Party Services */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					8. Third-Party Services
				</h2>
				<p>
					Our platforms may integrate with third-party providers. Titonex is not
					responsible for third-party actions, availability, or outcomes.
				</p>
			</section>

			{/* 9. Suspension */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					9. Suspension & Termination
				</h2>
				<p className="mb-3">We reserve the right to suspend or terminate access if:</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>These Terms are violated</li>
					<li>Fraud or misuse is detected</li>
					<li>Required by law or authorities</li>
				</ul>
			</section>

			{/* 10. Modifications */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">10. Modifications</h2>
				<p>
					We may update these Terms at any time. Continued use of our services after
					changes means acceptance of the updated Terms.
				</p>
			</section>

			{/* 11. Governing Law */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					11. Governing Law & Jurisdiction
				</h2>
				<p>
					These Terms are governed by the laws of Bangladesh. Any dispute shall fall
					under the jurisdiction of Bangladeshi courts.
				</p>
			</section>

			{/* 12. Contact */}
			<section>
				<h2 className="text-xl font-semibold mb-3 text-white">12. Contact</h2>
				<p>
					For questions regarding these Terms:
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
