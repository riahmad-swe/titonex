import "./globals.css";
import Navbar from "./components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
	metadataBase: new URL("https://titonex.com"),
	title: "Titonex",
	openGraph: {
		type: "website",
		siteName: "Titonex",
		locale: "en_US",
		images: [
			{
				url: "/og/home.png",
				width: 1200,
				height: 550,
				alt: "Titonex Software Solutions",
			},
		],
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
				<Navbar />
				<main className="pt-20">{children}</main>
			</body>
		</html>
	);
}
