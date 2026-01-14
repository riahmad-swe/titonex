export default function RefundCancellationPolicy() {
	return (
		<main className="mx-auto 2xl:px-96 lg:px-64 md:px-24 px-6 pt-16 md:pt-24 pb-24 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 text-gray-300">
			<h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
				Refund & Cancellation Policy
			</h1>

			<p className="text-sm text-gray-400 mb-10">
				Last Updated: 1/1/2026
			</p>

			{/* 1. General Policy */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					1. General Policy
				</h2>
				<p className="leading-relaxed">
					Titonex aims to maintain transparency and fairness in all
					payments. Refunds and cancellations are subject to service
					type, usage status, and applicable laws of Bangladesh.
				</p>
			</section>

			{/* 2. SaaS Products */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					2. SaaS Products
				</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						Subscription fees are generally non-refundable once the
						service period has started.
					</li>
					<li>
						If a technical failure from Titonex prevents service
						access for a significant period, a partial or full
						refund may be considered at our discretion.
					</li>
					<li>
						Cancellation of subscriptions will stop future billing
						but will not refund the current billing cycle.
					</li>
				</ul>
			</section>

			{/* 3. Gari-X */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					3. Gari-X (Emergency Transportation)
				</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						Once an emergency request is accepted or a vehicle is
						dispatched, no refund is applicable.
					</li>
					<li>
						If a service is cancelled before dispatch, any paid
						amount may be refunded after deducting applicable
						processing fees.
					</li>
					<li>
						Titonex is not responsible for delays or outcomes caused
						by traffic, weather, or third-party service providers.
					</li>
				</ul>
			</section>

			{/* 4. Sustho */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					4. Sustho (Health & Medical Services)
				</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						Consultation or service fees are non-refundable once a
						doctor or medical professional is assigned or a session
						has started.
					</li>
					<li>
						If a service is cancelled before confirmation, a refund
						may be processed as per the service rules.
					</li>
					<li>
						Medical outcomes are not guaranteed and are not grounds
						for refunds.
					</li>
				</ul>
			</section>

			{/* 5. Water Technology */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					5. Water Technology Services
				</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						Payments for equipment, installation, or services are
						non-refundable once work has started.
					</li>
					<li>
						If Titonex fails to deliver the agreed service due to
						internal reasons, a refund or adjustment may be
						considered.
					</li>
				</ul>
			</section>

			{/* 6. Payment Processing */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					6. Payment Processing
				</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						Refunds, where applicable, will be processed through the
						original payment method.
					</li>
					<li>
						Processing time may take 7-14 business days, depending
						on banks or payment gateways.
					</li>
				</ul>
			</section>

			{/* 7. Fraud & Misuse */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					7. Fraud & Misuse
				</h2>
				<p>
					No refunds will be issued in cases of misuse, false claims,
					policy violations, or fraudulent activity.
				</p>
			</section>

			{/* 8. Policy Changes */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3 text-white">
					8. Policy Changes
				</h2>
				<p>
					Titonex reserves the right to update this policy at any
					time. Continued use of services indicates acceptance of the
					updated policy.
				</p>
			</section>

			{/* 9. Contact */}
			<section>
				<h2 className="text-xl font-semibold mb-3 text-white">
					9. Contact
				</h2>
				<p>
					For refund or cancellation inquiries:
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
