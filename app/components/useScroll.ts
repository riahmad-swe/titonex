"use client";

import { useEffect } from "react";

export function useThrottledScroll(onScrollCallback: () => void) {
	useEffect(() => {
		let ticking = false;

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					onScrollCallback();
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", onScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, [onScrollCallback]);
}
