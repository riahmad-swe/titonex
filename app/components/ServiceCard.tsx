type Props = {
	title: string;
	description: string;
};

export default function ServiceCard({ title, description }: Props) {
	return (
		<div
			className="
        group
        bg-slate-900 border border-slate-800
        rounded-xl p-6
        transition-all duration-300
        hover:border-accent
        hover:-translate-y-1
        hover:shadow-xl hover:shadow-blue-900/30
        "
		>
			<h3
				className="
            text-xl font-semibold mb-3
            transition-colors duration-200
            group-hover:text-accent
        "
			>
				{title}
			</h3>

			<p className="text-gray-400 text-sm leading-relaxed">{description}</p>
		</div>
	);
}
