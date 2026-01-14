import "./globals.css";
import Navbar from "./components/Navbar";
import { Metadata } from "next";
import ScrollToTop from "./components/ScrollToTop";

export const metadata: Metadata = {
	metadataBase: new URL("https://titonex.com"),
	title: {
		default: "Titonex",
		template: "%s | Titonex",
	},

	description:
		"Titonex is a software development company building scalable, high-availability platforms for SaaS, emergency mobility, healthcare, and water technology.",

	keywords: [
		"Titonex",
		"Titonex software",
		"software development company in Bangladesh",
		"enterprise software company Bangladesh",
		"mission critical software",
		"high availability systems",
		"scalable software solutions",
		"storage management software",
		"logistics software",
		"healthcare software",
		"doctor appointment software",
		"vehicle rental software",
		"transportation service",
		"emergency service software",
		"company management software",
		"business software",
	],

	openGraph: {
		type: "website",
		siteName: "Titonex",
		locale: "en_US",
		title: "Titonex",
		description:
			"Scalable and reliable software platforms for logistics, mobility, healthcare, and water infrastructure.",
		url: "https://titonex.com",
		images: [
			{
				url: "/og/home.png",
				width: 1200,
				height: 550,
				alt: "Titonex Software Solutions",
			},
		],
	},

	twitter: {
		card: "summary_large_image",
		title: "Titonex | Software Solutions",
		description:
			"Building high-availability software for real-world, mission-critical services.",
		images: ["/og/home.png"],
	},

	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className="dark"
		>
			<body className="bg-slate-950 text-gray-200">
				<ScrollToTop />
				<Navbar />
				<main className="pt-20">{children}</main>
			</body>
		</html>
	);
}
