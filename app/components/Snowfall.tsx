"use client";

import { useEffect } from "react";
import styles from "./Snowflake.module.css";

export default function Snowfall() {
	useEffect(() => {
		if (window.innerWidth < 768) return; // disable on small mobile

		const container = document.getElementById("snow-container");
		if (!container) return;

		const createSnowflake = () => {
			const snowflake = document.createElement("span");
			snowflake.className = styles.snowflake;

			// Random start position
			snowflake.style.left = Math.random() * 100 + "vw";

			// Random fall duration
			snowflake.style.animationDuration = 10 + Math.random() * 10 + "s";

			// Random size
			const size = 8 + Math.random() * 10;
			snowflake.style.fontSize = size + "px";

			// Random opacity
			snowflake.style.opacity = (0.3 + Math.random() * 0.7).toString();

			// Random horizontal drift (wind strength)
			const drift = (Math.random() * 2 - 1) * 400;
			snowflake.style.setProperty("--drift", `${drift}px`);

			container.appendChild(snowflake);

			setTimeout(() => snowflake.remove(), 20000);
		};

		const interval = setInterval(createSnowflake, 500);

		return () => clearInterval(interval);
	}, []);

	return (
		<div
			id="snow-container"
			className={styles.container}
		/>
	);
}
